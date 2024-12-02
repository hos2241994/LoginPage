const logOut = document.getElementById("logOut");
const userName = localStorage.getItem("userName");
const homeHeader = document.querySelector(".home-header");

if (userName) {
  document.body.classList.remove("d-none");
  homeHeader.innerHTML = `Hello ${userName}`;
} else {
  window.location.href = "../login.html";
}

logOut.addEventListener("click", function () {
  localStorage.removeItem("userName");
  window.location.href = "../login.html";
});
