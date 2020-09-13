//1

function parseCount(n) {
    let num = Number.parseInt(n, 10);
    if (isNaN(num)) {
        const error = new Error("Невалидное значение");
        throw error;
    }
    return num;
}

function validateCount(m) {
    //let parse = parseCount(m);
    try {
        return parseCount(m);
    } catch(e) {
        //e.error;
        return e;
    }
}
validateCount("012")
console.log(validateCount("012"))

//2

class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b) < this.c || (this.b + this.c) < this.a || (this.a + this.c) < this.b){
            const error = new Error("Треугольник с такими сторонами не существует");
            throw error;
        }
        //return this.a, this.b, this.c
    }

    getPerimeter() {
            return this.a + this.b + this.c;

    }

    getArea() {
            let s = (this.a + this.b + this.c) / 2;
            let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
            return area.toFixed(3);
    }

}

//let obj = {};

function getTriangle(a, b, c) {
    try {
        return trian;
    } catch(e) {
        let textError = function() {
            const newEr = new Error("Ошибка! Треугольник не существует");
            return newEr;
        };
        let objError = {
            getPerimeter : textError,
            getArea : textError
        }
        return objError;
    }
}

const trian = new Triangle(2, 2, 5)
console.log(trian.getPerimeter());
console.log(trian.getArea());
getTriangle(2, 2, 5)