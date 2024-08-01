

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        window.open("jumbotron.html", "_blank");
    });
});
