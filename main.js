const form = document.querySelector(".contact-form formulario");

form.addEventListener("enviar", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const descripción = document.getElementById('descripcion').value;
    const correo = document.getElementById('correo').value;

    console.log("Nombre:", nombre);
    console.log("Descripción:", descripción);
    console.log("Correo:", correo);

    alert("Hola " + nombre + ", su correo es " + correo + " y su motivo de contacto es: \n" + descripcion);
});