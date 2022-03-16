$(document).ready(function(){
    
    $("#hide").click(function(){
        $('p').hide(1000);
    });

    $("#button").click(function(){
        $('p').show(1000);
    });
})