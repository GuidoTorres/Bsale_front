import { base } from "./base.js";
import { renderProducts } from "./renderData/renderProducts.js";

let minSlider = document.getElementById("min");
let maxSlider = document.getElementById("max");

let array;
let sort;
export const orderBy = async (e) => {
  let term = document.querySelector(".input-search").value;
  if (Array.isArray(e)) {
    array = e;
  } else {
    sort = e.target.value;
  }
  if (!term && !array) {
    console.log("order by sin search");

    let products = document.getElementsByClassName("products")[0];
    const response = await fetch(`${base}/products?sortBy=${e.target.value}`);
    const data = await response.json();

    if (data?.content.length > 0) {
      products.innerHTML = "";
      renderProducts(data);
    }
  }
  if (array && sort) {
    searchByAndOrderBy(array, sort);
  }
};

const searchByAndOrderBy = async (array, sort) => {
  let products = document.getElementsByClassName("products")[0];
  const response = await fetch(`${base}/products/${array}?sortBy=${sort}`);
  const data = await response.json();

  if (data?.content.length > 0) {
    products.innerHTML = "";
    renderProducts(data);
  }
};

const searByAndOrderAndPrice = () => {


}
//ordenar de forma ascendente, descendente y descuento
const price_asc = document.querySelector(".asc");
const price_desc = document.querySelector(".desc");
const discount = document.querySelector(".disc");

[price_asc, price_desc, discount].map((item) => {
  item.addEventListener("click", orderBy, false);
});

minSlider.addEventListener("change", orderBy);
maxSlider.addEventListener("change", orderBy);
