"use strict";

function getResult(a,b,c){

    a = 2;
    b = 4;
    c = 3; 

    let d = (b**2) + (4 * a * c);
   // Math.sqrt(expr);

    let result = [];
    let rootFirst;
    let rootSecond
    
    if (d < 0) {
        result = [];
    } else if (d == 0) {
        rootFirst = (-b + Math.sqrt(d)) / 2*a;
        result.push(rootFirst);
        
    } else {
       // result[0] = (-b + Math.sqrt(d)) / 2*a;
        //result[1] = (-b - Math.sqrt(d)) / 2*a;

        rootFirst = (-b + Math.sqrt(d)) / 2*a;
        rootSecond = (-b - Math.sqrt(d)) / 2*a;
        result.push(rootFirst, rootSecond);
    }
    return result;


   /* if ( d == 0) {
        result[0] = (-b + Math.sqrt(d)) / 2*a;
    } else if (d > 0) {
        result[0] = (-b + Math.sqrt(d)) / 2*a;
        result[1] = (-b - Math.sqrt(d)) / 2*a;
    } else {
        result = null;
    }
    return result; */

}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}