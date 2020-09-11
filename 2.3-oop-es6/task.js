class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        let state = 100;
        let type = null;
        this.state = state;
        this.type = type;
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }


    fix() {
        let st = this.state * 1.5;
        return st;
    }

    set state(st) {
        if (st < 0) {
            this._state = 0;
        } else if (st > 100) {
            this._state = 100;
        } else {
            this._state = st;
        }
    }

    get state() {
        return this._state;
    }
}

/*const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state);*/

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }

}
//const 

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author; 
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);

        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);

        this.type = "fantastic";
        //super.fix()
    }
}

/*const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15*/

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);

        this.type = "detective";
    }
}

//2

class Library extends DetectiveBook {
    constructor(name, books, state) {
       super(state);
        books = [];
        this.books = books;
        this.name = name;
    }
        addBook(book){
            if (this.state > 30) {
                this.books.push(book);
            }
        }


        findBookBy(type, value) {
            for (let book of this.books) {
                if (type in book && Object.values(book).includes(value)) {
                    return book;
                } else {
                    return null;
                }
            }
        }
            //this.books[book][type]
            /*books = [
                {
                    'name': "bla",
                    "date": "1245"
                }
                bb = this.books.filter(obj => {
                        return obj.name = bookName;
                    })
            ]*/
        /*giveBookByName(bookName) {
            for (let book of this.books) {
                if (Object.values(book).includes(bookName)) {
                    return this.books.splice(book, 1);
                } else {
                    return null;
                }
            }
        }*/

        giveBookByName(bookName) {
            let i = this.books.findIndex(item => item.name == bookName);
            if (i !== undefined) {
                //const delB = bookName;
                let delB = this.books.splice(i, 1).join(",");
                //delete this.book[i]
                return delB;
            } else {
                return null;
            }
            
        }
}
//const library = new Library("Библиотека имени Ленина");

/*library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));*/

/*console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3*/


//3
/* 
if (typeof(marks) == 'undefined') {
            let marks = {};
        } else {
            if (typeof(grade) == "number" && typeof(subject) == "string" && grade > 0 && grade <= 5) {
                marks[subject] = grade;
                return marks.length;
            } else if (typeof(grade) != Number || grade > 5) {
                console.log(`Вы пытались поставить оценку ${grade} по предмету "math". Допускаются только числа от 1 до 5.`);
                return marks.length;
            }
        } */




class StudentLog {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    addGrade(grade, subject){
        let marks = {};
        if (typeof(marks) !== null) {
            if (typeof(grade) == "number" && typeof(subject) == "string" && grade > 0 && grade <= 5) {
                marks['subject'] = grade;
                return marks.length;
            } else if (typeof(grade) != Number || grade > 5) {
                console.log(`Вы пытались поставить оценку ${grade} по предмету "math". Допускаются только числа от 1 до 5.`);
                return marks.length;
            }
        } else {
            marks = {};
        } 
    }

    getAverageBySubject(subject){
        let result;
        for (let s in this.marks) {
            if (s == subject) {
                result = this.marks.reduce(function(sum, current) {
                    return sum + current;
                }, 0);
            } else {
                return null;
            }
        }
    }

    getTotalAverage(){
        let average;
        let res;
        for (let mark in this.marks) {
            if (this.marks != 0) {
                res = this.marks.reduce(function(sum, current)  {
                    return sum + current;
                }, 0);
            } else {
                return null;
            }
        }
        average = res / this.marks.length;
        return average;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName())
console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log(log.getTotalAverage()); // 3,75