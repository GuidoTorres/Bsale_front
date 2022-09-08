import { renderProducts } from "./renderProducts.js";
import { base } from "../base.js";

//creación de forma dinamica de la paginación
export const pagination = (data, term) => {
  const pagination = document.querySelector(".pagination");
  if(data.content){
  pagination.innerHTML += `<a class="previous">Anterior</a>`;

  for (let i = 0; i < data.totalPages; i++) {
    pagination.innerHTML += `<a class="pages" value=${i} >${i + 1}</a>`;
  }
  pagination.innerHTML += `<a class="next">Siguiente</a>`;
  let selected = document.querySelectorAll(".pages");
  selectedPage(selected, term);
}
};

//cambiar el background-color a la pagina seleccionada de la paginacion
const selectedPage = (selected, term) => {
  for (let i = 0; i < selected.length; i++) {
    selected[i].addEventListener("click", () => {
      Array.from(selected).map((item, j) => {
        item.classList.remove("selected");
      });
      selected[i].classList.add("selected");
      fetchByPagination(selected[i], term);
    });
  }
};

const fetchByPagination = async (page, term) => {
  let pageNumber = page.getAttribute("value");
  console.log("fetch by pagination");

  const pag =
    term === undefined
      ? `${base}/products?page=${pageNumber} `
      : Array.isArray(term)
      ? `${base}/products/${term}?page=${pageNumber} `
      : `${base}/products/search?term=${term}&page=${pageNumber} `;

  const response = await fetch(pag);
  const data = await response.json();
  if (data?.content.length > 0) {
    let products = document.getElementsByClassName("products")[0];
    products.innerHTML = "";
    renderProducts(data);
  }
};
