const btnLogin = document.querySelector("#btn-login");

btnLogin.onclick = function (event) {
  event.preventDefault();
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    //> vamos a guardar el correo y el password en localStorage
    //> setItem guardamos el valor en el localStorage
    localStorage.setItem(input.name, input.value);
  });
  login();
};

//> Como captura los datos del localStorage
//> localStorage.getItem(key)

//> Cómo insertamos estos datos capturando desde local
function login() {
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  form.style.display = "none";
  usuarioSection.style.display = "block";
  titleEmail.innerHTML = email;
  titlePassword.innerHTML = password;
}

const form = document.querySelector("#section-login");
const usuarioSection = document.querySelector("#usuario-logged");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");

if (email !== null && password !== null) {
  login();
} else {
  usuarioSection.sty.display = "none";
}

btnCerrarSesion.onlick = function () {
  //Vamos a eliminar los datos del local
  localStorage.removeItem("password");
  localStorage.removeItem("email");
  //Mostrar  el formulario y ocultar el mensaje del usuario
  form.style.display = "block";
  usuarioSection.style.display = "none";
};
