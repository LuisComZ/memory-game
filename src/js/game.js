const grid = document.querySelector(".grid")
const characters = [
  "beth",
  "jerry",
  "jessica",
  "morty",
  "pessoa-passaro",
  "pickle-rick",
  "rick",
  "summer",
  "meeseeks",
  "scroopy",
]

function createElement(tag, className) {
  const element = document.createElement(tag) //cria um elemento
  element.className = className //adiciona uma classe ao elemento
  return element
}

function revealCard({ target }) {
  target.parentNode.classList.add("reveal-card")

  if (target.parentNode.className.includes("reveal-card")){
    return
  }
}

function createCard(character) {
  const card = createElement("div", "card") //define o elemento e sua respectiva classe alterando os parâmetros da função
  const front = createElement("div", "face front")
  const back = createElement("div", "face back")

  front.style.backgroundImage = `url(../src/images/${character}.png)`

  card.appendChild(front) //adiciona uma div filha dentro da div mãe
  card.appendChild(back)

  card.addEventListener("click", revealCard)

  return card
}

function loadGame() {
  const duplicateCharacters = [...characters, ...characters] //pega os elementos do array characters e espalha 2 vezes dentro do array duplicateCharacters

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

  duplicateCharacters.forEach(function (character) {
    const card = createCard(character)
    grid.appendChild(card)
  })
}

loadGame()
