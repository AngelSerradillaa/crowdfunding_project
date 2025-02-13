emailjs.init("D4Tx2tvBiyglfk525");

document.querySelector(".footer__container__subs__form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector(".footer__container__subs__form__input-subs").value;
    
    emailjs.send("service_ybnhznc", "template_vzvnbot", {
        user_email: email,
        from_name: "Angel",
        to_name: "usuario"
    }, "D4Tx2tvBiyglfk525")
    .then(response => {
        alert("¡Email enviado con éxito!");
    }, error => {
        console.error("Error al enviar el email:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    });
});