function toggleForm() {
    document.getElementById("rsvp-form").style.display = "block";
}

function showForm() {
    document.getElementById("details-form").style.display = "block";
    document.getElementById("thank-you").style.display = "none";
}

function hideForm() {
    document.getElementById("details-form").style.display = "none";
    document.getElementById("thank-you").style.display = "block";
}

function submitForm() {
    // Aquí puedes añadir el código para enviar la información por correo.
    alert("Formulario enviado");
}
