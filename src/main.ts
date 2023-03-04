//1

let Myname: string = "Vijay";
let age: number = 30;
let isLoggedIn: boolean = false;
let address: any;
let album: number | string;

//2

let stringArrr = ["one", "two", "three", "four"];
let guitars = ["Strat", "Les Paul", 1010];
let mixedData = ["DVD", 1992, false];

//3

type Guitarist = {
  name: string;
  // active:boolean,
  active?: boolean;
  albums: (string | number)[];
};

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1010, 1992, "VI1010"],
};

let jp: Guitarist = {
  name: "Eddie",
  albums: ["I", "II", "III"],
};

evh = jp;

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

// Type Aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist1 = {
  name: string;
  active: boolean;
  albums: stringOrNumber;
};

type userId = stringOrNumber; // can't dosame with interface

// Literal Types (only single value)

let result: "success" | "failure" = "success";

// Function

const sum = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (msg: any) => {
  console.log(msg);
};

logMsg("Hello");
logMsg(sum(2, 3));

// Optional Parameter

const add = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// or

const add1 = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

// Rest Parameter

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prv, curr) => prv + curr);
};

logMsg(total(10, 2, 3));

// never type

const createError = (errorMsg: string): never => {
  throw new Error(errorMsg);
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happened");
};

// custom type guard

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
let nextVal: number = addOrConcat(5, 5, "concat") as number;

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
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
    return `This is my age ${this.age}`;
  }
}

const Vijay = new Coder("Vijay", "Rock", 30);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang(){
    return `Languagwe is ${this.lang}`
  }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25)

console.log(Sara.getLang())

// Interface 

interface Musician {
    name:string,
    instrument:string,
    play(action:string):string
}

class Dancer implements Musician{
    name:string
    instrument: string
    constructor(name:string, instrument:string){
        this.name = name;
        this.instrument = instrument
    }
    play(action:string){
        return `${this.name} ${action} the ${this.instrument} `
    }
}

const Page = new Dancer("Jimmy", "Guitar");
console.log(Page.play('strums'));

class Peeps {
    static count:number = 0;
    static getCount():number{
        return Peeps.count
    }
    public id:number
    constructor(public name:string){
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count);
console.log(Steve.id)

class Bands{
    private dataState:string[]
    constructor(){
        this.dataState = [];
    }
    public get data():string[]{
        return this.dataState;
    }
    public set data(value:string[]){
        if(Array.isArray(value) && value.every((el) => typeof el === 'string')){
            this.dataState = value
            return
        }
        else throw new Error ('Param is not an array of string');
    }
}

const MyBands = new Bands()
MyBands.data = ["Neil Young", "led Zep"]
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);

// Index Signature

interface TransactionObj {
    [index:string]:number
}

interface TransactionObj{
    Pizza:number,
    Books:number,
    Job:number
}

const todaysTransactions: TransactionObj = {
    Pizza:-10,
    Books:-5,
    Job:30
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

interface Student{
   // [key:string]:number | string | number[] | undefined
    name:string,
    GPA:number,
    classes?:number[]
}

const student:Student = {
    name:"Vijay",
    GPA:7.56,
    classes:[200,300]
}

// console.log(student.test)
// console.log(student.name)

// for(const key in student ){
//     console.log(`${key} : ${student['key']}`);
// }

for(const key in student ){
    console.log(`${key} : ${student[key as keyof Student ]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})

const logStudentKey = (student:Student, key:keyof Student):void =>{
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'name');

// interface Incomes{
//     [key:string]:number
// }

type Strems  = 'salary' | 'bonus' | 'overtime'

type Incomes = Record<Strems, number | string>

const monthlyIncomes: Incomes = {
    salary:5000,
    bonus:10000,
    overtime:1000
}

for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}

// Utility Types

// Partial

interface Assignment{
    studentId:string,
    title:string,
    grade:number,
    verified?:boolean
}

const updateAssignment = (assign:Assignment, propsToUpdate:Partial<Assignment>): Assignment =>{
    return {...assign, ...propsToUpdate}
}

const assign1:Assignment = {
    studentId:"v100",
    title:"Final Project",
    grade:0,
    verified?:boolean,
}

console.log(updateAssignment(assign1,{grade:95}))