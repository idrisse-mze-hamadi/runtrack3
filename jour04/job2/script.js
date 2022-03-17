window.addEventListener("DOMContentLoaded", (event) => {

    const obj = {name: "La Plateforme_", address: "8 rue d'hozier", city: "Marseille", nb_staff: "11", creation:"2019"}
    
    let cle = "address";
    let cle2 = "city"
   
    function jsonValueKey(obj, key, keyy) {
        
        //return obj[key] + " " + obj[keyy]; 
        console.log(obj[key] + " " + obj[keyy])
    }

    jsonValueKey(obj, cle, cle2);
});