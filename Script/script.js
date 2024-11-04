function guardarDatos() {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let asunto = document.getElementById('assunto').value;
    let mensaje = document.getElementById('mensaje').value;
    if ((nombre == null || nombre.length == 0) || (email == null || email.length == 0) ||
        (asunto == null || asunto.length == 0) || (mensaje == null || mensaje.length == 0)) {
        var correcto = false;
        alert('Falta información');
        console.log(correcto);
    }
    else if (validarEmail(email)) {
        correcto = true;
        crearObjeto(nombre, email, asunto, mensaje);
        console.log(correcto);
    }
}
function validarEmail(valor) {
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    let val;
    if (!re.exec(valor)) {
        alert('Email no valido');
        val = false;
    }
    else {
        val = true;
    }
    return val;
}
function crearObjeto(nombreP, correoP, asuntoP, mensajeP) {
    var datos = {
        nombre: nombreP,
        email: correoP,
        asunto: asuntoP,
        mensaje: mensajeP
    };
    console.log(datos);
}
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-container button');

    function setActiveButton(event) {
        buttons.forEach(button => button.classList.remove('active'));
        event.currentTarget.classList.add('active');
    }

    buttons.forEach(button => {
        button.addEventListener('click', setActiveButton);
    });
});
