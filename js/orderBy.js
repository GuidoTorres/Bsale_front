import { base } from "./base.js";
import { renderProducts } from "./renderData/renderProducts.js";

export const orderBy = async (e) => {
    let term = document.querySelector(".input-search").value
    if (!term) {
      console.log("order by sin search");

      let products = document.getElementsByClassName("products")[0];
      const response = await fetch(
        `${base}/products?sortBy=${e.target.value}`
      );
      const data = await response.json();
  
      if (data?.content.length > 0) {
        products.innerHTML = "";
        renderProducts(data);
      }
    }
  };
//ordenar de forma ascendente, descendente y descuento
const price_asc = document.querySelector(".asc");
const price_desc = document.querySelector(".desc");
const discount = document.querySelector(".disc");



price_asc.addEventListener("click", orderBy, false);
price_desc.addEventListener("click", orderBy, false);
discount.addEventListener("click", orderBy, false);