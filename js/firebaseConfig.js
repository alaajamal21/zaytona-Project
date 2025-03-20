
// تحميل Firebase من الـ CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-performance.js";

// 🔥 بيانات Firebase الخاصة بالمشروع 
const firebaseConfig = {
    apiKey: "AIzaSyDVJ4_rOY2bmMKwOc2iqZBQr3Ph8QEFW-k",
    authDomain: "food-ordering-92c6e.firebaseapp.com",
    projectId: "food-ordering-92c6e",
    storageBucket: "food-ordering-92c6e.appspot.com", 
    messagingSenderId: "406512963880",
    appId: "1:406512963880:web:62235d583897dd8d58c01d",
    measurementId: "G-NFHKMR5K5H"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);       // ✅ المصادقة من المشروع الجديد
const db = getFirestore(app);    // ✅ قاعدة البيانات من المشروع الجديد
const storage = getStorage(app); // ✅ التخزين من المشروع الجديد
const performance = getPerformance(app);

// ✅ طباعة تأكيد في Console للتأكد من تحميل Firebase
console.log("✅ Firebase تم تحميله بنجاح ");

export { app, auth, db, storage };
