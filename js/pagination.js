export const pagination = (data) => {
  const ulPagination = document.querySelector("#pagination-numbers");

  let div = document.createElement("div");
  div.classList.add("pageLi")
  div.style.display = "flex"

  for (let i = 0; i < data.totalPages; i++) {
    div.innerHTML += `
      <span class="page-link" value=${i} >${i+1}</span>    
      `;
    ulPagination.appendChild(div);

    const pageLink = document.querySelector(".page-link")
    console.log(pageLink);

    pageLink.addEventListener("click", fetchByPagination)
  }


  
};


const fetchByPagination = async(e) => {

  console.log(e.target.value);

}


const prueba = document.querySelector(".pageLi")

console.log(prueba);









