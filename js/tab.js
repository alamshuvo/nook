document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const counterSection = counters[0].closest('.flex'); // Adjust this if needed to target the whole section

    const startCounter = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const updateCount = () => {
                const count = +counter.innerText;
                const increment = target / 25; // Adjust for animation speed

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const observerOptions = {
        threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
                observer.unobserve(counterSection); // Stop observing to prevent re-triggering
            }
        });
    }, observerOptions);

    observer.observe(counterSection);
});





window.addEventListener('load', () => {
    const scrollContainer = document.querySelector(".image-slider-container");
    const backBtn = document.getElementById('backbtn');
    const nextBtn = document.getElementById('nextbtn');

    if (scrollContainer && backBtn && nextBtn) {
        // Mouse wheel event for scrolling horizontally
        scrollContainer.addEventListener("wheel", (e) => {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
        });

        // Scroll right (next button)
        nextBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft += scrollContainer.clientWidth / 2; // Adjust scroll amount as needed
        });

        // Scroll left (back button)
        backBtn.addEventListener("click", () => {
            scrollContainer.scrollLeft -= scrollContainer.clientWidth / 2; // Adjust scroll amount as needed
        });
    } else {
        console.error("Elements not found. Check the selector names.");
    }
});
