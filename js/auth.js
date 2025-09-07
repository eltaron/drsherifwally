document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const showRegisterLink = document.getElementById("show-register");
    const showLoginLink = document.getElementById("show-login");

    // ** الكود الجديد المضاف **
    // التحقق من الرابط عند تحميل الصفحة
    const handleFormVisibility = () => {
        if (window.location.hash === "#register") {
            // إذا كان الرابط يحتوي على #register، أظهر نموذج إنشاء الحساب
            loginForm.classList.add("d-none");
            registerForm.classList.remove("d-none");
        } else {
            // وإلا، أظهر نموذج تسجيل الدخول (الحالة الافتراضية)
            registerForm.classList.add("d-none");
            loginForm.classList.remove("d-none");
        }
    };

    // شغّل الدالة عند تحميل الصفحة
    handleFormVisibility();

    // --- الكود السابق يبقى كما هو للتحكم في الأزرار الداخلية ---

    // عند الضغط على رابط "أنشئ حسابك الآن!"
    showRegisterLink.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("d-none");
        registerForm.classList.remove("d-none");
        // يمكننا تغيير الرابط لتجربة مستخدم أفضل (اختياري)
        history.pushState(null, null, "#register");
    });

    // عند الضغط على رابط "تسجيل الدخول"
    showLoginLink.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.classList.add("d-none");
        loginForm.classList.remove("d-none");
        // نعود للرابط الأساسي (اختياري)
        history.pushState(null, null, "auth.html");
    });
});
