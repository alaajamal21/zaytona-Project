
import { auth, db } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("❌ لم يتم العثور على نموذج تسجيل الدخول! تأكد من أن `id='loginForm'` موجود في `login.html`.");
        return;
    } else {
        console.log("✅ تم العثور على نموذج تسجيل الدخول بنجاح.");
    }

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault(); 
        console.log("✅ تم الضغط على زر تسجيل الدخول!");

        const email = document.getElementById("username").value; 
        const password = document.getElementById("password").value;
        const message = document.createElement("p");  

        console.log("📌 بيانات تسجيل الدخول المدخلة:", { email, password });

        if (!email || !password) {
            console.log("❌ يرجى ملء جميع الحقول!");
            message.innerHTML = "❌ يرجى ملء جميع الحقول!";
            message.style.color = "red";
            loginForm.appendChild(message);
            return;
        }

        try {
            console.log("🔹 محاولة تسجيل الدخول في Firebase Authentication...");
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("✅ تم تسجيل الدخول بنجاح!", user.uid);

            // ✅ البحث عن بيانات المستخدم في Firestore داخل مجموعة `Zaytona_Users`
            const userDoc = await getDoc(doc(db, "Zaytona_Users", user.uid));

            if (!userDoc.exists()) {
                console.log("❌ هذا المستخدم غير مسجل في زيتونة!");
                alert("❌ لا يمكنك تسجيل الدخول إلى زيتونة!");
                return;
            }

            const userData = userDoc.data();

            // ✅ التحقق مما إذا كان المستخدم ينتمي إلى زيتونة
            if (userData.appType !== "Zaytona") {
                console.log("❌ هذا المستخدم ليس جزءًا من زيتونة!");
                alert("❌ لا يمكنك تسجيل الدخول إلى زيتونة!");
                return;
            }

            console.log("✅ تم التحقق من أن المستخدم ينتمي إلى زيتونة!");
            message.innerHTML = "✅ تم تسجيل الدخول بنجاح!";
            message.style.color = "green";
            loginForm.appendChild(message);

            // ✅ تخزين بيانات المستخدم في localStorage
            localStorage.setItem("user", JSON.stringify({
                uid: user.uid,
                email: user.email,
                fullName: userData.fullName
            }));
            console.log("📌 بيانات المستخدم تم تخزينها في `localStorage`:", localStorage.getItem("user"));

            // ✅ إعادة توجيه المستخدم إلى الصفحة الرئيسية بعد تسجيل الدخول
            setTimeout(() => {
                window.location.href = "home.html";
            }, 2000);

        } catch (error) {
            console.error("❌ خطأ أثناء تسجيل الدخول:", error);
            message.innerHTML = "❌ خطأ: " + error.message;
            message.style.color = "red";
            loginForm.appendChild(message);
        }
    });
});
