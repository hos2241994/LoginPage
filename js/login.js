const userEmail = document.getElementById("userEmail");
const usePassword = document.getElementById("usePassword");
const signUpForm = document.getElementById("loginForm");
const failedMsg = document.getElementById("failedMsg");
const usersData = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  logIn(userEmail.value.toLowerCase().trim(), usePassword.value.trim());
});

function logIn(email, password) {
  if (email === "" || password === "") {
    failedMsg.innerHTML = "All inputs is required";
    failedMsg.classList.replace("d-none", "d-block");

    return;
  }

  const checkUserLogin = checkEnteredData(email, password);

  if (checkUserLogin === "Invaild Password") {
    failedMsg.innerHTML = `${checkUserLogin}`;
    failedMsg.classList.replace("d-none", "d-block");
    return;
  } else if (checkUserLogin === "Invalid Email") {
    failedMsg.innerHTML = `${checkUserLogin}`;
    failedMsg.classList.replace("d-none", "d-block");
  } else {
    localStorage.setItem("userName", checkUserLogin);
    failedMsg.classList.replace("d-block", "d-none");
    window.location.href = "./pages/home.html";
  }
}

function checkEnteredData(email, pass) {
  for (const el of usersData) {
    if (el.email === email) {
      if (el.password === pass) {
        console.log(el.name);

        return el.name;
      }
      return "Invaild Password";
    }
  }
  return "Invalid Email";
}
