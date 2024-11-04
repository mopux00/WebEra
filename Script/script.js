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


function changeLanguage() {
    const language = document.getElementById("language-selector").value;
    if (language === "ca") {
        window.location.href = "index.html"; // Redirige a la versión en catalán
    } else if (language === "es"){
        window.location.href = "indexEs.html"; // Redirige a la versión en castellano
    } else if (language === "en"){
        window.location.href = "indexEn.html"; // Redirige a la versión en castellano
    } else if (language === "fr"){
        window.location.href = "indexFr.html"; // Redirige a la versión en castellano
    }
}

/**** */


let lastScrollTop = 0; // Variable para almacenar la posición anterior del scroll
const navbar = document.querySelector('nav'); // Seleccionar el menú de navegación

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Obtener la posición actual del scroll

    if (currentScroll > lastScrollTop) {
        // El usuario se desplaza hacia abajo
        navbar.style.top = "-110px"; // Ajusta este valor según la altura de tu menú
    } else {
        // El usuario se desplaza hacia arriba
        navbar.style.top = "0"; // Mostrar el menú
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});
