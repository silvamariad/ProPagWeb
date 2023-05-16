const expresiones = {
    usuario : /^[a-zA-Z0-9\_\-]{4,16}$/, //letras, nuemeros, guion y guion_bajo.
    nombre  : /^[a-zA-ZÁ-ý\s]{1,48}$/, //letras y espacios, pueden llevar acentos.
    nrodoc  : /^[a-zA-ZÁ-ý\s]{1,48}$/, //letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitales.
    correo  : /^[a-zA-Z0-9_.+]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/, //validacion para el campo del correo
    telefono: /^\d{7,10}$/ //7 a 10 numeros
}