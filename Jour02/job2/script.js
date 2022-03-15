document.addEventListener("DOMContentLoaded", (event) => {

    var button = document.getElementById("button");
    
    button.addEventListener('click', ()=>{
        
        var article = document.getElementById("citation"); 
        if(article.style.display !== "none")
        {
            article.style.display = "none";
        }
        else
        {
            article.style.display = "block";
        }
    console.log(article)
    })
})