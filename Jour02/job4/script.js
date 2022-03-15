document.addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener('keydown',(event)=>{

        var textarea = document.getElementById('keylogger');
        var dblettre = textarea.value;
        var lettre = event.key
        
        textarea.value =  dblettre + lettre;
    });
    
    
})