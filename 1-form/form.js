
let submitBotton = document.getElementById("submit");
let phoneError = document.getElementById("phoneError");
let emailError = document.getElementById("emailError");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let form = document.getElementById("form")
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
let phoneFormat = /^\+{0,1}[0-9]{11}$/g;
// let phoneFormat =/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i;

form.addEventListener("submit", (e) => {
  let messages = [];
  // (\+98|0)?9\d{9}
  let phoneFormat = /^\+{0,1}[0-9]{11}$/g;

  if (phoneFormat.test(phoneInput.value) == false) {
    messages.push("plz Enter valid Phone");
  }

  if (messages.length > 0) {
    e.preventDefault();
    phoneError.innerText = messages.join(",");
    phoneError.classList.toggle("visible");
  }

  let messages2 = [];
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
  if (mailformat.test(emailInput.value) == false) {
    messages2.push("plz Enter valid Email");
  }

  if (messages2.length > 0) {
    e.preventDefault();
    emailError.innerText = messages2.join(",");
    emailError.classList.toggle("visible");
  }

  if (phoneFormat.test(phoneInput.value) == true && mailformat.test(emailInput.value) == true) {
    e.preventDefault();
    document.getElementById("demo").innerHTML =
      "Your information has recorded";
  }

})




