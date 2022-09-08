// mostrar el input de busqueda al ahcer click en el icono
export const renderInputSearch = (e) => {
  if (document.querySelector(".input-search").style.display === "") {
    document.querySelector(".input-search").style.display = "block";
  } else {
    document.querySelector(".input-search").style.display = "";
  }
};

document
  .querySelector(".icon-search")
  .addEventListener("click", renderInputSearch, false);
