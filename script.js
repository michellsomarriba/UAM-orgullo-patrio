function toggleDescripcion(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === "none" || desc.style.display === "") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}

function mostrarCalificacion() {
    var seleccion = document.getElementById("calificacion").value;
    document.getElementById("resultado").innerText = "Has dado una calificación de " + seleccion + " estrellas.";
}
