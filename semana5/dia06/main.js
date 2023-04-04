const button = document.querySelector("#btn-prueba");
button.addEventListener("click", () => {
  alert("Esta es la prueba");
});

const btnPregunta = document.querySelector("#btn-pregunta");
btnPregunta.addEventListener("click", function () {
  Swal.fire({
    icon: "question",
    title: "Quiere cerrar sesión?",
  });
});
const btnError = document.querySelector("#btn-error");
btnError.addEventListener("click", function () {
  Swal.fire({
    icon: "error",
    title: "ERROR",
  });
});
const btnPeligro = document.querySelector("#btn-peligro");
btnPeligro.addEventListener("click", function () {
  Swal.fire({
    icon: "warning",
    title: "Atención!",
  });
});

const btnSatisfactoria = document.querySelector("#btn-satisfactoria");
btnSatisfactoria.addEventListener("click", function () {
  Swal.fire({
    icon: "success",
    title: "Quiere cerrar sesión?",
  });
});

const btnInfo = document.querySelector("#btn-info");
btnInfo.addEventListener("click", function () {
  Swal.fire({
    icon: "info",
    title: "Quiere cerrar sesión?",
  });
});

const btnConfirmacion = document.querySelector("#btn-alerta-botones");
btnConfirmacion.addEventListener("click", function () {
  Swal.fire({
    icon: "success",
    title: "Quiere cerrar sesión?",
  });
});

const btnImg = document.querySelector("#alert-img");
btnImg.addEventListener("click", function () {
  Swal.fire({
    imageUrl:
      "https://img.freepik.com/vector-gratis/elefante-lindo-que-trabaja-ilustracion-icono-vector-historieta-ordenador-portatil-icono-tecnologia-animal-aislado_138676-5885.jpg?w=740&t=st=1680359670~exp=1680360270~hmac=63aab210669cca937039e1bc0b4d41e5f0e60dcc72f24875108ca24f10406942",
    title: "Imagen",
  });
});

const btnGif = document.querySelector("#btn-alerta-custom");
btnGif.addEventListener("click", () => {
  Swal.fire({
    width: 600,
    padding: "3em",
    color: "#716add",
    background:
      "#fff url(https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80)",
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://media1.giphy.com/media/ZVik7pBtu9dNS/giphy.gif?cid=ecf05e470n3bay0xjfnonss3jka7nzcz82pjurr26nurdvup&rid=giphy.gif&ct=g")
      center top
      no-repeat
    `,
  });
});
