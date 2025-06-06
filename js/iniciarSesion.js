
document.getElementById("loginForm").addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value.trim();
    const pass1 = document.getElementById("contrasenya").value;
    const pass2 = document.getElementById("confirmarContrasenya").value;

    if (pass1 !== pass2) {
        alert("Las contraseñas no coinciden.");
        e.preventDefault();
        return;
    }

    if (nombre) {
        localStorage.setItem("nombreUsuario", nombre);
    }
});
