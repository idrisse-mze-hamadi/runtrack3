function jourtravaille(date) {

    var today = new Date(date);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date_fr = today.toLocaleDateString('fr-FR', options);
   
   
    var JoursFeries = ["2020-01-01","2020-04-13","2020-05-01","2020-05-08","2020-05-21","2020-06-01","2020-07-14","2020-08-15","2020-11-01","2020-11-11","2020-12-25"];
    
    if (JoursFeries.includes(date) == true) {
        console.log("Le " + date_fr + " est un jour férié");
    }
    else if (today.getDay() == 6 || today.getDay() == 0 ){
        console.log("Non, " + date_fr + " est un week-end");
    }
    else {
        console.log("Oui, " + date_fr + " est un jour travaillé");
    }

}
jourtravaille('2020-01-04');