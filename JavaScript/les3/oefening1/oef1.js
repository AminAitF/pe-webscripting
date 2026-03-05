let persoon = {
    naam: 'Ait Faraji',
    voornaam: 'Amin',
    geboortedatum: new Date(2003, 4, 16),
    leeftijd: function () {
        let vandaag = new Date();
        let jaar = vandaag.getFullYear() - this.geboortedatum.getFullYear();
        if ( vandaag.getMonth() > this.geboortedatum.getMonth()) {
            return jaar;
        } else if (vandaag.getMonth() === this.geboortedatum.getMonth()) {
            if (vandaag.getDate() >= this.geboortedatum.getDate()) {
                return jaar;
            }else {
                return --jaar;
            }
        }else {
            return --jaar;
        }
    }
};

console.log(persoon);