function sommenombrespremiers(firstvar, secondvar){
    
    for(var i=2; i < firstvar; i++){
        if(firstvar % i == 0){
            return false;
        }
    }
    
    for(var i=2; i < secondvar; i++){
        if(secondvar % i == 0){
            return false;
        }
    }

    var somme = firstvar + secondvar;
    return somme;
}

sommenombrespremiers(2, 3);