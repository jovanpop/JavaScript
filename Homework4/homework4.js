let personOne={
    fName:'Tom',
    lName:'Jones'
};
let personTwo={
    fName:'Joe',
    lName:'Cocker'
};
let personThree={
    fName:'John',
    lName:'Legend'
};

console.log(personOne.fName,personOne.lName);
console.log(personTwo.fName,personTwo.lName);
console.log(personThree.fName,personThree.lName);

// console.log(personOne['fName'],personOne['lName']);
// console.log(personTwo['fName'],personTwo['lName']);
// console.log(personThree['fName'],personThree['lName']);

personOne.age=30;
personOne['age']=80;

personTwo.age=30;
personTwo['age']=70;

personThree.age=30;
personThree['age']=42;

if (personOne.age>personTwo.age && personOne.age>personThree.age){
    console.log('Oldest is',personOne.fName,personOne.lName);
}else if(personTwo.age>personOne.age && personTwo.age>personThree.age){
    console.log('Oldest is',personTwo.fName,personTwo.lName);
}else if(personThree.age>personTwo.age && personTwo.age<personThree.age){
    console.log('Oldest is',personThree.fName,personThree.lName);
}

let persons=[personOne,personTwo,personThree];
console.log(persons);
let sum=persons[0].age+persons[1].age+persons[2].age;
console.log('Sum of age is',sum);
let avg=(persons[0].age+persons[1].age+persons[2].age)/3;
console.log('Average years',avg);







