'use strict';
const Vec = require('./Vec');
const InputError = require('./InputError');


module.exports = class Polyline {
    constructor(vecs = []){
        this._vecs = vecs;
    }
    add(vec) {
        if (vec instanceof Vec) {
            this._vecs.push(vec)
        }else {
            throw new InputError(`invalid vec: ${vec}`);
        }
    }
    toString() {
        let result = '';
        for (let i = 0; i < this._vecs.length; i++) {
            result += this._vecs[i].toString() + " ";
        }
        return result;
    }
}

