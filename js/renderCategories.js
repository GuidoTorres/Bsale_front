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

  //accedo a los checboxes para poder utilizar el eventlistener
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


  const response = await fetch(`https://bsale2.herokuapp.com/api/v1/products/${array}`)

  const data = await response.json();
   if (data?.content.length > 0) {
          let products = document.getElementsByClassName("products")[0];
          products.innerHTML = "";
          renderProducts(data);
        }
};

