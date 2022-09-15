import { pagination } from "../renderData/pagination.js";
import { renderProducts } from "../renderData/renderProducts.js";

export const reRender = async (data,term) => {
  if (data.content.length > 0) {
    let products = document.getElementsByClassName("products")[0];
    const pag = document.querySelector(".pagination");
    pag.innerHTML = "";
    products.innerHTML = "";
    
    renderProducts(data);
    pagination(data, term);
    term = ""
  }
};
