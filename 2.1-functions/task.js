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

/*function getAverageScore(data) {
    let marks = [];
    for (prop in data) {
        marks.push(data[prop]);
    }
    if (marks != []) {
        return marks;
    }

}

function getAverageMark(marks) {
   marks = getAverageScore(data);
   //let sumOfMarks;
   for (key in marks){
    if (marks[key] = []){
        return 0;
    } else {
        return marks[key].reduce((sum, current) => sum + current /  marks[key].length , 0);
    }
   }
   
}
console.log(getAverageScore(data));
console.log(getAverageMark(marks));



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

         marks = data;
    for (let prop in marks) {
        let sumMarks = marks.prop.reduce((sum, current) => sum + current, 0); 
        marks.prop = sumMarks / marks.prop.length;
        return marks; 
    }
    }
}
function getAverageMark(marks) {
    for (let i = 0; i <= marks.length; i++) {
        
    }
} */

function getAverageMark(marks) {
    let summ;
    if (marks != 0) {
        summ = marks.reduce((sum, current) => sum + current, 0);
        return averMarks = summ / marks.length;
    } else {
        return averMarks = 0;
    };
}
//console.log(getAverageMark([4, 5, 5, 4]))

function getAverageScore(data) {
    //let allMarks = getAverageMark(marks); 
    //let marks;
    let average; 
    let value;
    for (prop in data) {
       value = data[prop]; 
       value = getAverageMark(value);//??
    };
    if (data != 0) {
        average = value.reduce((sum, current) => sum + current, 0);
        data.average = average / Object.keys(data).length;
        return data;
        } else {
        return data.average = 0;
    }
    
}

//3rd task

function getDecodedValue(secret){
    if (secret === 0) {
        return "Родриго";
    } else {
        return "Эмильо";
    }
}

function getPersonData(secretData){
    let decodedValue = getDecodedValue(secret);
    let obj = {};
    if (decodedValue === "Родриго" || decodedValue === "Эмильо" ) {
        obj.firstName = decodedValue;
    };
    if (decodedValue ==="Родриго" || decodedValue === "Эмильо" ){
        obj.lastName = decodedValue;
    };
    return obj;
 }


