export const renderProducts = (data) => {
  let products = document.getElementsByClassName("products")[0];
  let div = document.createElement("div");
  div.classList.add("product-container");

  data?.content?.map((item, i) => {
    div.innerHTML += `
      ${
        item.url_image !== "" && item.url_image !== null
          ? ` 
  
          <div class="product">
            <div class="product-image">
            <img src=${item.url_image} alt="" class="image skeleton">
            </div>
            <div class="product-info">
              <label class="name">${item.name}</label>

              <label class="price"> $${item.price}</label>
            </div>    
          </div>`
          : ""
      }
        `;
    products.appendChild(div);
  });
};

//ordenar de forma ascendente, descendente y descuento
const price_asc = document.querySelector(".asc");
const price_desc = document.querySelector(".desc");
const discount = document.querySelector(".disc");

let term = "";
export const orderBy = async (e) => {
  if (e.target.classList[0] === "input-search") {
    term = e.target.value;
  }
  if (term === "") {
    let products = document.getElementsByClassName("products")[0];
    const response = await fetch(
      `https://bsale2.herokuapp.com/api/v1/products?sortBy=${e.target.value}`
    );
    const data = await response.json();

    if (data?.content.length > 0) {
      products.innerHTML = "";
      renderProducts(data);
    }
  }
};
document.querySelector(".input-search").addEventListener("keyup", orderBy);

price_asc.addEventListener("click", orderBy, false);
price_desc.addEventListener("click", orderBy, false);
discount.addEventListener("click", orderBy, false);
