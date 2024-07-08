let counter = 0;

const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

incrementButton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  counterElement.textContent = counter;
});