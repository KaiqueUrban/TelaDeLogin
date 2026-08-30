const loginform = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

function send(event) {
  event.preventDefault();

  emailError.textContent = "";
  passwordError.textContent = "";
  emailInput.classList.remove("class-error");
  passwordInput.classList.remove("class-error");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "") {
    emailError.textContent = "Por favor, preencha este campo.";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Insira um e-mail válido";
    return;
  }

  if (password === "") {
    passwordError.textContent = "Por favor, preencha este campo.";
    return;
  }


  if (password.length < 8) {
    passwordError.textContent = "A senha deve ter pelo menos 8 caracteres.";
    return;
  }

  let capitalLetter = false;

  for (const chars of password) {
    if (chars >= "A" && chars <= "Z") {
      capitalLetter = true;
    }
  }

  if (!capitalLetter) {
    passwordError.textContent =
      "A senha deve conter pelo menos um caractere em maiúsculo.";
    return;
  }

  let haveNumber = false;

  for (const passwordChar of password) {
    if (passwordChar >= "0" && passwordChar <= "9") {
      haveNumber = true;
    }
  }

  if (!haveNumber) {
    passwordError.textContent = "A senha deve conter pelo menos um número.";
    return;
  }

  alert("Login realizado com sucesso!");
}

loginform.addEventListener("submit", send);

emailInput.addEventListener("input", function () {
  emailError.textContent = "";
});
passwordInput.addEventListener("input", function () {
  passwordError.textContent = "";
});
