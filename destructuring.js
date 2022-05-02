// Problem 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar) // logs Tesla because randomCar is in the first index
// console.log(otherRandomCar) // logs Mercedes because otherRandomCar in the secon index

// Problem 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); // gives an error because name is not defined
// console.log(otherName);

// Problem 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password); // logs 12345
// console.log(hashedPassword); // gives undefined because hashedPassword doesnt exist in person

// Problem 4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second); // logs false because first is 2 and second is 5 so they are not equal
// console.log(first == third); // true because first is 2 and this is 2 so they are equal

// Problem 5 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // logs value
console.log(secondKey); // logs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // logs 1
console.log(willThisWork); // logs 5

