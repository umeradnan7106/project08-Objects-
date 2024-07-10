
            // Objects
          
            
type user = {
    name: string,
    age: number,
    role: string,
    height: string,
    children: {
        name: string,
        age: number,
    }
}

let user1:user = {
    name: "Ahmed",
    age: 36,
    role: "Father",
    height: "5.8", 
    children: {
        name: "Abdul Momin",
        age: 9,
    },
};
console.log(user1);
console.log(user1.age);
console.log(user1.children.name);




let examSheet = {
    myName: "Umer",
    rollNumber: 1234,
    subject: "computer",
};

console.log(examSheet.myName);
console.log(examSheet.rollNumber);
console.log(examSheet.subject);
console.log(examSheet);



let car = {
    carName: "Mehran",
    model: 2004,
    company: "Suzuki",
};
let message = `This car name is :${car.carName} and model is : ${car.model} and company is :${car.company}`;
console.log(message);
