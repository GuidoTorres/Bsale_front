export const renderInputSearch = (e) =>{

    // document.querySelector(".input-search").style.display= "block"
    if(document.querySelector(".input-search").style.display === "" ){

        document.querySelector(".input-search").style.display = "block"

    }else{
        document.querySelector(".input-search").style.display = ""

    }

}

document.querySelector(".icon-search").addEventListener("click", renderInputSearch, false)