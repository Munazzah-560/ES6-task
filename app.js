                 // Answer 1
                // Global scope
// var varVar = "declared var" 
// let letVar = "declared let"     
// const constVar = "declared const" 

// console.log(varVar);
// console.log(letVar);
// console.log(constVar);

                 // Answer 2
                 //Function scope
// function scope(){
//     var varVar = "declared var" 
//     let letVar = "declared let"     
//     const constVar = "declared const" 
// }     

// console.log(varVar);
// console.log(letVar);
// console.log(constVar);

                 // Answer 3
                //  Block scope
// if(true){
// var varVar = "declared var" 
// let letVar = "declared let"     
// const constVar = "declared const"
// }
// console.log(varVar);
// console.log(letVar);
// console.log(constVar);

                 // Answer 4
                // Hoisting with var:
// console.log(varVar);
// var varVar = "declared var" 

                 // Answer 5
                //  Hoisting with let and const
// console.log(letVar);
// let letVar = "declared let"

// console.log(constVar);
// const constVar = "declared const";

                 // Answer 6
                //  Re-declaration:
// var varVar = "declared var" 
// var varVar = "declared var2" 
// console.log(varVar);

// let letVar = "declared let"
// let letVar = "declared let2"
// console.log(letVar);

// const constVar = "declared const"
// const constVar = "declared const2"
// console.log(constVar);

                 // Answer 7
                //  Re-assignment:
// var varVar = "declared var" 
// console.log(varVar)
// varVar = "declared var2" 
// console.log(varVar);

// let letVar = "declared let"
// console.log(letVar);
// letVar = "declared let2"
// console.log(letVar);

// const constVar = "declared const"
// console.log(constVar);
// constVar = "declared const2"
// console.log(constVar);

                 // Answer 8
                //  Temporal Dead Zone (TDZ):
// {
//     console.log(letVar);
//     let letVar = "declared let"
// }
// {
//     console.log(constVar);
//     const constVar = "declared const";
// }

                 // Answer 9
                //  When to use var, let, and const:
// function usingVar(e){
//     var score = 0;
// for(var i = 0; i< e.length;i++){
//        score += e[i]
// }
// if(score > 100){
//     var isHighScore = true;
// }
// else{
//     var isHighScore = false; 
// }
// console.log(score);
// console.log(isHighScore);
// }

// var scores = [10,20,30,40]
// usingVar(scores)

// function usinglet(e){
// while(true){
//     let guess = prompt("Guess the number between 1 and 10:");
//     guess = Number(guess);
//     if (guess === e) {
//         console.log(`Correct! You guessed the number`);
//         break; 
//     } else {
//         console.log("Wrong guess, try again!");
//     }
// }
// }
// usinglet(7);

// function usingConst(){
//     const color = {
//         theme:"dark",
//         language: "en",
//         version: "7.0.1"
// }
//    color.theme = "light" ;
//    color.version = "6.9";
  
//    console.log(color)
// }
// usingConst()

                // Answer 10
                // String Interpolation:
// let firstName = "John";
// let lastName = "Doe";
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

                // Answer 11
                // Multi-line Strings:
// let address = `
// L-123 11-G New Karachi
// F-240 11-F New Krachi
// W-345 11-L Karachi
// `;
// console.log(address);

                // Answer 12
                // Simple Expressions:
// let num1 = 5;
// let num2 = 7;
// let result = `The sum of ${num1} and ${num2} is ${num1 + num2}` 
// console.log(result)               

                // Answer 13
                  // Function Calls:
// function multiplyNumbers(num1, num2) {
//     return num1 * num2;
// }               
//      let number1 = 6;
//     let number2 = 5;
                
//     let resultString = `${multiplyNumbers(number1, number2)}.`;         
//     console.log(resultString);

                // Answer 13
                // Creating a Tagged Template:
