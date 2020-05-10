//Const
const new_name = "Praphul";
const old_name = new_name;
//new_name = "Suyati";  //Uncaught TypeError: Assignment to constant variable.
//Template string
console.log(`old_name: ${old_name}  new_name: ${new_name}`);
//Declaring a function
function rename(new_name){
    new_name = "Suyati"; 
//Template string
    console.log(`${old_name} changed to ${new_name}`);
} 
//Calling a function
rename();

//Let 
let a1 = 50;
let a2 = 25;

//Arrow function
var add = (a,b) => (a+b)/2;  
console.log(`(a1+a2)/2  = ${add(a1,a2)}`)


// Destructuring Objects 
const employee = {
   Firstname : "Praphul",
   Lastname : "Nangeelil",
   Place : "Thrissur"
  };
  
  const { Firstname, Lastname, Place } = employee;
  console.log(`Firstname : ${Firstname}, Lastname : ${Lastname}, Place : ${Place}`)