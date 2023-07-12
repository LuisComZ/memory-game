const grid = document.querySelector(".grid")
const spanPlayer = document.querySelector(".player")
const timer = document.querySelector(".timer")
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

let firstCard = ""
let secondCard = ""

function checkEndGame () {
  const disabledCards = document.querySelectorAll(".disabled-card")

  if (disabledCards.length === 20) {
    alert(`Congratulations, ${spanPlayer.innerHTML}! You did it! You took ${timer.innerHTML} seconds to finish.`)
    clearInterval(this.loop)
  }
}

function checkCards() {
  const firstCharacter = firstCard.getAttribute("data-character")
  const secondCharacter = secondCard.getAttribute("data-character")

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add("disabled-card")
    secondCard.firstChild.classList.add("disabled-card")

    firstCard = ""
    secondCard = ""

    checkEndGame()
  } else {
    setTimeout(function () {
      firstCard.classList.remove("reveal-card")
      secondCard.classList.remove("reveal-card")

      firstCard = ""
      secondCard = ""
    }, 500)
  }
}

function revealCard({ target }) {
  if (target.parentNode.className.includes("reveal-card")) {
    return
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card")
    firstCard = target.parentNode
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card")
    secondCard = target.parentNode

    checkCards()
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
  card.setAttribute("data-character", character) //"data-character" cria um atributo e seu valor "character" é o nome do personagem em específico

  return card
}

function loadGame() {
  const duplicateCharacters = [...characters, ...characters] //pega os elementos do array characters e espalha 2 vezes dentro do array duplicateCharacters

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5)

  shuffledArray.forEach(function (character) {
    const card = createCard(character)
    grid.appendChild(card)
  })
}

function startTimer () {
  this.loop = setInterval(function () {
    const currentTime = timer.innerHTML
    timer.innerHTML = Number(currentTime) + 1
  }, 1000)
}

onload = () => {
  spanPlayer.innerHTML = localStorage.getItem("player")

  startTimer()
  loadGame()
}