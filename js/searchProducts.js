import { renderProducts } from "./renderProducts.js";

export const searchProducts = async (e) => {
  const term = e?.target?.value;
  console.log(term);
  const url = "https://bsale2.herokuapp.com/api/v1/products/search?term="

  if (e.code === "Enter") {
    const response = await fetch(
      url+term
    );
    const data = await response.json();
    if (data?.content.length > 0) {
      let products = document.getElementsByClassName("products")[0];
      products.innerHTML = "";
      renderProducts(data);
    }
  }
};

document
  .querySelector(".input-search")
  .addEventListener("keyup", searchProducts);

// inputSearch.addEventListener("change", searchProducts, false)
