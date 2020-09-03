String.prototype.isPalindrome = function () {
    let string = this.toLowerCase();
    //let revStr= this.toLowerCase().split('').reverse().join('');
    //this.string = string;
    //this.revStr = revStr;
    /*if (this.string === this.revStr.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }  */
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[string.length - 1 -i]) {
            return true;
        } else {
            return false;
        }
    }
}

console.log('А роза упала на лапу Азора');

//const palindrom = new isPalindrom('А роза упала на лапу Азора');


function getAverageMark(marks) {
    let result;
    let average;
    if (marks != 0) {
        result = marks.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        average = result / marks.length;
        let roundedAverage = Math.round(average);
        return roundedAverage
    } else {
        return 0
    }
}

function checkBirthday(birthday) {
    let now = Date.now();
    let bday = new Date(birthday);
    birthday = +bday;
    let diff = now - birthday;
    let age = diff / 31536000000;
    if (age > 18) {
        return true;
    } else {
        return false;
    } 
}
