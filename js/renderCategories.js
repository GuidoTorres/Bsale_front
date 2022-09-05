import {renderProducts} from "./renderProducts.js"
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
    cbox[i].addEventListener("click", searchBy);
  }
};

let array = [];

const searchBy = async (e) => {
  if (e.target.checked) {
    array.push(e.target.value);
  } else {
    const index = array.indexOf(e.target.value);
    if (index > -1) {
      array.splice(index, 1); 
    }
  }


  const response = await fetch(`http://localhost:3000/api/v1/products/${array}`)
  const term = document
  .querySelector(".input-search")

  const data = await response.json();
   if (data?.content.length > 0) {
          let products = document.getElementsByClassName("products")[0];
          term.value = ""
          products.innerHTML = "";
          renderProducts(data);
        }
};

