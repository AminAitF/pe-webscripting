module.exports = class Persoon {
    constructor(naam, voornaam, jaar, maand, dag) {
        this.naam = naam;
        this.voornaam = voornaam;
        this.geboortedatum = new  Date(jaar, maand - 1, dag);
    }
    get naam() {
        return this._naam;
    }
    set naam(naam) {
        this._naam = naam;
    }
    get voornaam() {
        return this._voornaam;
    }
    set voornaam(voornaam){
        this._voornaam = voornaam;
    }


    berekenLeeftijd() {
        const vandaag = new Date();
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
    toString() {
        return `${this.naam} ${this.voornaam}\n${this.berekenLeeftijd()} jaar`;
    }
}