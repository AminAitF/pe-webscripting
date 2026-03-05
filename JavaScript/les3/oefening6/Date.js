class Date{
    static MONTHS = ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    constructor(day, month, year){
        this._year = year;
        this._month = month;
        this._day = day;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get month() {
        return this._month;
    }

    set month(value) {
        this._month = value;
    }

    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }

    print() {
        console.log(`${this._day}/${Date.MONTHS[this._month - 1]}/${this._year}`);
    }
    static make(day, month, year){
        return new Date(day, month, year);
    }
}
let date1=Date.make(1,2,2001);
date1.print();