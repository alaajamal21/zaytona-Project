

import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        console.error("❌ لم يتم العثور على نموذج الاستفسارات!");
        return;
    }

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("✅ تم الضغط على زر الإرسال!");

        const name = contactForm.querySelector("input[placeholder=' أدخل اسمك']").value;
        const email = document.getElementById("username").value;
        const phone = contactForm.querySelector("input[placeholder=' أدخل رقم هاتفك']").value;
        const message = contactForm.querySelector(".message").value;

        console.log("📌 البيانات المدخلة:", { name, email, phone, message });

        if (!name || !email || !phone || !message) {
            alert("❌ يرجى ملء جميع الحقول!");
            return;
        }

        try {
            console.log("🔹 إرسال البيانات إلى Firestore...");
            await addDoc(collection(db, "contactMessages"), {
                name,
                email,
                phone,
                message,
                timestamp: new Date().toISOString()
            });
            console.log("✅ تم إرسال الاستفسار بنجاح!");
            alert("✅ تم إرسال رسالتك بنجاح!");
            contactForm.reset();
        } catch (error) {
            console.error("❌ خطأ أثناء إرسال الرسالة:", error);
            alert("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
        }
    });
});
