//- Qué es un API? -- (Aplication programing interface)
//- data-- json
//- api no devuelve iformacion

//- en js existe una funcion la cual se encarga de poder hacer la peticion a un url
//- FETCH()
//- es una función nativa
//- ecisten varios tipos  de peticionse
//- GET = SIRVE PARA OBTENER INFO
//- POST = SIRVE PARA CREAR DATOS
//- PUT = SIRVE PARA ACTUALIZAR DATOS
//- DELETE = SIRVE PARA ELIMINAR DATOS

//- https://api.github.com/users/helam7u7
//- Hay un tiempo de espera, no sabemos cuánto demora
//- Entonces usamos el async await..
//- Estructura de una funciones tecth()

//> Primero atrapamos todos los elementos que usaremos con el id

const imageProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUsername = document.querySelector("#github-username");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");

//> Action
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");

githubActionSearch.onclick = () => {
  const username = githubInputSearch.value;
  githubInputSearch.value = "";
  if (username === "") {
    Swal.fire({
      title: "Error",
      text: "Hay un campo sin rellenar",
      icon: "error",
    });
    return;
  }
  obtenerDatosGithub(username);
};

//> Detectar el evento de enter cuando estémos en input
githubInputSearch.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    obtenerDatosGithub(event.target.value);
  }
});

const obtenerDatosGithub = async (username = "helam7u7") => {
  //- en este ejm await está haciendo lo sgte
  const response = await fetch(`ttps://api.github.com/users/${username}`);
  const data = await response.json();

  setDataUser(data);
};

const setDataUser = (data) => {
  imageProfile.src = data.avatar_url;
  githubName.innerHTML = data.name;
  githubUsername.innerHTML = `@${data.login}`;
};

obtenerDatosGithub();
