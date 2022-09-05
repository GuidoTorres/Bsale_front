import {renderCategories} from "./renderCategories.js"

export const fetchCategories = async () => {
    const response = await fetch("https://bsale2.herokuapp.com/api/v1/categories");
    const data = await response.json();
    if(data){
      renderCategories(data)
    }
};
  
  


