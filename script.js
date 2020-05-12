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
  
// Object Literal Enhancement

const houseName = "Nangeelil",
    street = "Villadom",
    place = "Ramavarmapuram",
    district1 = "Thrissur";

const myAddress1 = {
    houseName,
    street,
    place,
    district1,

    printHouseName() {
        console.log(`My house name is ${this.houseName}`);
    },
};

console.log(myAddress1);
myAddress1.printHouseName();

// END: Object Literal Enhancement


// XMLHttpRequest

function onResponse() {
    var data = JSON.parse(this.responseText);
    console.log(`Response from XHR call: ${data}`);
  }
  
  function onError(error) {
    console.log(error);
  }
  
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = onResponse;
  xhrRequest.onerror = onError;
  xhrRequest.open('get', 'https://randomuser.me/api/', true);
  xhrRequest.send();
  
  // END: XMLHttpRequest
  
  
  
  // jQuery Ajax
  
  $.ajax("https://randomuser.me/api/")
    .then(function (data) {
      console.log(`Response from AJAX call: ${data}`);
    })
    .catch(function (error) {
      console.log(error);
    });
  
  // END: jQuery Ajax
  
  
  
  // Fetch API
  
  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status - ${response.status}`);
      }
  
      // response is a stream
      response.json().then((data) => {
        console.log(`Response from Fetch call: ${data}`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  
  // END: Fetch API
  
  
  
  // Async/Await
  
  const getRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const user = await response.json();
    console.log(`Response from async fn: ${user}`);
  }
  getRandomUser();
  
  // END: Async/Await
  

    // OOP prior to ES6
  
    function PersonClass2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }
      
      PersonClass2.prototype.print = function () {
        console.log(
          `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
        );
      };
      
      const pn1 = new PersonClass2("praphul", "nangeelil");
      pn1.print();
      
      // END: OOP prior to ES6
      
      
      
      // ES6 Classes
      
      class PersonClass1 {
        constructor(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
        }
      
        print() {
          console.log(
            `{ firstName: "${this.firstName}", lastName: "${this.lastName}" }`
          );
        }
      }
      
      const pn2 = new PersonClass1("Praphul", "Nangeelil");
      pn2.print();
      
      PersonClass1.prototype.greet = function () {
        console.log(`Hey "${this.lastName}, ${this.firstName}"`);
      };
      pn2.greet();
      
      // END: Classes
      
      
      
      // ES6 Modules
      
    //   import { print } from "./modules/logger.js";
    //   print("We are done for the day!");
      
      // END: ES6 Modules
    