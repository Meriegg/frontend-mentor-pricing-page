const switchValue = document.getElementById("switch-value");
const priceItemPrices = document.querySelectorAll(".price-item-price");

let trueSwitchValue = false;

// Prices
const monthPrices = [(small = 19.99), (medium = 24.99), (large = 39.99)];
const anuallPrices = [(small = 199.99), (medium = 249.99), (large = 399.99)];

// Set the current prices
let currPrices = undefined;

// Get prices when switching types
const getPrices = () => {
  return !trueSwitchValue ? anuallPrices : monthPrices;
};

// Set prices to dom
const setPricesToDom = () => {
  currPrices = getPrices();
  for (let i = 0; i < currPrices.length; i++) {
    const priceElement = currPrices[i];
    const domElement = priceItemPrices[i];
    domElement.innerText = `$${priceElement.toString()}`;
  }
};
setPricesToDom();

// Switch price functionality
switchValue.addEventListener("click", () => {
  trueSwitchValue = !trueSwitchValue;
  setPricesToDom();
});
