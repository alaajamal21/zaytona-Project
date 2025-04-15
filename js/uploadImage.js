import { storage, db } from "./firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("uploadForm");
    const fileInput = document.getElementById("file");
    const uploadButton = document.getElementById("uploadBtn");

    if (!uploadForm || !fileInput || !uploadButton) {
        console.error("❌ تأكد من وجود الفورم و الـ input والزر بالصفحة");
        return;
    }

    uploadForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const file = fileInput.files[0];
        if (!file) {
            alert("❌ الرجاء اختيار صورة قبل الرفع");
            return;
        }

        try {
            console.log("🔄 جاري رفع الصورة...");

            // ✅ جلب بيانات المستخدم
            const user = JSON.parse(localStorage.getItem("user"));
            const userId = user ? user.uid : "unknown_user";

            // ✅ تحديد مسار تخزين الصور بمجلد مخصص لزيتونة
            const storageRef = ref(storage, `zaytona/uploaded_images/${userId}_${file.name}`);
            await uploadBytes(storageRef, file);

            const downloadURL = await getDownloadURL(storageRef);
            console.log("✅ تم رفع الصورة بنجاح!");
            console.log("📌 رابط الصورة:", downloadURL);

            // ✅ تخزين رابط الصورة مع userId في Firestore
            await addDoc(collection(db, "Zaytona_UploadedImages"), {
                imageUrl: downloadURL,
                uploadedAt: new Date().toISOString(),
                uploadedBy: userId
            });

            alert("✅ تم رفع الصورة وتخزين بياناتها بنجاح!");

        } catch (error) {
            console.error("❌ خطأ أثناء رفع الصورة:", error);
            alert(" حدث خطأ أثناء رفع الصورة! عليك تسجيل الدخول إلى المنصة والمحاولة مرة أخرى.");
        }
    });
});
