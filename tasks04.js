"use strict";

const calculate = (basket = null, goods = 0, promo = "") => {
  if (goods > 10) {
    basket -= basket * 0.03;
  }

  if (basket > 30000) {
    basket -= (30000 - basket) * 0.15;
  }

  if (promo === "METHED") {
    basket -= basket * 0.1;
  }
  if (promo === "G3H2Z1" && basket > 2000) {
    basket -= 500;
  }
  return basket;
};

console.log(calculate(3000, 9, "G3H2Z1"));
