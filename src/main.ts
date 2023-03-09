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
    // verified?:boolean
}

console.log(updateAssignment(assign1,{grade:95}))
const AssignGraded:Assignment = updateAssignment(assign1, {grade:95})

// Required and Readonly

const recordAssignment = (assign:Required<Assignment>): Assignment =>{
  // send to database etc.
  return assign
}

const assignVerified: Readonly<Assignment> = {
  ...AssignGraded, verified:true
}

recordAssignment({...AssignGraded, verified:true})

// Record

const hexColorMap: Record<string, string> = {
  red:"ff0000",
  green:"00ff00",
  blue:"0000ff"
}

type studentsss = "Sara" | "Kelly"
type letterGraded = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<studentsss, letterGraded> = {
  Sara:"B",
  Kelly:"U"
}

interface Grades {
  assign1: number,
  assign2:number
}

const GradeData : Record<studentsss, Grades> = {
  Sara: {assign1:95, assign2:90},
  Kelly:{assign1:80, assign2:15}
}

// Pick and Omit

type assignResult = Pick<Assignment, "studentId" | "grade">

const score:assignResult = {
  studentId:"k123",
  grade:85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
  studentId:"k123",
  title:"vijay"
}

// Exclude and Extract

type adjustedGrade = Exclude<letterGraded, "U">
type highGrade = Extract<letterGraded, "A" | "B">

// Nonnullable

type allPossibilityGrade = "Dave" | "Sara" | null | undefined

type NamesOnly = NonNullable<allPossibilityGrade>

// ReturnType

type newAssign = {
  title:string,
  point:number
}

const createNewAssign = (title:string, point:number) =>{
  return {title, point}
}

type newAssign1 = ReturnType<typeof createNewAssign>

const tsAssign:newAssign1 = createNewAssign("Utility types", 100)

console.log(tsAssign)

// Parameters

type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["Generics", 100]
const tsAssign2:newAssign1 = createNewAssign(...assignArgs)
console.log(tsAssign2);

// Awaited - Help us with ReturnType of a Promise

interface User{
  id:number,
  name:string,
  username:string,
  email:string
}

const fetchUsers = async (): Promise<User[]> => {

  const data = await fetch(
      'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
      return res.json()
  }).catch(err => {
      if (err instanceof Error) console.log(err.message)
  })
  return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))

// Generics > (<T> - Type variable - Placeholde / Generic)

const stringEcho = (arg:string):string => arg

const echo = <T> (arg:T): T => arg

const isObj = <T> (arg:T):boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(null));

const isTrue = <T> (arg:T) : {arg:T, is:boolean} => {
  if(Array.isArray(arg) && !arg.length){
    return {arg, is:false}
  }
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {arg, is:false}
  }
  return {arg, is:!!arg}
}

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Vijay'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({name:'Vijay'}));
console.log(isTrue([]));
console.log(isTrue([1,2,3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

interface BoolCheck<T>{
  value:T,
  is:boolean 
}

const checkBooleanValue = <T> (arg:T) : BoolCheck<T> => {
  if(Array.isArray(arg) && !arg.length){
    return {value:arg, is:false}
  }
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {value:arg, is:false}
  }
  return {value:arg, is:!!arg}
}

interface HasID{
  id:number
}

const processUser = <T extends HasID>(user: T) : T => {
  return user;
}

console.log(processUser({id:1, name:"Vijay"}));
// console.log(processUser({name:"Vijay"}));

const getUsersProperty = <T extends HasID, K extends keyof T>(users:T[], key:K):T[K][] =>{
  return users.map(user=>user[key]);
}

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
]

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

class stateObject<T> {
  private data:T
  constructor(value:T){
    this.data = value;
  }
  get state():T{
    return this.data;
  }
  set state(value:T){
    this.data = value;
  }
}

const store = new stateObject("John")
console.log(store.state)
store.state = "Vijay"
// store.state = 123

const myState = new stateObject< (string | number | boolean) [] > ([15])

myState.state = (["Vijay", 30, true])
console.log(myState.state)

// TypeScript with Vite.js

// npm create vite@latest