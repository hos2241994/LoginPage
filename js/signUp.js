const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const usePassword = document.getElementById("usePassword");
const signUpForm = document.getElementById("signUpForm");
const failedMsg = document.getElementById("failedMsg");
const successMsg = document.getElementById("successMsg");
const usersData = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addNewUser(
    userName.value.toLowerCase().trim(),
    userEmail.value.toLowerCase().trim(),
    usePassword.value.trim()
  );
});

function addNewUser(name, email, password) {
  if (name === "" || email === "" || password === "") {
    failedMsg.innerHTML = "All inputs is required";
    failedMsg.classList.replace("d-none", "d-block");

    return;
  }

  if (checkEnteredEmail(email) === false) {
    failedMsg.innerHTML = "email already exists";
    failedMsg.classList.replace("d-none", "d-block");
    return;
  }

  const newUser = { name, email, password };
  usersData.push(newUser);

  addTolocalStorage("users", usersData);
  successMsg.innerHTML = "Success";
  successMsg.classList.replace("d-none", "d-block");
  failedMsg.classList.replace("d-block", "d-none");

  setTimeout(() => {
    window.location.href = "../login.html";
  }, 3000);
}

function addTolocalStorage(name, val) {
  localStorage.setItem(name, JSON.stringify(val));
}

function checkEnteredEmail(val) {
  for (const el of usersData) {
    if (el.email === val) {
      return false;
    }
  }
  return true;
}
