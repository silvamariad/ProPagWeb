const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario : /^[a-zA-Z0-9\_\-]{4,16}$/, //letras, nuemeros, guion y guion_bajo.
    nombre  : /^[a-zA-ZÁ-ý\s]{1,48}$/, //letras y espacios, pueden llevar acentos.
    tipdoc  : /^[a-zA-ZÁ-ý\s]{1,48}$/,
    nrodoc  : /^[a-zA-ZÁ-ý\s]{1,48}$/, //letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitales.
    correo  : /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/, //validacion para el campo del correo
    telefono: /^\d{7,10}$/ //7 a 10 numeros
}
/** Validacion de los campos **/
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;

        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case "tipdoc":
            validarCampo(expresiones.tipdoc, e.target, 'tipdoc');
        break;

        case "nrodoc":
            validarCampo(expresiones.nrodoc, e.target, 'nrodoc');
        break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password');
        break;

        case "password2":
            validarCampo(expresiones.password, e.target, 'password');
        break;

        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;

        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(e.target.value)){
        document.getElementById (`grupo__${campo}`      ).classList.remove('formulario__grupo-incorrecto');
        document.getElementById (`grupo__${campo}`      ).classList.add('formulario__grupo-correcto');
        document.querySelector  (`#grupo__${campo} i`   ).classList.add('fa-check-circle');
        document.querySelector  (`#grupo__${campo} i`   ).classList.remove('fa-times-circle');
        document.querySelector  (`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error');
    } else { 
        document.getElementById (`grupo__${campo}`      ).classList.add('formulario__grupo-incorrecto');
        document.getElementByI  (`grupo__${campo}`      ).classList.remove('formulario__grupo-correcto');
        document.querySelector  (`#grupo__${campo} i`   ).classList.add('fa-times-circle');
        document.querySelector  (`#grupo__${campo} i`   ).classList.remove('fa-check-circle');
        document.querySelector  (`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
});