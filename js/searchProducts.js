import { renderProducts } from "./renderProducts.js";

let term;
let sortBy;
//Busqueda de productos
export const searchProducts = async (e) => {
  if (
    e.target.value === "price_asc" ||
    e.target.value === "price_desc" ||
    e.target.value === "disc_desc"
  ) {
    sortBy = e.target.value;
  } else {
    term = e.target.value;
  }

  //busqueda de productos y ordenar por
  if (term !== undefined && sortBy !== undefined) {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/search?term=${term}&sortBy=${sortBy}`
      );
      const data = await response.json();
      if (data?.content.length > 0) {
        let products = document.getElementsByClassName("products")[0];
        products.innerHTML = "";
        renderProducts(data);
      }
  }
  //solo la busqueda de productos
  if(term !== undefined){
    if (e.code === "Enter") {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/search?term=${term}`
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

const price_asc = document.querySelector(".asc");
const price_desc = document.querySelector(".desc");
const discount = document.querySelector(".disc");

document
  .querySelector(".input-search")
  .addEventListener("keyup", searchProducts);

price_asc.addEventListener("click", searchProducts, false);
price_desc.addEventListener("click", searchProducts, false);
discount.addEventListener("click", searchProducts, false);
