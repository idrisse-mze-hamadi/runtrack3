document.addEventListener("DOMContentLoaded", (event) => {

    var button = document.getElementById("button");
    var nmb = compteur.innerHTML;
    
    button.addEventListener('click', ()=>{
        var compteur = document.getElementById("compteur");
        compteur.innerHTML = nmb++;
    })
})