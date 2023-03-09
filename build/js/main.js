"use strict";
//1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    grade: 0,
    // verified?:boolean
};
console.log(updateAssignment(assign1, { grade: 95 }));
const AssignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database etc.
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, AssignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, AssignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "ff0000",
    green: "00ff00",
    blue: "0000ff"
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const GradeData = {
    Sara: { assign1: 95, assign2: 90 },
    Kelly: { assign1: 80, assign2: 15 }
};
const score = {
    studentId: "k123",
    grade: 85
};
const preview = {
    studentId: "k123",
    title: "vijay"
};
const createNewAssign = (title, point) => {
    return { title, point };
};
const tsAssign = createNewAssign("Utility types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
// Generics > (<T> - Type variable - Placeholde / Generic)
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Vijay'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Vijay' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBooleanValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "Vijay" }));
// console.log(processUser({name:"Vijay"}));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
class stateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new stateObject("John");
console.log(store.state);
store.state = "Vijay";
// store.state = 123
const myState = new stateObject([15]);
myState.state = (["Vijay", 30, true]);
console.log(myState.state);
// TypeScript with Vite.js
// npm create vite@latest