// function log(strings, ...values) {
//     console.log(strings);
//     console.log( values);
//     return `${strings[0]}${values.join('')} ${strings[1]}`;
// }
                
//     let name = "Alice";
//     let result = log`Hello, my name is ${name}`;
//     console.log('Result:', result);  

                // Answer 14
                // Formatting:
// function toUpperCase(strings, ...values) {
// let result = strings[0];
// for (let i = 0; i < values.length; i++) {
//         result += values[i] + strings[i + 1];
// }
//     return result.toUpperCase(); 
// }
                
// let name = "Alice";
// let age = 25;
                
// let result = toUpperCase`Hello, my name is ${name} and I am ${age} years old.`; 
// console.log(result);

                // Answer 15
                // Conditional Logic:
// let currentHour = new Date().getHours()
// let message = `It's ${currentHour < 12 ? "Morning" :"Afternoon"}!The cuurent hour is ${currentHour}`
// console.log(message)

                // Answer 16
                // Loops within Template Literals:
// let shoppingList = ["Apples", "Bananas", "Carrots", "Dairy", "Eggs"];
// let htmlResult = `<ul>

//  ${shoppingList.map(item => `<li>${item}</li>`)}

// </ul>`
// console.log(htmlResult);

                // Answer 17
                // Escaping Backticks:
// let withBackticks = `string with a backtick \``;
// console.log(withBackticks);

                // Answer 18
                // Nested Template Literals:
// let tableHTML = `
// <table>
//   <thead>
//     <tr>
//       <th>Name</th>
//       <th>City</th>
//     </tr>
//   </thead>
//   <body>
//     ${[
//       { name: "John",  city: "Karachi" },
//       { name: "Jane",  city: "Lahore" },
//       { name: "Newton",  city: "Islamaad" }
//     ]
//       .map(
//         (person) => `
//       <tr>
//         <td>${person.name}</td>
//         <td>${person.city}</td>
//       </tr>
//     `
//       )
//       .join('')}
//   </body>
// </table>
// `;
// console.log(tableHTML)

                // Answer 19
                // Simple Condition:
// let age = prompt("enter your age")
// let result =age >= 18 ? "Yes allow" :" Not allow"
// console.log(result);

                // Answer 20
                // Even or Odd:
// let number = prompt("Enter a number");
// let evenOdd = number % 2 === 0 ? "Even" : "Odd";
// console.log(evenOdd);

                // Answer 21
                // Grade Evaluation:
// let score = prompt("Enter your persentage"); 
// let grade = score >= 90 ? "A" :
//         score >= 80 ? "B" :
//         score >= 70 ? "C" :
//         score >= 60 ? "D" : "F"
// console.log(grade);

                // Answer 22
                // Login Status:
// let loggedIn = false;
// let statusMessage = loggedIn ? "Welcome back!" : "Please log in";
// console.log(statusMessage);

                // Answer 23
                // Discount Eligibility:
// let isMember = true;
// let Amount = 220;
// let discount = (isMember && Amount > 100) ? Amount * 0.1 : 0;
// console.log(discount);

                // Answer 24
                // Determine Max Value:
// function maxValue(a, b) {
//       return a > b ? a : b;
// }
// let result = maxValue(30, 20);
// console.log(result); 

                // Answer 25
                // Greeting Message:
// function greet(name = "") {
//     return name ? `Hello, ${name}!` : "Hello, guest!";
// }
// let message1 = greet("Alice");
// console.log(message1);

// let message2 = greet();
// console.log(message2); 

                // Answer 26
                // Mapping Values:
// let numbers = [1, 2,` 3, 4, 5, 6, 7, 8];
// let newNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);
// console.log(newNumbers);`

                // Answer 27
                // Filtering Values:
// let strings = ["apple", "banana" , "ornge" , "carrots" , "mango"];
// let longStrings = strings.filter(str => str.length > 4 ? true : false);
// console.log(longStrings);

                // Answer 28
                // Copying an Array:
