
function validarPassword(password) {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#@$!%&*?])[A-Za-z\\d#$@!%&*?]{8,16}$");

    if (!re.test(password)) {
        console.log("La contraseña no cumple con el formato requerido.");
        return false;
    }
    return true;
}

function validarFormulario(event) {
    event.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var repitePass = document.getElementById("repitePass").value;
    var email = document.getElementById("email").value;
    var checkbox = document.getElementById("checkbox").checked;

    console.log("Usuario:", usuario);
    console.log("Password:", password);
    console.log("RepitePass:", repitePass);
    console.log("Email:", email);
    console.log("Checkbox:", checkbox);

    if (usuario === "" || password === "" || repitePass === "" || email === "") {
        Swal.fire({
            title: "Error",
            text: "Por favor rellene todos los campos",
            icon: "error"
        });
    } else if (password !== repitePass) {
        Swal.fire({
            title: "Error",
            text: "Las contraseñas no coinciden.",
            icon: "error"
        });
    } else if (!validarPassword(password)) {
        Swal.fire({
            title: "Error",
            text: "El formato de la contraseña no es válido.",
            icon: "error"
        });
    } else if (!checkbox) {
        Swal.fire({
            title: "Error",
            text: "Debes aceptar los términos y condiciones.",
            icon: "error"
        });
    } else if (!validarEmail(email)) {
        Swal.fire({
            title: "Error",
            text: "El formato del email no es válido.",
            icon: "error"
        });
    } else {
        var validarFormulario = {
            usuario: usuario,
            email: email
        };
        var StringJSON = JSON.stringify(validarFormulario);
        Swal.fire({
            title: "Registro realizado correctamente.",
            text: StringJSON,
            icon: "success"
        });
    }
}

function validarEmail(email) {
    const re = /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;

    return re.test(email);
}


