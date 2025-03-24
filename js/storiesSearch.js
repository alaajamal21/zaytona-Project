document.getElementById("search-button").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value.trim();
    const stories = document.querySelectorAll(".story");
    const resultsContainer = document.getElementById("results");

    if (!searchInput) {
        alert("يرجى إدخال اسم القصة للبحث");
        return;
    }

    let foundStory = null;

    // البحث عن القصة المطابقة
    stories.forEach(story => {
        const titleElement = story.querySelector(".story-title");
        if (titleElement && titleElement.textContent.trim().includes(searchInput)) {
            foundStory = story.cloneNode(true); // نسخ القصة المطابقة
        }
    });

    // مسح النتائج السابقة وعرض القصة الجديدة فقط
    resultsContainer.innerHTML = ""; 

    if (foundStory) {
        foundStory.style.width = "300px"; // الاحتفاظ بنفس العرض
        foundStory.style.margin = "auto"; // إبقاء القصة في المنتصف
        resultsContainer.appendChild(foundStory);
    } else {
        resultsContainer.innerHTML = "<p>لم يتم العثور على أي قصة بهذا الاسم</p>";
    }
});
document.getElementById("search-Button").addEventListener("click", function () {
    const searchInput = document.getElementById("search-Input").value.trim();
    const stories = document.querySelectorAll(".story");
    const resultsContainer = document.getElementById("results");

    if (!searchInput) {
        alert("يرجى إدخال اسم القصة للبحث");
        return;
    }

    let foundStory = null;

    // البحث عن القصة المطابقة
    stories.forEach(story => {
        const titleElement = story.querySelector(".story-title");
        if (titleElement && titleElement.textContent.trim().includes(searchInput)) {
            foundStory = story.cloneNode(true); // نسخ القصة المطابقة
        }
    });

    // مسح النتائج السابقة وعرض القصة الجديدة فقط
    resultsContainer.innerHTML = ""; 

    if (foundStory) {
        foundStory.style.width = "300px"; // الاحتفاظ بنفس العرض
        foundStory.style.margin = "auto"; // إبقاء القصة في المنتصف
        resultsContainer.appendChild(foundStory);
    } else {
        resultsContainer.innerHTML = "<p>لم يتم العثور على أي قصة بهذا الاسم</p>";
    }
});
document.getElementById("button-search").addEventListener("click", function () {
    const searchInput = document.getElementById("input-search").value.trim(); // الحصول على النص المدخل في البحث
    const loginContainer = document.querySelector(".login-container"); // تحديد الفورم الرئيسي
    const resultsContainer = document.getElementById("results"); // تحديد منطقة عرض النتائج

    // التحقق مما إذا كان مربع البحث فارغًا
    if (!searchInput) {
        alert("يرجى إدخال اسم النموذج للبحث");
        return;
    }

    // التحقق مما إذا كان البحث يتطابق مع عنوان الفورم (هنا "تسجيل الدخول")
    const formTitle = "تسجيل الدخول"; // يمكنك تغييره حسب عنوان الفورم
    if (formTitle.includes(searchInput)) {
        // نسخ محتوى الفورم الأصلي بالكامل وعرضه داخل منطقة النتائج
        resultsContainer.innerHTML = loginContainer.innerHTML;
        resultsContainer.style.display = "block"; // التأكد من ظهوره عند البحث
    } else {
        resultsContainer.innerHTML = "<p>لم يتم العثور على أي نموذج بهذا الاسم</p>";
        resultsContainer.style.display = "block"; // عرض رسالة الخطأ
    }
});