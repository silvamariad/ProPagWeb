const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario : /^[a-zA-Z0-9\_\-]{4,16}$/, //letras, nuemeros, guion y guion_bajo.
    nombre  : /^[a-zA-ZÁ-ý\s]{1,48}$/, //letras y espacios, pueden llevar acentos.
    nrodoc  : /^[a-zA-ZÁ-ý\s]{1,48}$/, //letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitales.
    correo  : /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/, //validacion para el campo del correo
    telefono: /^\d{7,10}$/ //7 a 10 numeros
}
/** Validacion de los campos **/
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__usuario i').classList.remove('fa-times-circle');
                document.querySelector('#grupo__usuario i').classList.add('fa-check-circle');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.remove('formulario__input-error');
            } else { 
                document.getElementById('grupo__usuario').classList.add('formulario__grupo-incorrecto');
                document.getElementById('grupo__usuario').classList.remove('formulario__grupo-correcto');
                document.querySelector('#grupo__usuario i').classList.add('fa-times-circle');
                document.querySelector('#grupo__usuario i').classList.remove('fa-check-circle');
                document.querySelector('#grupo__usuario .formulario__input-error').classList.add('formulario__input-error');
            }
        break;

        case "nombre":
        break;

        case "tipdoc":
        break;

        case "nrodoc":
        break;

        case "usuario":
        break;

        case "password":
        break;

        case "password2":
        break;

        case "correo":
        break;

        case "telefono":
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 
});