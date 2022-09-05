import { renderProducts } from "./renderProducts.js";
import {pagination} from "./pagination.js"

export const fetchProducts = async () => {
  const response = await fetch("https://bsale2.herokuapp.com/api/v1/products");
  const data = await response.json();
  console.log(data);
  if (data) {
    renderProducts(data);
    pagination(data)
  }
};