// let originalArray = [1, 2, 3, 4, 5];
// let copiedArray = [...originalArray];
// console.log(originalArray);
// console.log(copiedArray);


// console.log("Are they the same reference?", originalArray === copiedArray);

                // Answer 29
                // Merging Arrays:
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = [...array1, ...array2];
// console.log(mergedArray);

                // Answer 30
                // Adding Elements to an Array:
// let numbers = [2, 3, 4];
// let updateNumbers = [1, ...numbers, 5];
// console.log(updateNumbers);

                // Answer 31
                // Copying an Object:
// let originalObject = { name: "John", age: 20, job: "Developer" };
// let copiedObject = { ...originalObject };
// console.log(originalObject)
// console.log(copiedObject);
// console.log("Are they the same reference?", originalObject === copiedObject);

                // Answer 32
                // Merging Objects:
// let object1 = { name: "Alice", age: 30, job: "Engineer" };
// let object2 = { age: 35, job: "Designer", country: "Pakistan" };

// let mergedObject = { ...object1, ...object2 };
// console.log(mergedObject);

                // Answer 33
                // Updating Object Properties:
// let user = {
//     name: "John Doe",
//     age: 25,
//     email: "johndoe@example.com"
// };          
// let updatedUser = {
//     ...user, 
//     email: "john.doe@newdomain.com",
//     address:"FB-area karachi"
// };
//   console.log(updatedUser);
  
                // Answer 34
                // Passing Array Elements as Arguments:
// function sum(a, b, c) {
//     return a + b + c;
// }
// let numbers = [15, 10, 15];
// let result = sum(...numbers);
// console.log(result);

                // Answer 35
                // Combining Multiple Arrays:
// function combineArrays(...arrays) {
//     return [].concat(...arrays);
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];

// let combinedArray = combineArrays(array1, array2, array3);
// console.log(combinedArray);

                // Answer 36
                // Rest Parameter with Spread Operator:
// function multiply(number, ...args) {
//     return args.map(arg => arg * number);
// }
// let result = multiply(2, 3, 4, 5, 6);
// console.log(result);

                // Answer 37
                // Spread Operator with Nested Structures:
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let copiedArray = [...nestedArray];
// copiedArray[0][0] = 10;  
// copiedArray[1][1] = 20;
// console.log(nestedArray);
// console.log(copiedArray);

                // Answer 38
                // Sum Function:
// function sum(...args) {
//     return args.reduce((total, current) => total + current, 0);
//   }
  
//   console.log(sum(1, 2, 3)); 
//   console.log(sum(5, 10, 15, 20));  
//   console.log(sum(7));  
//   console.log(sum());    

                // Answer 39
                // Average Function:
// function average(...args) {
//     if (args.length === 0) return NaN;
  
//     let sum = args.reduce((total, current) => total + current, 0);
//     return sum / args.length;
//   }
//   console.log(average(1, 2, 3));      
//   console.log(average(5, 10, 15, 20)); 
//   console.log(average(7));             
//   console.log(average());     

                // Answer 40
                // First and Rest:
// let numbers = [1, 2, 3, 4, 5];

// let [first, ...rest] = numbers;

// console.log("First:", first); 
// console.log("Rest:", rest);   

                // Answer 41
                // Skip and Rest:
// let colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple'];

// let [, , ...remainingColors] = colors;  
// console.log(remainingColors);

                // Answer 42
                // Basic Destructuring:
// let person = {
//     name: 'John Doe',
//     age: 30,
//     email: 'johndoe@example.com',
//     address: '123 Main St, Anytown, USA'
//  }; 
// let { name, email, ...rest } = person;
// console.log(name);
// console.log(email);
// console.log(rest);

                // Answer 43
                // Nested Destructuring:
