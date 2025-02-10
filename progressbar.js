/*
let progress = 0;


const progressBar = document.getElementById("progress-bar3");
const form = document.getElementById("form-donation3");

form.addEventListener("submit", function(event) {
    updateProgress(event);
});

function updateProgress(event) {
    console.log("Se ha ejecutado el updateProgress");
    event.preventDefault();
    const text = document.getElementById("progress-text").textContent.trim();
    const valueAfterSlash = parseInt(text.split("/ ")[1].trim().replace("€", ""));
    const valueBeforeSlash = parseInt(text.split("/ ")[0].trim().replace("€", ""));
    console.log(valueAfterSlash, valueBeforeSlash);
    const donationValue = parseInt(document.getElementById("quantity-donation3").value);
    if (!isNaN(valueAfterSlash) && !isNaN(valueBeforeSlash) && !isNaN(donationValue)) {
        const newProgress = valueBeforeSlash + donationValue;
        document.getElementById("progress-text").textContent = newProgress + "€ / " + valueAfterSlash + "€";
        if (newProgress <= valueAfterSlash) {
            const progressBarWidth = (newProgress / valueAfterSlash) * 100 + "%";
            progressBar.style.width = progressBarWidth;
        }else{
            progressBar.style.width = "100%";
        }
    }
    form.reset();
}*/

document.querySelectorAll(".form-donation").forEach(form => {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener el número de identificación del formulario
        const formId = this.id.replace("form-donation", ""); // Extrae el número (por ejemplo, "3")

        // Buscar elementos relacionados usando el ID
        const progressText = document.getElementById(`progress-text${formId}`);
        const progressBar = document.getElementById(`progress-bar${formId}`);
        const input = document.getElementById(`quantity-donation${formId}`);
        console.log(progressText, progressBar, input)

        if (!progressText || !progressBar || !input) {
            console.error(`No se encontraron elementos para la barra de progreso con ID: ${formId}`);
            return;
        }

        // Obtener valores actuales del progreso
        const progressTextValue = progressText.textContent.trim();
        let [currentValue, maxValue] = progressTextValue.split("/").map(v => parseInt(v.replace("€", "").trim()));
        let donationValue = parseInt(input.value);

        if (!isNaN(donationValue) && donationValue > 0) {
            let newProgress = currentValue + donationValue;
            progressText.textContent = `${newProgress}€ / ${maxValue}€`;
            if (newProgress > maxValue) newProgress = maxValue; // Evita que pase el 100%

            // Actualizar la barra de progreso
            
            progressBar.style.width = (newProgress / maxValue) * 100 + "%";
        }

        form.reset(); // Limpiar el campo de entrada
    });
});