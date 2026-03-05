'use strict';
const InputError = require('./InputError');

module.exports = class Vec{
    constructor(x, y){
        if(typeof x != 'number' || typeof y != 'number'){
            throw new InputError(`misse ingave x: ${x} of y: ${y}`);
        }
        this._x=x;
        this._y=y;
    }

    plus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError(`misse ingave vec: ${vec}`);
        }
        return new Vec(this._x+vec._x, this._y+vec._y);
    }

    minus(vec){
        if(!(vec instanceof Vec)) {
            throw new InputError(`misse ingave vec: ${vec}`);
        }
        return new Vec(this._x-vec._x, this._y-vec._y);
    }

    get length(){
        return Math.sqrt(this._x*this._x+this._y*this._y);
    }
    toString(){
        return `(${this._x},${this._y})`;
    }
}

