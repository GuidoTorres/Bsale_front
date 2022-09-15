import { base } from "../base.js";
import { renderProducts } from "./renderProducts.js";
let array = [];
let productsArray = [];
let removeRepeatedValue;
export const addBadge = (e) => {
  const container = document.querySelector(".badge-container");
  const title = document.createElement("p");
  title.classList.add("title-badge");
  const prueba = document.querySelector(".title-badge");
  const category = e.target.classList.value.split(",").join(" ");
  //creacion solo de un elemento filtrado por
  if (!container.contains(prueba)) {
    title.innerHTML += `Filtrado por `;
    container.appendChild(title);
  }

  filterArrayData(e);

  //evitar valores repetidos en el array
  const removeRepeated = array?.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, []);

  array.push(category);
  //creación de los filtros al seleccionar una categoria
  if (e.target.checked && !removeRepeated.includes(category)) {
    let div = document.createElement("div");
    div.innerHTML += `
      <p class="badge" id=${category
        .split(",")
        .join(" ")}><i class="fa-solid  fa-xmark close"></i> ${category} </p>`;

    container.appendChild(div);
  }

  //Remover los filtros de categorias
  let badge = document.querySelectorAll(".badge");
  Array.from(badge).map((item) => {
    item.addEventListener("click", () => {
      console.log(removeRepeatedValue);
      item.remove();
      e.target.checked = false;
    });
  });
};

const filterArrayData = (e) => {
  if (!e.target.checked) {
    let index = removeRepeatedValue.indexOf(e.target.value);
    let x = removeRepeatedValue.splice(index, 1);
  } else {
    productsArray.push(e.target.value);

    removeRepeatedValue = productsArray.reduce((acc, val) => {
      if (!acc.includes(val)) {
        acc.push(val);
      }
      return acc;
    }, []);
  }
  return removeRepeatedValue;
};
