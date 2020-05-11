console.log("----React Assignmenet By Praphul----");  
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

 
  //Default parameter

  function testFunc(param="default"){
      console.log(`param value: ${param}`);
  }
  testFunc();
  testFunc("TestDefault");
 
  const cities = {
    country: ["Trivandrum", "Cochin", "Trichur", "Calicut"],
    display: function (delay = 1000) {
        setTimeout(() => {
            console.log(this.country.join(" * "))
        }, delay); 
    }  
};
cities.display();

//Destructuring of objects
const personalInfo = {
    Name: "Praphul",
    Place: "Ramavarmapuram",
    District: "Thrissur",
    State: "Kerala"
}

const { Name, District } = personalInfo;
console.log(Name, District);

const displayPersInfo = (info) => {
    console.log(`my district is ${info.District}`);
}

displayPersInfo(personalInfo);
 

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //Spread Operator (Shallow copy)
  const shallowNumbersCopy = [...numbers]; 
  //Deep copy
  const deepNumbersCopy = numbers;

  console.log(`Shallow copy of numbers ${shallowNumbersCopy}`);
  console.log(`Deep copy of numbers ${deepNumbersCopy}`);

  //numbers changed
  for(var i=0 ; i<numbers.length; i++){
    numbers[i] = numbers[i]*10;
  }

  console.log(`Shallow copy of numbers ${shallowNumbersCopy}`);
  console.log(`Deep copy of numbers ${deepNumbersCopy}`);



//Deep or shallow copy using object
let myObject = {
    string: 'My text',
    number: 974555,
    date: new Date('2020-12-31T23:59:59')
  }
  
  let shallowcopy = Object.assign({}, myObject); //shallow copy of abject

  let deepcopy = JSON.parse(JSON.stringify(myObject)) // deep copy of object
  
  console.log(myObject)
  console.log(shallowcopy) 
  console.log(deepcopy) 
  