// let student = {
//     id: 1,
//     name: 'Alice',
//     grades: [90, 85, 88],
//     info: {
//       age: 22,
//       major: 'Computer Science'
//     }
// };
// let { id, name, info: { major }, ...rest } = student;
// console.log('ID:', id);             
// console.log('Major:', major);   
// console.log('Rest:', rest);

                // Answer 44
                // Filter Even Numbers:
// function filterEven(...args) {
//     return args.filter(num => num % 2 === 0);
// }   
// console.log(filterEven(1, 2, 3, 4, 5, 6)); 
// console.log(filterEven(7, 8, 9, 10));       
// console.log(filterEven(11, 13, 15));       
// console.log(filterEven(0, 2, 4, 6, 8));       

                // Answer 45
                // Combine and Sort Arrays:

// function combineAndSort(...arrays) {
//     return [].concat(...arrays).sort((a, b) => a - b);
// }
// console.log(combineAndSort([1, 5, 3], [2, 8], [4, 7]));  
// console.log(combineAndSort([10, 15, 20], [5, 25], [30])); 
// console.log(combineAndSort([30, 25], [35, 10], [20]));    
// console.log(combineAndSort([2, 3], [1, 4]));

                // Answer 46
                // Basic Destructuring:
// let fruits = ["apple", "banana", "cherry"];
// let [firstFruit, secondFruit, thirdFruit] = fruits;
// console.log('First Fruit:', firstFruit);   
// console.log('Second Fruit:', secondFruit); 
// console.log('Third Fruit:', thirdFruit); 

                // Answer 47
//                 // Skipping Elements:
// let colors = ["red", "green", "blue", "yellow"];
// let [primaryColor, , tertiaryColor] = colors;
// console.log('Primary Color:', primaryColor);  
// console.log('Tertiary Color:', tertiaryColor);

                // Answer 48
                // Rest Operator:
// let numbers = [1, 2, 3, 4, 5];
// let [firstNumber, ...remainingNumbers] = numbers;
// console.log('First Number:', firstNumber);  
// console.log('Remaining Numbers:', remainingNumbers)

                // Answer 49
                // Basic Destructuring:
// let person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// };
// let { name, age, city } = person;
// console.log('Name:', name);
// console.log('Age:', age);
// console.log('City:', city);                  

                // Answer 50
                // Renaming Variables:
// let car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
  
// let { make: carMake, model: carModel, year: carYear } = car;
// console.log('Car Make:', carMake);  // Output: Car Make: Toyota
// console.log('Car Model:', carModel); // Output: Car Model: Corolla
// console.log('Car Year:', carYear); 

                // Answer 51
                // Default Values:
// let settings = {
//     theme: "light"
// };
                  
// let { theme, language = "English" } = settings;
                  
// console.log('Theme:', theme);       
// console.log('Language:', language);

                // Answer 52
                // Array of Arrays:
// let nestedArray = [[1, 2], [3, 4], [5, 6]];
// let [[a], [b], [c]] = nestedArray;
// console.log('a:', a);
// console.log('b:', b);
// console.log('c:', c);

              // Answer 53
              // Object within an Object:
// let profile = {
//     username: "john_doe",
//     details: {
//       email: "john.doe@gmail.com",
//       address: "123 Main St, Springfield"
//     }
// };
// let { username, details: { email, address } } = profile;
// console.log('Username:', username);  
// console.log('Email:', email);       
// console.log('Address:', address);

              // Answer 54
              // Mix of Arrays and Objects:
// const data = {
//   id: 1,
//   info: [
//     { name: "Alice" },
//     {age: 25 }
//   ]
// };
// const {
//   id,
//   info: [{ name }, { age }]
// } = data;
// console.log(id);   
// console.log(name); 
// console.log(age);

              // Answer 55
              // Array Parameters:
// function printCoordinates([x, y]) {
//   console.log(`x: ${x}, y: ${y}`);
// }
// printCoordinates([5, 10]);  
// printCoordinates([2, 3]);  
// printCoordinates([8, 12]); 

              // Answer 56
              // Object Parameters:
