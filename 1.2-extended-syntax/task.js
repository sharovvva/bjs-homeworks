"use strict";

function getResult(a,b,c){
    let d = (b**2) - (4 * a * c);
   // Math.sqrt(expr);

    let result = [];
    let rootFirst;
    let rootSecond;
    
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

}

function getAverageMark(marks){
    //marks = [1, 2, 3];
    let averageMark;
    let result;
    let arr;

    if (marks.length == 0) {
        return 0;
        //result = 0;
    } else if (marks.length >= 5){
        console.log("Оценок больше 5");
        arr = marks.slice(0,5);
        result = arr.reduce(function(sum, current) {
        return sum + current;
        }, 0);
        averageMark = result / arr.length;
    } else {
        result = marks.reduce(function(sum, current) {
        return sum + current;
        }, 0);
        averageMark = result / marks.length;
    };

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let year = dateOfBirthday.getFullYear();
    let today = new Date().getFullYear();
    let yearsOld = today - year;
    let result;

    //let yearsOld = new Date().getFullYear() -  dateOfBirthday.getFullYear();
   

    if (yearsOld >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
        return result;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        return result;
    } 
    
    return askDrink;
}
