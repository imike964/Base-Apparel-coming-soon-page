// const textvar = document.getElementsByClassName("email-prompt");

function ValidateEmail() {
  let testvar1 = document.querySelector("#email-prompt");
  let testvar2 = document.querySelector("#icon-error");
  testvar1.style.display = "flex";
  testvar1.after.testvar2.style.display = "flex";
}

document.getElementById("submit").addEventListener("click", ValidateEmail);
