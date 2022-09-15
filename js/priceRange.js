import { renderProducts } from "./renderData/renderProducts.js";
import { base } from "./base.js";

let minSlider = document.getElementById("min");
let maxSlider = document.getElementById("max");
let min;
let max;
export const priceRange = async (e) => {
  let term = document.querySelector(".input-search").value;
  if (e.target.id === "min") {
    min = e.target.value;
  } else if (e.target.id === "max") {
    max = e.target.value;
  }

  if (!term && min || max) {
    min = min || 0
    max = max || 20000
    const response = await fetch(`${base}/products?prices=${min},${max}`);

    const data = await response.json();
    if (data?.content.length > 0) {
      let products = document.getElementsByClassName("products")[0];
      products.innerHTML = "";
      renderProducts(data);
    }
  }
};

minSlider.addEventListener("change", priceRange);
maxSlider.addEventListener("change", priceRange);
