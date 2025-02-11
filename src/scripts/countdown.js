document.addEventListener("DOMContentLoaded", function () {
    // Definir las fechas límite para cada proyecto
    const countdowns = [
        { id: "countdown1", endDate: "2025-03-01T23:59:59" }, // Proyecto 1
        { id: "countdown2", endDate: "2025-04-15T23:59:59" }, // Proyecto 2
        { id: "countdown3", endDate: "2025-06-30T23:59:59" }  // Proyecto 3
    ];

    function updateCountdown(id, endDate) {
        const timerElement = document.getElementById(id);
        if (!timerElement) return;

        function calculateTime() {
            const now = new Date().getTime();
            const end = new Date(endDate).getTime();
            const difference = end - now;

            if (difference <= 0) {
                timerElement.textContent = "¡Tiempo terminado!";
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            timerElement.textContent = `Tiempo restante: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        calculateTime();
        setInterval(calculateTime, 1000);
    }

    // Iniciar la cuenta atrás para cada proyecto
    countdowns.forEach(({ id, endDate }) => {
        updateCountdown(id, endDate);
    });
});