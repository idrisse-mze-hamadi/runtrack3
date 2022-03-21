window.addEventListener("DOMContentLoaded", (event) => {
    
    var hbgr = document.getElementById("mytopnav")

    hbgr.addEventListener('click', function(){
        if(hbgr.className === "topnav"){
            hbgr.className += " responsive";
        }
        else{
            hbgr.className = "topnav";
        }
    })
})