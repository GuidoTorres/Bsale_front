import { fetchCategories } from "./js/fetchData/fetchCategories.js";
import { fetchProducts } from "./js/fetchData/fetchProducts.js";
import { searchProducts, searchProductsAndSort, searchProductsAndPriceRange } from "./js/searchProducts.js";
import {renderInputSearch} from "./js/renderData/renderInputSearch.js"
import {isOpened} from "./js/renderData/renderSidebar.js"
import {getVals} from "./js/range-slider.js"
import {priceRange} from "./js/priceRange.js"
import { orderBy } from "./js/orderBy.js";

const sidebar = document.querySelector(".sidebar");

fetchCategories()
fetchProducts()


//asignar los valores del slider a los inputs
var minSlider = document.getElementById('min');
var maxSlider = document.getElementById('max');

var outputMin = document.getElementById('min-value');
var outputMax = document.getElementById('max-value');

outputMin.innerHTML = minSlider.value;
outputMax.innerHTML = maxSlider.value;

minSlider.oninput = function(){
 outputMin.innerHTML="$ " +this.value;    
}

maxSlider.oninput = function(){
 outputMax.innerHTML="$ " +this.value;    
}


//mostrar el sidebar cuando el ancho sea mayor a 800px
if(window.matchMedia("(min-width: 800px)").matches){

    sidebar.style.width = "280px"

}





