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
//validateCount("012")
//console.log(validateCount("012"))

//2

class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        try {
            (this.a + this.b) > this.c || (this.b + this.c) > this.a || (this.a + this.c) > this.b;
        } catch(e) {
            e = new Error("Треугольник с такими сторонами не существует");
            throw e;
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
const trian = new Triangle(2, 5, 5)

function getTriangle(a, b, c) {
    try {
        let obj = trian(a, b, c);
        return obj;
    } catch(e) {
        let er = function() {
            const newEr = new Error("Ошибка! Треугольник не существует");
            throw newEr;
            //return newEr;
        };
        obj = {
            getPerimeter : er,
            getArea : er
        }
        console.log(obj)
        return obj;
        
    }
}


console.log(trian.getPerimeter());
console.log(trian.getArea());
getTriangle(2, 5, 5)

