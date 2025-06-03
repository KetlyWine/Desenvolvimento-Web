const USD = 4.87;
const EUR = 5.38;
const GBP = 6.22;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

amount.addEventListener("input", () => {
  const hasCaracter = /|D+/g;
  amount.value = amount.value.replace(hasCaracter, "");
});

form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;

    result.textContent = `R$ ${formatCurrencyBRL(total)}`;

    footer.classList.add("show-result");
  } catch {
    footer.classList.remove("show-result");
  }
}

function formatCurrencyBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
