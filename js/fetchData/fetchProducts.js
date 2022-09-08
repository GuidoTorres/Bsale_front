import { renderProducts } from "../renderData/renderProducts.js";
import {pagination} from "../renderData/pagination.js"
import {base} from "../base.js"

const title = document.querySelector(".product-category")
const h1 = document.createElement("h1")
h1.classList.add("product-title")
export const fetchProducts = async () => {
  const response = await fetch(`${base}/products`);
  const data = await response.json();

  if (data) {
    h1.innerHTML += "Todos los productos"
    title.appendChild(h1)
    renderProducts(data);
    pagination(data)
  }
};
