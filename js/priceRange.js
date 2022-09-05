import { renderProducts } from "./renderProducts.js";
var minSlider = document.getElementById('min');
var maxSlider = document.getElementById('max');
let min
let max
export const priceRange = async (e) => {

    if(e.target.id === "min"){
         min = e.target.value
    }else if(e.target.id === "max"){
        max = e.target.value
    }

    if(!isNaN(min) && !isNaN(max) ){

        const response = await fetch(`https://bsale2.herokuapp.com/api/v1/products?prices=${min},${max}`)
        
        const data = await response.json();
        if (data?.content.length > 0) {
            let products = document.getElementsByClassName("products")[0];
            products.innerHTML = "";
            renderProducts(data);
        }
    }
}

minSlider.addEventListener("change", priceRange)
maxSlider.addEventListener("change", priceRange)