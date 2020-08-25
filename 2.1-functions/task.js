//1st task
function getSolutions(a, b, c) {
    let d = b**2 - (4*a*c);
    let obj = new Object();
    if (d < 0) {
        obj.D = d;
        obj.roots = [];
        return obj;
    } else if (d === 0) {
        let x1 = -b / (2*a);
        obj.D = d;
        obj.roots = [x1];
        return obj;
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2*a);
        let x2 = (-b - Math.sqrt(d)) / (2*a);
        obj.D = d;
        obj.roots = [x1, x2];
        return obj;
    }
}

console.log(getSolutions(2, 4, 6))

function showSolutionsMessage(a, b, c){
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.obj.D}`);
    if (result.roots == []) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.roots == [x1]){
        console.log(`Уравнение имеет один корень X1 = ${result.obj.roots[0]}`);
    } else if (result.roots = [x1, x2]){
        console.log(`Уравнение имеет два корня X1 = ${result.obj.roots[0]}, X1 = ${result.obj.roots[1]}`);
    }
}

//2nd task
function getAverageScore(data) {   //average for each subject
    for (let prop in data){
        let summ = data.prop.reduce((sum, current) => sum + current, 0);
        data.prop = summ / data.prop.length;
        return data.prop;
    }
    let averageM = 
    data.average = getAverageMark(marks);
}

/*function getAverageMark(marks) { //average for all subjects
    let averageMark = getAverageScore(data);
    for (let prop in averageMark) {
        let propertyName = averageMark.prop;
        let sumAllMarks = averageMark.prop.reduce((sum, current) => sum + current, 0);
        let average = sumAllMarks / ppropertyName.length;
        return average;
    }
}*/
function getAverageMark(marks) {
    for (let i = 0; i <= marks.length; i++) {
        
    }
}

function foo() {
    const a = {a: 1};

    console.log(a)
}

foo();

