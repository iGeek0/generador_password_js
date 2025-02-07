function generarContrasena() {
    const maxLongitud = 128;
    const minLongitud = 4;

    let caracteres = "";
    if (document.getElementById("incluyeLetras").checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("incluyeNumeros").checked) {
        caracteres += "0123456789";
    }
    if (document.getElementById("incluyeEspeciales").checked) {
        caracteres += "!@#$%^&*";
    }

    let longitud = document.getElementById("longitud").value;

    if (longitud < minLongitud || longitud > maxLongitud) {
        alert("La longitud debe estar entre 4 y 128.");
        return;
    }

    let contrasena = "";

    if (caracteres.length === 0) {
        alert("Debes seleccionar al menos una opción.");
        return;
    }

    for (let i = 0; i < longitud; i++) {
        let randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }

    document.getElementById("resultado").value = contrasena;
}