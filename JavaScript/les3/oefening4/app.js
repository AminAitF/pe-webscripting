'use strict';
const Vec = require('./util/Vec');

try{
    let v=new Vec(2,3);
    let v2=new Vec(3,4);
    let v3=v.plus(v2);
    console.log(v.toString());
    console.log(v.length);
    let v4=new Vec(new Date(),1);
} catch(error){
    console.log(error.message);
}
console.log("done");