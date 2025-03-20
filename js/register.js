
import { auth, db } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    if (!form) {
        console.error("❌ لم يتم العثور على النموذج! تأكد من أن `id='loginForm'` موجود في `signUp.html`.");
        return;
    }

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); 
        console.log("✅ تم الضغط على زر التسجيل!");

        const fullName = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const phoneNumber = document.getElementById("number").value;

        console.log("📌 البيانات المدخلة:", { fullName, email, password, confirmPassword, phoneNumber });

        if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
            console.log("❌ لم يتم ملء جميع الحقول، لذا لن يستمر التسجيل.");
            message.innerHTML = "❌ يرجى ملء جميع الحقول!";
            message.style.color = "red";
            return;
        }

        if (password !== confirmPassword) {
            console.log("❌ كلمة المرور غير متطابقة!");
            message.innerHTML = "❌ كلمة المرور غير متطابقة!";
            message.style.color = "red";
            return;
        }

        try {
            console.log("🔹 محاولة إنشاء المستخدم في Firebase Authentication...");
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("✅ تم إنشاء المستخدم بنجاح!");
            const user = userCredential.user;
            console.log("🔹 معرف المستخدم الجديد:", user.uid);

            console.log("🔹 جاري تخزين بيانات المستخدم في Firestore...");

            const userData = {
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                appType: "Zaytona",  // ✅ تحديد أن هذا المستخدم يخص زيتونة
                createdAt: new Date().toISOString()
            };

            console.log("📌 البيانات قبل الإرسال إلى Firestore:", JSON.stringify(userData));

            // ✅ تخزين المستخدمين داخل مجلد `Zaytona_Users`
            await setDoc(doc(db, "Zaytona_Users", user.uid), userData);
            console.log("✅ تم تخزين بيانات المستخدم في Firestore بنجاح!");

            localStorage.setItem("user", JSON.stringify(userData));

            message.innerHTML = "✅ تم التسجيل بنجاح!";
            message.style.color = "green";

            setTimeout(() => {
                window.location.href = "home.html"; 
            }, 2000);

        } catch (error) {
            console.error("❌ خطأ أثناء التسجيل:", error);
            message.innerHTML = "❌ خطأ: " + error.message;
            message.style.color = "red";
        }
    });
});
