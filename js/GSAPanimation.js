

  
// Navbar
gsap.from(".navbar", { duration: 1, y: -50,delay: 0.2, opacity: 0, ease: "power2.out" });

// تحريك نص الهيرو
gsap.from(".hero-text", { duration: 1.5, x: 100, opacity: 0, delay: 2.5 });
gsap.from(".heronavbar", { duration: 1.5, x: -100, opacity: 0, delay: 2 });

// تأثير على الأزرار
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power1.out" });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1, duration: 0.3, ease: "power1.in" });
  });
});

// gsap.from(".btn", {
//   opacity: 0,
//   duration: 1.2,
//   delay: 3,
//   ease: "power2.out",
//   stagger: 0.2,
// });


// تأثير للبطاقات
const cards = document.querySelectorAll(".story-card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, duration: 1, ease: "power1.out" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 1, ease: "power1.in" });
  });
});




// الصفحات الثانوية
// عنوان الصفحة
gsap.from(".title", { 
  duration: 1.5, 
  delay:0.5,
  opacity: 0, 
  y: -50, 
  ease: "power1.out", 
  onComplete: function() {
      gsap.to(".title", { 
          x: 2, 
          repeat: 4, 
          yoyo: true, 
          duration: 0.1 
      });
  }
});

// تأثير للفقرات
gsap.from(".paragraph", {
  opacity: 0,
  y: 50,
  duration: 2,
  delay: 0.8,
  ease: "power2.out",
});
///
gsap.from(".story",{
  opacity: 0,
  y: 90,
  duration: 2,
  delay: 0.8,
  ease: "power2.out",
});
const cards1 = document.querySelectorAll(".story");

cards1.forEach((cards1) => {
  cards1.addEventListener("mouseenter", () => {
    gsap.to(cards1, { scale: 1.05, duration: 1, ease: "power1.out" });
  });

  cards1.addEventListener("mouseleave", () => {
    gsap.to(cards1, { scale: 1, duration: 1, ease: "power1.in" });
  });
});

// محتوى الصفحة
gsap.to(".privacy-content", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".services-content", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".contact-container", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".faq-section", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".privacy", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".categories", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to("section.intro", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".categories", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".search-section", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to("section.story", { opacity: 1, duration: 1.5, delay: 1, x: -10});
gsap.to(".title-viewStory", { opacity: 1, duration: 1.5, delay: 1, x: -10});

// اهتزاز الشخصية عند تركيز المستخدم على حقول الإدخال
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", () => {
      gsap.to(".character-right", { y: -5, duration: 0.2, repeat: 3, yoyo: true, ease: "power1.inOut" });
      gsap.to(".character-left", { y: 10, duration: 0.2, repeat: 3, yoyo: true, ease: "power1.inOut" });
  });
});


