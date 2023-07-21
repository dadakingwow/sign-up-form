const warning = document.querySelector("#warning");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const submitbtn = document.querySelector("button");
const odin = document.querySelector("img");

function checkPassword() {
  if (password.value != confirmpassword.value) {
    password.style.border = "1px darkred solid";
    confirmpassword.style.border = "1px darkred solid";
    warning.style.color = "red";
    warning.innerHTML = "*Passwords do not match";
  } else {
    warning.style.color = "green";
    warning.innerHTML = "*Passwords match";
  }
}

submitbtn.addEventListener("click", checkPassword);
