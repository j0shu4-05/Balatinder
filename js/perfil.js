
// Mostrar nombre desde localStorage
window.addEventListener("DOMContentLoaded", () => {
    const nombre = localStorage.getItem("nombreUsuario");
    if (nombre) {
        document.getElementById("profileName").textContent = nombre;
    }
});

function updateProfile() {
    const newDesc = document.getElementById("editDesc").value;
    if (newDesc) {
        document.getElementById("profileDesc").textContent = newDesc;
    }

    const newPic = document.getElementById("profilePicInput").files[0];
    if (newPic) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profileImage").src = e.target.result;
        };
        reader.readAsDataURL(newPic);
    }
}

function cerrarSesion() {
    localStorage.removeItem("nombreUsuario");
    window.location.href = "iniciarSesion.html";
}
