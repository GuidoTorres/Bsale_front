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
          <img src=${item.url_image} alt="" class="image skeleton">
          <div class="product-info">
          <label class="category">Categoria </label>
          <label class="name">${item.name}</label>
          ${
            item.discount > 0
              ? `<p class="discount"> ${
                  item.discount > 0 ? "-" + item.discount + "%" : ""
                } </p> `
              : ""
          }
          <label class="price"> $${item.price}</label>
          </div>    
           </div>`
          : ""
      }
        `;
    products.appendChild(div);
  });
};

// filtros de busqueda
const price_asc = document.querySelector(".asc");
const price_desc = document.querySelector(".desc");
const discount = document.querySelector(".disc");

export const orderBy = async (e) => {

  let products = document.getElementsByClassName("products")[0];
  const response = await fetch(
    `https://bsale2.herokuapp.com/api/v1/products?sortBy=${e.target.value}`
  );
  const data = await response.json();

  console.log(data);

  if (data?.content.length > 0) {
    products.innerHTML = "";
    renderProducts(data);
  }
};

price_asc.addEventListener("click", orderBy,false);
price_desc.addEventListener("click", orderBy,false);
discount.addEventListener("click", orderBy,false);