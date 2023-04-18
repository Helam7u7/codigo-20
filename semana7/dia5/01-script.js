const usersList = document.getElementById("users_list");
const loader = document.getElementById("loader");
const register_btn = document.getElementById("register_btn");

register_btn.addEventListener("click", () => {
  register_btn.setAttribute("disabled", "disabled");
});

const getUsers = async () => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET", // *GET, POST, PUT, DELETE OPTIONS
    headers: {
      Authorization: "",
    },
    // body: JSON.stringify({
    //   nombre: 'Miguel',
    //   edad: 30
    // }
    // )
  })
    .then((response) => response.json())
    .then((json) => {
      setUsersInView(json);
    });
};

const setUsersInView = (users) => {
  users.forEach((user, i) => {
    const userHtml = `
    <div class="card">
      <p>${user.name}</p>
      <p>${user.email}</p>
      <p>${user.phone}</p>
      <button type="button" class="btn_profile">Show Profile
      </button> 
    </div>
    `;
    usersList.innerHTML += userHtml;
  });
  loader.style.display = "none";
};

getUsers();
