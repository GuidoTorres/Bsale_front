import { fetchCategories } from "./js/fetchCategories.js";
import { fetchProducts } from "./js/fetchProducts.js";
import { searchProducts } from "./js/searchProducts.js";
import {renderInputSearch} from "./js/renderInputSearch.js"
import {isOpened} from "./js/renderSidebar.js"
import {getVals} from "./js/range-slider.js"
// import {pagination} from "./js/pagination.js"
import {priceRange} from "./js/priceRange.js"

const sidebar = document.querySelector(".sidebar");

fetchCategories()
fetchProducts()


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


if(window.matchMedia("(min-width: 800px)").matches){

    sidebar.style.width = "280px"

}





