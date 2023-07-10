const input = document.querySelector(".login-input")
const button = document.querySelector(".login-button")
const form = document.querySelector(".login-form")

function validateInput({ target }) {
  if (target.value.length > 2) {
    button.removeAttribute("disabled")
  } else {
    button.setAttribute("disabled", "")
  }
}

function handleSubmit(event) {
  event.preventDefault() //previne o comportamento padrão do submit de recarregar a página
  localStorage.setItem("player", input.value)
  location = "pages/game.html"
}

input.addEventListener("input", validateInput)
form.addEventListener("submit", handleSubmit)
