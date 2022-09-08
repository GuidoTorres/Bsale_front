import { renderProducts } from "./renderData/renderProducts.js";
import { base } from "./base.js";

let minSlider = document.getElementById("min");
let maxSlider = document.getElementById("max");
let min = 0;
let max = 20000;
export const priceRange = async (e) => {

  if (e.target.id === "min") {
    min = e.target.value;
  } else if (e.target.id === "max") {
    max = e.target.value;
  }


  if (min || max ) {
    if (
      document.querySelector(".input-search").value === undefined ||
      document.querySelector(".input-search").value === ""
    ) {
      console.log("price range");
      const response = await fetch(
        `${base}/products?prices=${min},${max}`
      );

      const data = await response.json();
      if (data?.content.length > 0) {
        let products = document.getElementsByClassName("products")[0];
        products.innerHTML = "";
        renderProducts(data);
      }
    }
  }
};

minSlider.addEventListener("change", priceRange);
maxSlider.addEventListener("change", priceRange);
