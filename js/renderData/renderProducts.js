export const renderProducts = (data) => {
  let products = document.getElementsByClassName("products")[0];
  let div = document.createElement("div");
  div.classList.add("product-container");


    
    data?.content?.map((item, i) => {
      div.innerHTML += `
      ${
        item.url_image !== "" && item.url_image !== null
        ? ` 
        
        <div class="product ">
        <div class="product-image ">
        <img src=${item.url_image} alt="" class="image ">
        <label class= "discount">${
          item.discount > 0 ? "-" + item.discount + "%" : ""
        }</label>
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
    })
    
};
