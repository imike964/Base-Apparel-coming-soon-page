// const textvar = document.getElementsByClassName("email-prompt");

function ValidateEmail() {
  let testvar1 = document.querySelector("#email-prompt");
  let testvar2 = document.querySelector("#icon-error");
  let testvar3 =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let testvar4 = document.querySelector("#input1");

  if (testvar4.value.match(testvar3)) {
    testvar4.value = "";
    testvar1.style.display = "none";
    testvar2.style.display = "none";
  } else {
    testvar1.style.display = "flex";
    testvar2.style.display = "flex";
  }
}

document.getElementById("submit").addEventListener("click", ValidateEmail);

// let str = "I am not going to be rich"
// let result = str.replace(/not/g,'');
// console.log(result);
