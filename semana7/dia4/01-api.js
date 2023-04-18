// -----------------------------------------------

const imageProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUsername = document.querySelector("#github-username");
const githubJoined = document.querySelector("#github-joined");
const githubRepos = document.querySelector("#github-repos");
const githubFollowers = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubLocal = document.querySelector("#github-local");
const githubTwitter = document.querySelector("#github-twitter");
const githubBlog = document.querySelector("#github-blog");

//action

const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");

//evento onclick del bton

githubActionSearch.onclick = () => {
  const username = githubInputSearch.value;

  githubInputSearch.value = "";
  if (username === "") {
    Swal.fire({
      title: "Error",
      text: "Debes llenar el usuario",
      icon: "error",
    });
    return;
  }
  obtenerDatosGithub(username);
};

//vamos detectar el evento de enter cuano este en el input(este es otro evento - keyup)

githubInputSearch.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    obtenerDatosGithub(event.target.value);
  }
});

//es la funcion fecth que consume el Api

const obtenerDatosGithub = async (username = "helam7u7") => {
  // ene ste ejemplio await esta haciendo lo sgte
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (data.message === "Not Found") {
    Swal.fire({
      title: "Error",
      text: "No se encontró el usuario",
      icon: "error",
    });
  }

  setDataUser(data);
};

//es una funcion que alamacena los datos a cambiar

const setDataUser = (data) => {
  imageProfile.src = data.avatar_url;
  githubName.innerHTML = data.name;
  githubUsername.innerHTML = `@${data.login}`;
  githubRepos.innerHTML = data.public_repos;
  githubFollowers.innerHTML = data.followers;
  githubFollowing.innerHTML = data.following;
  githubLocal.innerHTML = data.location;
  githubTwitter.innerHTML = data.twitter_username;
  githubBlog.innerHTML = data.blog;
  completar();
  const fecha = new Date(data.created_at);
  const fechaFormateada = fecha.toLocaleDateString("es-ES").replace(/\//g, " ");
  githubJoined.innerHTML = `Joined ${fechaFormateada}`;
};

obtenerDatosGithub();

const completar = () => {
  if (githubBlog.innerHTML === "") {
    githubBlog.innerHTML = "🙁";
  }
  if (githubTwitter.innerHTML === "") {
    githubTwitter.innerHTML = "🙁";
  }
  if (githubLocal.innerHTML === "") {
    githubLocal.innerHTML = "🙁";
  }
};
