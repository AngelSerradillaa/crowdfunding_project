emailjs.init("D4Tx2tvBiyglfk525");

document.querySelector(".foooter-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector(".input-subs").value;
    
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