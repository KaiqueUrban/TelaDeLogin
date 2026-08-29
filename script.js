const loginform = document.getElementById("form");

function send(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const passwordInput = document.getElementById("senha");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";
  emailInput.classList.remove("class-error");
  passwordInput.classList.remove("class-error");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Insira um e-mail válido";
    emailInput.classList.add("class-error");
    return;
  }

  if (password.length < 8) {
    passwordError.textContent = "A senha deve ter pelo menos 8 caracteres.";
    passwordInput.classList.add("class-error")
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
      passwordInput.classList.add("class-error")
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
    passwordInput.classList.add("class-error")
    return;
  }

  alert("Login realizado com sucesso!");
}

loginform.addEventListener("submit", send);
