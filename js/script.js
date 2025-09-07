document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper for the courses section
    const swiper = new Swiper(".course-slider", {
        // Optional parameters
        loop: true,
        spaceBetween: 30, // The space between slides
        grabCursor: true,

        // Autoplay
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },

        // If you need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Simple Fade-in on Scroll Animation for other sections
    const animatedElements = document.querySelectorAll(".animated-element");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    animatedElements.forEach((el) => {
        observer.observe(el);
    });
});
