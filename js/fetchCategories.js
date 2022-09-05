import {renderCategories} from "./renderCategories.js"

export const fetchCategories = async () => {
    const response = await fetch("http://localhost:3000/api/v1/categories");
    const data = await response.json();
    if(data){
      renderCategories(data)
    }
};
  
  


