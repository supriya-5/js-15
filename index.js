let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
    // showDetails: function(age,gender) {
    //     console.log(this.name, this.id, this.designation);
    // }
}



// employee1.showDetails();

let employee2 = {

    name : "Karan",
    designation : "IT",
    id : 112,

}

let employee3 = {

    name : "Raju",
    designation : "ECE",
    id : 113,
    
}

function showDetails(age,gender) {
    console.log(this.name, this.id, this.designation,age,gender);
}

// employee1.showDetails.call(employee2);//passing the arguments(23,M)
// employee1.showDetails.call(employee3);

// employee1.showDetails.apply(employee2);//[23,"M"]
// employee1.showDetails.apply(employee3);



// let res1 = employee1.showDetails.bind(employee2);
// let res2 = employee1.showDetails.bind(employee3);
// res1();//
// res2();//

showDetails.call(employee1,21,"M");
showDetails.call(employee2,22,"M");
showDetails.call(employee3,23,"M");

showDetails.apply(employee1,[21,"M"]);
showDetails.apply(employee2,[22,"M"]);
showDetails.apply(employee3,[23,"M"]);


showDetails.bind(employee1)(21,"M");

let res2 =showDetails.bind(employee2);
res2(22,"M");
let res3 =showDetails.bind(employee3);
res2(23,"M");


const studentPrototype = {
    calage(){
    console.log(2022 - this.bYear);
    },
    initialise(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
    
}

const devi = Object.create(studentPrototype);

devi.fname = "devi";
devi.lname = "sri";
devi.bYear = 1998;

devi.calage();
console.log(devi);

const siva = Object.create(studentPrototype);
siva. initialise("siva","kumar",2000);
siva.calage();
console.log(siva);

//classes:

//classes in js doesnot not work exactly the same way as that of class in JAVA/C++
//they are just a syntactic sugar of two objects prototype, instances that we have read.
//they are special kind of functions with some variations.

//1. classes are also First class function.
//2. classes are not hoisted / donot support hoisting.



const classPrototype = class{
    constructor(fname,lname,bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
     calage(){
            console.log(2022 - this.bYear);
    }
   
}

const james = new classPrototype("james","bond",1999);
console.log(james);
james.calage();


classPrototype.prototype.greet = function(){
    console.log("good evening");
}
james.greet();
console.log(james.__proto__);


//typecasting

//power not casting a string to a number like that of a sub,division,multiplication,modulus.
 console.log("2022"+ 33);
 console.log("2022"- 33);
 console.log("2022"* 33);
 console.log("20" % 3);
 console.log(2 ^"2");
