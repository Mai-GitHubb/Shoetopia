document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("[data-carousel-button]");
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots-container");
    let currentIndex = 0;

    // Function to move to the next slide
    const moveToNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        setActiveSlide(currentIndex);
    };

    // Function to set active slide and update dots
    const setActiveSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.setAttribute("data-active", true);
            } else {
                slide.removeAttribute("data-active");
            }
        });

        // Update dots
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    };

    // Add event listeners to buttons for manual navigation
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            currentIndex = (currentIndex + offset + slides.length) % slides.length;
            setActiveSlide(currentIndex);
        });
    });

    // Create dots and add event listeners to them for navigation
    slides.forEach((slide, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", () => setActiveSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Automatically move to the next slide every 3 seconds
    setInterval(moveToNextSlide, 5000);
});
