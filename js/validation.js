

// Sidebar Toggle
document
.querySelector(".menu-toggle")
.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.add("show-sidebar");
});

// Close Sidebar
document
.querySelector(".close-sidebar")
.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.remove("show-sidebar");
});
/* **************************************************************************************************************/


// GSAP
// navbar
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });

// form
gsap.from(".login-container", {
  duration: 1.5,
  y: 50,
  opacity: 0,
  ease: "power2.out",
});

// wrong password
document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault(); // منع إعادة تحميل الصفحة
  let password = document.getElementById("password");

  if (password.value.length < 6) { 
    gsap.to(password, { x: -10, duration: 0.1, repeat: 5, yoyo: true, ease: "power1.inOut" });
  }
});


// اهتزاز الشخصية عند تركيز المستخدم على حقول الإدخال
document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("focus", () => {
        gsap.to(".character-right", { y: -5, duration: 0.2, repeat: 3, yoyo: true, ease: "power1.inOut" });
        gsap.to(".character-left", { y: 10, duration: 0.2, repeat: 3, yoyo: true, ease: "power1.inOut" });
    });
});

