import { calculateTotal, formatRupiah } from "./utils.js";

const priceInput = document.querySelector("#price");
const quantityInput = document.querySelector("#quantity");
const calculateButton = document.querySelector("#calculate-button");
const resultElement = document.querySelector("#result");

function displayTotal() {
  try {
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);

    const total = calculateTotal(price, quantity);

    resultElement.textContent = `Total: ${formatRupiah(total)}`;
  } catch (error) {
    resultElement.textContent = error.message;
  }
}

calculateButton.addEventListener("click", displayTotal);

displayTotal();
