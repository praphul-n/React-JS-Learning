//Q4. Write method to do deep copy of a list without using any third party library

let EmployeeList = [
    { name: 'Raj', departmentID: 0, age: 25 },
    { name: 'Reo', departmentID: 1, age: 28 },
    { name: 'Rahim', departmentID: 2, age: 34 }
];

let DeepCopyEmployeeList = JSON.parse(JSON.stringify(EmployeeList))
DeepCopyEmployeeList[0].name="Praphul";
console.log("Deep copy of a list without using any third party library");
console.log(EmployeeList);//original list 
console.log(DeepCopyEmployeeList);//Deep copy list.


//Q5. Write method to do deep copy of an object without using any third partylibrary.cc
let StudentObject={
    name:"Praphul N",
    departmentID:"3",
    school:"GHSS"
};

let DeepCopyObject = JSON.parse(JSON.stringify(StudentObject));
DeepCopyObject.name="Praphul";
console.log("Deep copy of an object without using any third partylibrary.")
console.log(StudentObject); //original object
console.log(DeepCopyObject);  //Shallow copy object.