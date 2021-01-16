// login form
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  //const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector("#password-login").value.trim();

  //if (email && username && password) {
    if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
       // username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("logged in");

    // automatically redirect users to the dashboard after they login
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