// function displayUser({ name, age }) {
//   console.log(`Name: ${name}, Age: ${age}`);
// }

// displayUser({ name: "Alice", age: 30 }); 
// displayUser({ name: "Bob", age: 25 });    
// displayUser({ name: "Charlie", age: 35 });

              // Answer 57
              // List Property Names:
// const book = {
//   title: "fun",
//   author: "Lee",
//   year: 1960
// };

// const keys = Object.keys(book);

// console.log(keys);

              // Answer 58
              // Count Properties:
// const student = {
//   name: "John Doe",
//   age: 16,
//   grade: "11th",
//   school: "Greenwood High"
// };

// const keys = Object.keys(student);
// const numberOfProperties = keys.length;
// console.log(numberOfProperties);

              // Answer 59
              // Iterate Over Keys:
// const product = {
//   name: "Laptop",
//   price: 30000,
//   category: "Electronics"
// };
// const keys = Object.keys(product);
// keys.forEach(key => {
//   console.log(`${key}: ${product[key]}`);
// });

              // Answer 60
              // List Property Values:
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
//   genre: "Sci-Fi"
// };
// const values = Object.values(movie);
// console.log(values);

              // Answer 61
              // Sum Values:
// const scores = {
//   math: 85,
//   science: 92,
//   english: 78
// };
// const values = Object.values(scores);
// const totalSum = values.reduce((sum, value) => sum + value, 0);
// console.log(totalSum);

              // Answer 62
              // Iterate Over Values:
// const user = {
//   username: "johndoe123",
//   email: "johndoe@gmil.com",
//   location: "New York"
// };

// const values = Object.values(user);
// values.forEach(value => {
//   console.log(value);
// });

              // Answer 63
              // List Entries:
// let car = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2020
// };
// let entries = Object.entries(car);
// console.log(entries);

              // Answer 64
              // Convert Object to Array:

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };
// let entries = Object.entries(person);
// console.log(entries);

              // Answer 65
              // Iterate Over Entries:
// let settings = {
//   theme: "dark",
//   notifications: true,
//   privacy: "high"
// };
// let entries = Object.entries(settings);
// entries.forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// });

              // Answer 66
              // Filter Keys:
// let inventory = {
//   apples: 15,
//   bananas: 8,
//   oranges: 12,
//   grapes: 5
// };
// let moreThan10 = Object.keys(inventory).filter(key => inventory[key] > 10);
// console.log(moreThan10);

              // Answer 67
              // Transform Values:
// let temperatures = {
//   morning: 15,    
//   afternoon: 22,  
//   evening: 18     
// };
// let fahreTemperatures = Object.entries(temperatures).map(([timeOfDay, tempInCelsius]) => {
//   let tempInFahrenheit = (tempInCelsius * 9/5) + 32; 
//   return [timeOfDay, tempInFahrenheit]; 
// });
// let temperaturesInFahrenheit = Object.fromEntries(fahreTemperatures);
// console.log(temperaturesInFahrenheit);

              // Answer 68
              // Key-Value Swap:
// let roles = {
//   admin: "Administrator",
//   editor: "Editor",
//   viewer: "Viewer"
// };
// let swappedRoles = Object.entries(roles).map(([key, value]) => {
//   return [value, key];
// });
// let swappedRolesObject = Object.fromEntries(swappedRoles);
// console.log(swappedRolesObject);

              // Answer 69
              // Filter and Map:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function filterAndMap(array, filterFn, mapFn) {
//   return array.filter(filterFn).map(mapFn);
// }
// let result = filterAndMap(numbers, num => num % 2 !== 0, num => num * num);
// console.log(result);

              // Answer 70
              // Sort and Reduce:
