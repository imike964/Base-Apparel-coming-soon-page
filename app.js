// const textvar = document.getElementsByClassName("email-prompt");


function ValidateEmail() {
  // have better variable names
  // use const instead of let unless you plan to reassign the variable
  let emailPrompt= document.querySelector("#email-prompt");
  let iconError = document.querySelector("#icon-error");
  let validator =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let input = document.getElementById("input1");

  if (input.value.match(validator)) {
    input.value = "";
    emailPrompt.style.display = "none";
    iconError.style.display = "none";
  } else {
    emailPrompt.style.display = "block";
    iconError.style.display = "block";
  }
}

document.getElementById("submit").addEventListener("click", ValidateEmail);

// let str = "I am not going to be rich"
// let result = str.replace(/not/g,'');
// console.log(result);
