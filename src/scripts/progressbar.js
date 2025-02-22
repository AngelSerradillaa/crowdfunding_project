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

document.addEventListener("DOMContentLoaded", async function () {
    async function loadProgressData() {
        let projects;

        // Intentar cargar desde localStorage
        const storedData = localStorage.getItem("donationData");
        console.log(storedData);

        if (storedData) {
            projects = JSON.parse(storedData);
            console.log("Cargando datos desde localStorage...");
        } else {
            try {
                console.log("Cargando datos desde JSON...");
                const response = await fetch("data.json"); // Carga los datos iniciales
                projects = await response.json();
                projects = projects.projects; // Acceder al array de proyectos
                saveProgressData(projects); // Guardar en localStorage para futuras cargas
            } catch (error) {
                console.error("Error cargando los datos del JSON:", error);
                return;
            }
        }

        // Renderizar los datos en la interfaz
        projects.forEach(project => {
            const progressText = document.getElementById(`progress-text${project.id}`);
            const progressBar = document.getElementById(`progress-bar${project.id}`);

            if (progressText && progressBar) {
                progressText.textContent = `${project.collected}€ / ${project.goal}€`;
                progressBar.style.width = `${(project.collected / project.goal) * 100}%`;
            }
        });
    }

    function saveProgressData(projects) {
        localStorage.setItem("donationData", JSON.stringify(projects));
    }

    document.querySelectorAll(".project__container__form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const formId = this.id.replace("form-donation", "");
            console.log(formId);
            const input = document.getElementById(`quantity-donation${formId}`);
            const donationValue = parseInt(input.value);

            if (isNaN(donationValue) || donationValue <= 0) {
                console.warn("Valor de donación inválido:", donationValue);
                return;
            }

            // Obtener los datos actuales desde localStorage
            let projects = JSON.parse(localStorage.getItem("donationData")) || [];
            console.log(projects);

            let project = projects.find(p => p.id === parseInt(formId));
            if (project) {
                project.collected += donationValue;
            } else {
                console.error("No se encontró el proyecto con ID:", formId);
                return;
            }

            // Guardar en localStorage
            saveProgressData(projects);

            // Actualizar la interfaz
            const progressText = document.getElementById(`progress-text${formId}`);
            const progressBar = document.getElementById(`progress-bar${formId}`);
            progressText.textContent = `${project.collected}€ / ${project.goal}€`;
            progressBar.style.width = `${(project.collected / project.goal) * 100}%`;

            input.value = ""; // Limpiar el campo
            form.reset();
        });
    });

    // Cargar los datos al inicio
    loadProgressData();
});