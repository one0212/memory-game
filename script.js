const allCards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // 第一次點擊
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  // 第二次點擊
  secondCard = this;
  console.log(firstCard, secondCard, hasFlippedCard);
  checkForMatch();
}

function checkForMatch() {
  // 判斷是否吻合
  // console.log(firstCard.dataset.img, secondCard.dataset.img)
  let isMatch = firstCard.dataset.img === secondCard.dataset.img;
  isMatch ? disableCards() : unFlipCards();
}
function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard()
}

function unFlipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard()
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false]
  [firstCard, secondCard] = [null, null]
}

(function shuffle() {
  allCards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos
  })
})()

allCards.forEach(card => card.addEventListener("click", flipCard));
