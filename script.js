const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const form = document.getElementById('loginForm');

const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

function validarEmail(){
    if(email.value ===""){ //value valida que la entrada del usuario no es un campo vacio
        emailError.textContent = "el correo es obligatorio"
        email.style.border = "2px solid red";
        return false; // retorna false porque hay error porque el campo esta vacio y hace detener la funcion
    
    }else{
        emailError.textContent = "";
        email.style.border = "2px solid gray";
    
    }
    return true;  // se coloca afuera del else porque ya que en el if no hubo error  la funcion retorna true osea que los campos son correctos
}


function validarPassword(){
    if(password.value ==="" || password.value.length < 6){ //validacion para que la contraseña no sea vacia y no tenga menos de 6 digitos
        passwordError.textContent = "la contraseña invalida"
        password.style.border = "2px solid red";
        return false; // retorna false porque hay error porque el campo esta vacio y hace detener la funcion

    }else{
        passwordError.textContent = "";
        password.style.border = "2px solid gray";
    
    }
    return true;  // se coloca afuera del else porque ya que en el if no hubo error  la funcion retorna true osea que los campos son correctos
}

async function validarUsuario(){

    const respuestaUsuario = await fetch("http://localhost:3000/users")

    const datosUsuarios = await respuestaUsuario.json();
    console.log(datosUsuarios);

    const usuarioEncontrado = datosUsuarios.find(datosUsuario => datosUsuario.email=== email.value && datosUsuario.password === password.value);

    if(usuarioEncontrado){
        alert("usuario encontrado");

    }else{
        alert("usuario no encontrado");
    }
}


form.addEventListener("submit", function(event){
    event.preventDefault(); //hace que la pagina no se recargue al momento de hundir el boton submit
    
   

    const emailValido = validarEmail();//se ejecuta y se guarda el resultado de la funcion
    const passwordValido = validarPassword();//se ejecuta y guarda el resultado de la funcion


    if(emailValido && passwordValido){
        validarUsuario();
    }



});



