'use strict';
const Vec = require('./util/Vec');
const Polyline = require('./util/Polyline');

try{
    let v=new Vec(2,3);
    let v2=new Vec(3,4);
    let v3=v.plus(v2);
    console.log(v.toString());
    console.log(v.length);
    let poly = new Polyline([]);
    poly.add(v);
    poly.add(v2);
    poly.add(v3);
    console.log(poly.toString());
    let v4=new Vec(new Date(),1);



} catch(error){
    console.log(error.message);
}
console.log("done");