// let words = ["apple", "banana", "cherry", "date"];
// function sortAndReduce(array, sortFn, reduceFn) {
//   return array.sort(sortFn).reduce(reduceFn);
// }
// let result = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, word) => acc + word);
// console.log(result);

              // Answer 71
              // Simple Callback:
// function greet(name, callback) {
// let message = `Hello, ${name}!`;  
// callback(message);  
// }        
// function printGreeting(message) {
//   console.log(message);
// }
// greet("Alice", printGreeting);  

              // Answer 72
              // Asynchronous Callback:
// function fetchData(callback) {
//   setTimeout(() => {
//     let data = "Fetched data from server";  
//     callback(data);  
//   }, 2000); 
// }
// function displayData(data) {
//   console.log(data);
// }

// fetchData(displayData);

              // Answer 73
              // Simple Arrow Function:
// let add = (a, b) => a + b;
// console.log(add(3, 5));

              // Answer 74
              // Arrow Function with Array Methods:
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

              // Answer 75
              // Variable Scope:
// function outer() {
//   let x = 10; 
//   function inner() {
//     console.log(x);
// }
//   inner();
// }  
// outer();

              // Answer 76
              // Closure:
// function createCounter() {
//   let counter = 0;  
//   return function() {
//     counter++;  
//     console.log(counter); 
//   };
// }
// let counter1 = createCounter();
// let counter2 = createCounter();

// counter1();
// counter1();  
// counter2();  
// counter2();  
// counter1();  
// counter2(); 

              // Answer 77
              // Simple Default Parameters:
// function greet(name, greeting = "Hello") {
//   console.log(`${greeting}, ${name}!`); 
// }
// greet("Alice");      
// greet("Bob", "Hi"); 

              // Answer 78
              // Default Parameters with Other Arguments:
// function calculateArea(width = 10, height = 5) {
//  return width * height; 
// }
// console.log(calculateArea());
// console.log(calculateArea(20, 15)); 

              // Answer 79
//               // Square Numbers:
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

              // Answer 80
              // Convert to Uppercase:
// let words = ["apple", "banana", "cherry"];
// let uppercaseWords = words.map(word => word.toUpperCase());
// console.log(uppercaseWords);

              // Answer 81
              // Filter Even Numbers:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

              // Answer 82
              // Filter Long Words:
// let words = ["apple", "banana", "cherry", "date"];
// let longWords = words.filter(word => word.length > 5);
// console.log(longWords);

              // Answer 83
              // Log Numbers:
// let numbers = [1, 2, 3, 4, 5]
// numbers.forEach(num => console.log(num));

              // Answer 84
              // Log Word Lengths:
// let words = ["apple", "banana", "cherry"];
// words.forEach(words => console.log(words));

              // Answer 85
              // Sum of Numbers:
// let  numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

              // Answer 86
              // Concatenate Strings:
// let  words = ["Hello", "world", "this", "is", "JavaScript"];
// let  sentence = words.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
// console.log(sentence);

              // Answer 87
              // Check for Even Number:
// let numbers = [1, 3, 5, 7, 8];
// let hasEvenNumber = numbers.some(num => num % 2 === 0);
// console.log(hasEvenNumber);

              // Answer 88
              // Check for Long Word:
// let  words = ["apple", "banana", "cherry", "date"];              
// let hasLongWord = words.some(word => word.length > 5);
// console.log(hasLongWord);

              // Answer 89
              // Check All Even Numbers:
// let numbers = [2, 4, 6, 8, 10];
// let allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);

              // Answer 90
              // Check All Long Words:
// let words = ["elephant", "giraffe", "hippopotamus"];
// let  allLongWords = words.every(word => word.length > 5);
// console.log(allLongWords);

              // Answer 91
              // Find First Even Number:
// let numbers = [1, 3, 5, 7, 8];
// let firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven);

              // Answer 92
              // Find Long Word:
