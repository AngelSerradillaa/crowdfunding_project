
document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel, index) => {
        const images = carousel.querySelectorAll(".carousel-item");
        const indicatorsContainer = carousel.querySelector(".carousel-indicators");
        let currentIndex = 0;
        let interval;

        // Crear indicadores dinámicamente
        images.forEach((_, i) => {
            const indicator = document.createElement("span");
            indicator.classList.add("indicator");
            if (i === 0) indicator.classList.add("active");
            indicator.dataset.index = i;
            indicatorsContainer.appendChild(indicator);

            // Evento para cambiar manualmente de imagen
            indicator.addEventListener("click", () => {
                clearInterval(interval);
                updateCarousel(i);
                startAutoSlide();
            });
        });

        const indicators = indicatorsContainer.querySelectorAll(".indicator");

        function updateCarousel(index) {
            images.forEach(img => img.classList.remove("active"));
            indicators.forEach(ind => ind.classList.remove("active"));

            images[index].classList.add("active");
            indicators[index].classList.add("active");

            currentIndex = index;
        }

        function nextImage() {
            let nextIndex = (currentIndex + 1) % images.length;
            updateCarousel(nextIndex);
        }

        function startAutoSlide() {
            interval = setInterval(nextImage, 7000);
        }

        startAutoSlide();
    });
});