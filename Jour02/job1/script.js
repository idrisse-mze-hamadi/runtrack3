document.addEventListener("DOMContentLoaded", (event) => {

    var article = document.getElementById("citation").textContent; 
    var button = document.getElementById("button");

    button.addEventListener('click', function(){
        
    console.log(article)
    })
})