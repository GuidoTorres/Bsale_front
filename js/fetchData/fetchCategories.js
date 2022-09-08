import {renderCategories} from "../renderData/renderCategories.js"
import {base} from "../base.js"
export const fetchCategories = async () => {
    const response = await fetch(`${base}/categories`);
    const data = await response.json();
    if(data){
      renderCategories(data)
    }
};
  
  


