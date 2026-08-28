const loginButton = document.getElementById("botao");

function send(event) {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("senha");

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "" || password === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de e-mail válido.");
    return;
  }

  if (password.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres.");
    return;
  }

  let capitalLetter = false;

  for (const chars of password) {
    if (chars >= "A" && chars <= "Z") {
      capitalLetter = true;
    }
  }

  if (!capitalLetter) {
    alert("A senha deve conter pelo menos um caractere em maiúsculo.");
    return;
  }

  let haveNumber = false;

  for (const passwordChar of password) {
    if (passwordChar >= "0" && passwordChar <= "9") {
      haveNumber = true;
    }
  }

  if (!haveNumber) {
    alert("A senha deve conter pelo menos um número.");
    return;
  }

  alert("Login realizado com sucesso!")
}

loginButton.addEventListener("click", send);
