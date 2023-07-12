const grid = document.querySelector(".grid")

function createElement(tag, className) {
  const element = document.createElement(tag) //cria um elemento
  element.className = className //adiciona uma classe ao elemento
  return element
}

function createCard() {
  const card = createElement("div", "card") //define o elemento e sua respectiva classe alterando os parâmetros da função
  const front = createElement("div", "front")
  const back = createElement("div", "back")

  card.appendChild(front) //adiciona uma div filha dentro da div mãe
  card.appendChild(back)

  return card
}

createCard()