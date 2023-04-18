const username = document.getElementById("username");
const btn_register = document.getElementById("btn_register");
const form_register = document.getElementById("form_register");

// username.addEventListener("keyup", (event) => {
//   console.log(event.target.value);
//   console.log(event.target.name);
// });

btn_register.addEventListener("click", function (event) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("https://dsalkjfsa", {
    method: "POST",
    headers: {
      "content-Tytpe": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then(response);
});
