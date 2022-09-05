const toggler = document.querySelector(".hide-hamburguer");
const sidebar = document.querySelector(".sidebar");
const header = document.querySelector(".mobile-header");
const products = document.querySelector(".closeSideBarButton");



export const isOpened = () => {
    if(window.matchMedia("(min-width: 800px)").matches){

        sidebar.style.width = "40%"

    }
    // else if(window.matchMedia("(min-width: 300px)").matches){

        sidebar.style.width = "100%"

    // }

}

export const isClosed = () => {



    sidebar.style.width = "0"
}

toggler.addEventListener("click", isOpened);
products.addEventListener("click", isClosed);
