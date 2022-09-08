import { renderProducts } from "./renderData/renderProducts.js";
import { pagination } from "./renderData/pagination.js";
import { base } from "./base.js";
import { reRender } from "./helpers/reRenderProducts.js";

const price_asc = document.querySelector(".asc");
const price_desc = document.querySelector(".desc");
const discount = document.querySelector(".disc");

let minSlider = document.getElementById("min");
let maxSlider = document.getElementById("max");
//Busqueda de productos
let term;
let sortBy;
let min;
let max;

export const searchProducts = async (e) => {
  term = document.querySelector(".input-search").value;

  if (e.target.matches("#order")) {
    sortBy = e.target.value;
  }
  if (e.target.matches(".range")) {
    if (e.target.id === "min") {
      min = e.target.value;
    } else {
      max = e.target.value;
    }
  }

  if (term && !sortBy) {
    if (e.key === "Enter") {
      const response = await fetch(`${base}/products/search?term=${term}`);
      const data = await response.json();
      reRender(data, term);
    }
  }
  if (term && sortBy && !min && !max) {
    searchProductsAndSort(term, sortBy);
    sortBy = "";
  }
  if ((term && !sortBy && min) || max) {
    searchProductsAndPriceRange(term, min, max);
    min = "";
    max = "";
  }
};

// Buscar producto y ordenar por
export const searchProductsAndSort = async (term, sortBy) => {
  if (term && sortBy) {
    const response = await fetch(
      `${base}/products/search?term=${term}&sortBy=${sortBy}`
    );
    const data = await response.json();
    reRender(data, term);
  }
};

export const searchProductsAndPriceRange = async (term, min, max) => {
  if ((term && min) || max) {
    min = min || 0;
    max = max || 20000;

    const response = await fetch(
      `${base}/products/search?term=${term}&prices=${min},${max}`
    );
    const data = await response.json();
    reRender(data, term);
  }
};


document
  .querySelector(".input-search")
  .addEventListener("keyup", searchProducts);

[price_asc, price_desc, discount].map((item) => {
  item.addEventListener("click", searchProducts, false);
});

minSlider.addEventListener("change", searchProducts);
maxSlider.addEventListener("change", searchProducts);
