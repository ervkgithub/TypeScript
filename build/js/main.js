"use strict";
//1
let Myname = "Vijay";
let age = 30;
let isLoggedIn = false;
let address;
let album;
//2
let stringArrr = ["one", "two", "three", "four"];
let guitars = ["Strat", "Les Paul", 1010];
let mixedData = ["DVD", 1992, false];
let evh = {
    name: "Eddie",
    active: false,
    albums: [1010, 1992, "VI1010"],
};
let jp = {
    name: "Eddie",
    albums: ["I", "II", "III"],
};
evh = jp;
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// Literal Types (only single value)
let result = "success";
// Function
const sum = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg("Hello");
logMsg(sum(2, 3));
// Optional Parameter
const add = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// or
const add1 = (a, b, c = 2) => {
    return a + b + c;
};
// Rest Parameter
const total = (a, ...nums) => {
    return a + nums.reduce((prv, curr) => prv + curr);
};
logMsg(total(10, 2, 3));
// never type
const createError = (errorMsg) => {
    throw new Error(errorMsg);
};
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happened");
};
// custom type guard
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
let nextVal = addOrConcat(5, 5, "concat");
// The DOM
// const img = document.querySelector("img")!;
// const myImg = document.getElementById("#img") as HTMLImageElement;
// const NextImg = <HTMLImageElement>document.getElementById("#img");
// img.src;
// myImg.src;
// NextImg.src;
// Date methos in TypeScript
// Variation 1
// let year : HTMLElement | null
// year = document.getElementById("#year")
// let thisYear : string
// thisYear = new Date().getFullYear().toString()
// if(year){
//     year.setAttribute("datetime", thisYear)
//     year.textContent = thisYear;
// }
// Variation 2
// const year = document.getElementById("#year") as HTMLSpanElement;
// const thisYear: string = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;
// Class
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `This is my age ${this.age}`;
    }
}
const Vijay = new Coder("Vijay", "Rock", 30);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Languagwe is ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Dancer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument} `;
    }
}
const Page = new Dancer("Jimmy", "Guitar");
console.log(Page.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 30
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
const student = {
    name: "Vijay",
    GPA: 7.56,
    classes: [200, 300]
};
// console.log(student.test)
// console.log(student.name)
// for(const key in student ){
//     console.log(`${key} : ${student['key']}`);
// }
for (const key in student) {
    console.log(`${key} : ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 5000,
    bonus: 10000,
    overtime: 1000
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "v100",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
