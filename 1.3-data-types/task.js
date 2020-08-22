"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    //let result;

    /*if (percent == String) {
        return Number(percent);
    } else if (percent != String && percent != Number) {
        return `Параметр percent содержит неправильное значение ${percent}`
    }*/
    if (isNaN(percent) == false){
        Number(percent);
    } else {
        return `Параметр percent содержит неправильное значение ${percent}`
    }

    if (isNaN(contribution) == false){
        Number(contribution);
    } else {
        return `Параметр contribution содержит неправильное значение ${contribution}`
    }

    if (isNaN(amount) == false){
        Number(amount);
    } else {
        return `Параметр contribution содержит неправильное значение ${amount}`
    }

    if (isNaN(date) == false){
        Number(contribution);
    } else {
        return `Параметр contribution содержит неправильное значение ${date}`
    }

    let refund = amount - contribution; //сумма, которую надо вернуть

    //let finalMonth = date.getMonth() + 1;
    //let todayMonth = new Date.getMonth();
    let months;

    let years = date.getFullYear() - new Date().getFullYear();

    if (years == 1) {
        months = 12;
    } else if ( years == 2) {
        months = 24;
    } else if (years == 3) {
        months = 36;
    } else if (years == 4) {
        months = 48;
    }
    
    percent = percent / 100;
    let p = percent / 12;

    let monthlyCharge = refund*(p+(p/(((1+p)**months) - 1))); //ежемес. оплата
    let totalAmount = (monthlyCharge * months).toFixed(2);

    console.log(Number(totalAmount));
    return Number(totalAmount);
}
  

function getGreeting(name) {
    let greeting;
    if (name == null || name === '') {
        greeting = "Привет, мир! Меня зовут Аноним";
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }
    console.log(greeting);
    return greeting;
}