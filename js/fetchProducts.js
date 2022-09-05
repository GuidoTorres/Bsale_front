import { renderProducts } from "./renderProducts.js";
// import {pagination} from "./pagination.js"
const title = document.querySelector(".product-category")
const h1 = document.createElement("h1")
h1.classList.add("product-title")
export const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/v1/products");
  const data = await response.json();

  if (data) {
    h1.innerHTML += "Todos los productos"
    title.appendChild(h1)
    renderProducts(data);
    // pagination(data)
  }
};
