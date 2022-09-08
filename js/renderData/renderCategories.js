import { renderProducts } from "./renderProducts.js";
import { pagination } from "./pagination.js";
import { base } from "../base.js";

const term = document.querySelector(".input-search");

export const renderCategories = (data) => {
  let categories = document.getElementsByClassName("categories")[0];
  let div = document.createElement("div");
  div.classList.add("categories-container");

  data?.map((item, i) => {
    div.innerHTML += `
      <label class="catLabel">
      <input type="checkbox" id="cbox" value=${item.id}>
      ${item.name}
      </label>     
      `;
    categories.appendChild(div);
  });

  const cbox = document.querySelectorAll("#cbox");

  for (let i = 0; i < cbox.length; i++) {
    cbox[i].addEventListener("click", searchByCategory);
  }
};

let array = [];

//Filtro de producto por categoria
const searchByCategory = async (e) => {
  if (e.target.checked) {
    array.push(e.target.value);
  } else {
    const index = array.indexOf(e.target.value);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  console.log("search by id");

  const response = await fetch(`${base}/products/${array}`);
  const data = await response.json();
  if (data?.content.length > 0) {
    let products = document.getElementsByClassName("products")[0];
    let pag = document.querySelector(".pagination");
    term.value = "";
    pag.innerHTML = "";
    products.innerHTML = "";
    renderProducts(data);
    pagination(data, array);
  }
};