// let  words = ["apple", "banana", "cherry", "date"];
// let firstLongWord = words.find(word => word.length > 5);
// console.log(firstLongWord);

              // Answer 93
              // Find Index of First Even Number:
// let numbers = [1, 3, 5, 7, 8];
// let  firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
// console.log(firstEvenIndex);

              // Answer 94
              // Find Index of Long Word:
// let words = ["apple", "banana", "cherry", "date"];
// let firstLongWordIndex = words.findIndex(word => word.length > 5);
// console.log(firstLongWordIndex);

              // Answer 95
              // Simple Promise:
// function delay(ms) {
  // return new Promise(resolve => {
//     setTimeout(resolve, ms);
//   });
// }
// delay(2000).then(() => {
//   console.log("Hello, world!");
// });

              // Answer 96
              // Promise Chain:
// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       const data = { name: "John", age: 30 };
//       resolve(data);
//     }, 1000); 
//   });
// }
// fetchData().then(data => {
//   console.log(data); 
// });

              // Answer 97
              // Error Handling:
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     const userData = { name: "John" }; 
//     if (!userData.age) {
//       reject(new Error("User data is missing the 'age' property"));
//     } else {
//       resolve(userData); 
//     }
//   });
// }

// fetchUserData()
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(error => {
//     console.log("Error:", error.message); 
//   });

              // Answer 98
              // Simulate Network Request:
// function getWeather() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const isSuccess = Math.random() > 0.5; 

//       if (isSuccess) {
//         const weatherData = {
//           temperature: 22,
//           condition: "Sunny",
//           location: "New York"
//         };
//         resolve(weatherData);
//       } else {
//         reject(new Error("Failed to fetch weather data"));
//       }
//     }, 1000); 
//   });
// }

// getWeather()
//   .then(data => {
//     console.log("Weather Data:", data);  
//   })
//   .catch(error => {
//     console.log("Error:", error.message);  
//   });

              // Answer 99
              // Simple async Function:
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function sayHello() {
//   await delay(2000); 
//   console.log("Hello, world!"); 
// }
// sayHello()

              // Answer 100
              // Fetch Data with async/await:
// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     const userData = { name: "John" }; // Missing 'age' property

//     if (!userData.age) {
//       reject(new Error("User data is missing the 'age' property"));
//     } else {
//       resolve(userData);
//     }
//   });
// }      
// async function getUserData() {
//   try {
//     const data = await fetchUserData(); 
//     console.log("User Data:", data);
//   } catch (error) {
//     console.log("Error:", error.message);
// }
// }

// getUserData();     

              // Answer 101
              // Fetch and Process Data:
// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const userData = { name: "John", age: 30 }; 
//       resolve(userData);
//     }, 1000); 
//   });
// }           
// function fetchPosts(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const posts = [
//         { title: "Post 1", content: "This is post 1 by " + user.name },
//         { title: "Post 2", content: "This is post 2 by " + user.name }
//       ]; 
//       resolve(posts);
//     }, 1000); 
//   });
// }
// async function getUserAndPosts() {
//   try {
//     const user = await fetchUser(); 
//     console.log("User Data:", user);

//     const posts = await fetchPosts(user)
//     console.log("User Posts:", posts);
//   } catch (error) {
//     console.error("Error:", error.message)
//   }
// }
// getUserAndPosts();

              // Answer 102
              // Simulate API Calls:
// function apiCall() {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random() * 2000 + 1000; 

//     setTimeout(() => {
//       const success = Math.random() > 0.2;
//       if (success) {
//         resolve(`Data received after ${Math.round(delay)} ms`);
//       } else {
//         reject("API call failed");
//       }
//     }, delay);
//   });
// }             
// async function getData() {
//   try {
//     const result1 = await apiCall(); 
//     console.log(result1); 

//     const result2 = await apiCall(); 
//     console.log(result2); 

//     const result3 = await apiCall(); 
//     console.log(result3); 

//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getData();











              















        







































                 




