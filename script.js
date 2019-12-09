let allCards = document.querySelectorAll(".card");
[...allCards].forEach(card => {
  card.addEventListener("click", function() {
    this.classList.add("turn");
  });
});
