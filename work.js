// Constructors and Class Assignment
// Question1: (30 marks)
// You are working on a web application for a car rental company. They want 
// to keep track of their car inventory and rental information. Your task is to create a
//  JavaScript class or function constructor for representing cars in their inventory and 
// another one for representing rental information.

// Requirements:
// 1) Create a Car class or function constructor that has the following properties: 
// a. make (string): The make of the car, e.g., "Toyota".
// b. model (string): The model of the car, e.g., "Camry".
// c. year (number): The year the car was manufactured, e.g., 2020.
// d. isAvailable (boolean): Indicates if the car is currently available for rent.

// The Car class or function constructor should also have a method called toggleAvailability 
// that changes the isAvailable property to its opposite value (true to false, false to true)

// 2) Create a Rental class or function constructor that has the following properties: ● car (Car object):
//  The car that has been rented.

// ● renterName (string): The name of the person who rented the car. ● rentalStartDate (Date object): The 
// start date of the rental period. ● rentalEndDate (Date object): The end date of the rental period.

// The Rental class or function constructor should also have a method called calculateRentalDuration that returns 
// the rental duration in days.

// 3) Create an instance of the Car class or function constructor for a car in the inventory. Then, create an instance 
// of the Rental class or function constructor for a rental involving the car you created. Finally, calculate the rental 
// duration using the calculateRentalDuration method.


    
    

class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  
    toggleAvailability() {
      //  this.isAvailable = !this.isAvailable;
      if(this.isAvailable == true){
        return false;
      }else{
        return true;
      }
      }
    }
  
  
      class Rental extends Car{
        constructor(make, model, year, isAvailable, renterName, rentalStartDate, rentalEndDate) {
         super(make, model, year, isAvailable)
          this.renterName = renterName;
          this.rentalStartDate = rentalStartDate;
          this.rentalEndDate = rentalEndDate;
        }
      }
  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
  
    calculateRentalDuration() {
      const startTime = new Date(this.rentalStartDate);
      const endTime = new Date(this.rentalEndDate);
      const durationInMillseconds = endTime - startTime;
     return (durationInMillseconds / (24 * 60 * 60 * 1000)) | 0; // Converting to days
      // return durationInMillseconds
    }
  
  }
  
  const car = new Car("Toyota", "Camry", 2020, true);
  console.log(car)
  const rentalStartDate = new Date("2020-06-04");
  
  const rentalEndDate = new Date("2020-06-23");
  
  
  const rental = new Rental("Toyota","Camry", 2020,true, "Anne", rentalStartDate, rentalEndDate);
  console.log(rental);
  // const rental = new Rental(car, "Anne", rentalStartDate, rentalEndDate);
  // console.log(rental);
  
  const rentalDuration = rental.calculateRentalDuration();
  console.log("Rental duration:", rentalDuration, "days");
  
  // car.toggleAvailability();
  // rental.calculateRentalDuration();
  
  
  /************************using funtion constructor****************************************************************/
  
  /*
  
  function Car (make, model, year, isAvailable) {
     
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
     this.toggleAvailability= function() {
          this.isAvailable = !this.isAvailable;
        // if(this.isAvailable == true){
        //   return false;
        // }else{
        //   return true;
        // }
        }
      }
  
  
      function Rental(car, renterName, rentalStartDate, rentalEndDate) {
        
         this.car = car
          this.renterName = renterName;
          this.rentalStartDate = rentalStartDate;
          this.rentalEndDate = rentalEndDate;
  
        this.calculateRentalDuration= function () {
          const startTime = new Date(this.rentalStartDate);
          const endTime = new Date(this.rentalEndDate);
          const durationInMillseconds = endTime - startTime;
         return (durationInMillseconds / (24 * 60 * 60 * 1000)) | 0; // Converting to days
          // return durationInMillseconds
        }
      }
      
      const car = new Car("Toyota", "Camry", 2020, true);
  console.log(car)
  const rentalStartDate = new Date("2020-06-04");
  
  const rentalEndDate = new Date("2020-06-23");
  
  const rental = new Rental(car, "Anne", rentalStartDate, rentalEndDate);
  console.log(rental);
  
  const rentalDuration = rental.calculateRentalDuration();
  console.log("Rental duration:", rentalDuration, "days");
  
  car.toggleAvailability();
  rental.calculateRentalDuration();
      
  */
  // Question 2 : (20 Marks)
  // You are building a simple quiz app that contains multiple-choice questions. Your task is to create two JavaScript classes: Question and Quiz. The Question class will represent individual questions, and the Quiz class will manage a collection of questions and the user's progress.
  
  // 1. Create a Question class with the following properties:
  // ● text(string): The text of the question.
  // ● options(array): An array containing the multiple-choice options. 
  // ● correctAnswer(string): The correct answer to the question.
  // The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise.
  // 2. Create a Quiz class with the following properties:
  // ● questions(array):An array of Question objects.
  // ● currentQuestionIndex(number): The index of the current question in the questions array.
  // ● score(number): The user’s current score.
  // The Quiz class should have the following methods:
  // ● addQuestion: Takes a Question object as a parameter and adds it to the questions array.
  // ● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex.
  // ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of the Question class, and updates the score if the answer is correct.
  
  class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
  
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
  
  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    addQuestion(question) {
      this.questions.push(question);
    }
  
    nextQuestion() {
      this.currentQuestionIndex++;
    }
  
    submitAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (currentQuestion.checkAnswer(userAnswer)) {
        this.score++;
      }
    }
  }
  
  const quiz = new Quiz();
  
  const question = new Question(
    "What does E5 in Javascript contain?",
    ["constructor", "classes", "css", "html"],
    "constructor",
  );
  quiz.addQuestion(question);
  
  const userAnswer = "constructor";
  
  quiz.submitAnswer(userAnswer);
  
  console.log("Your score is:", quiz.score);
  /*
  // # Check for Armstrong Number: Write a function called is_armstrong that takes a number as input
  // # and returns True if it's an Armstrong number, False otherwise. Test it with different numbers.
  
  function isArmstrong(num) {
    const order = num.toString().length;
    let temp = num;
    let sum = 0;
    while (temp > 0) {
      let digit = temp % 10;
      sum += Math.pow(digit, order);
      temp = parseInt(temp / 10);
    }
    return num == sum;
  }
  console.log(isArmstrong(153));
  
  
  /* Reverse a String: Write a function called reverse_string
   that takes a string as input and returns the string reversed.
    Test it with different strings.
  
  
  
  
  
  
  
  
  /**count the occurences of letters in a string 
  function countLetters(array) {
    const letterCount = {};
  
    array.forEach(item => {
      if (typeof item === 'string') {
        // If the item is a string
        item.split('').forEach(letter => {
          letterCount[letter] = (letterCount[letter] || 0) + 1;
        });
      }
    });
  
    return letterCount;
  }
  
  // Example usage:
  const array = ['a', 'b', 'c', 'a', 'b', 'a'];
  const result = countLetters(array);
  console.log(result); // Output: { a: 3, b: 2, c: 1 }
  
  
  ////contact list
  class ContactList {
    constructor() {
        this.contacts = [];
    }
  
    addContact(name, number) {
        this.contacts.push({ name, number });
        console.log(`Contact added: ${name}, ${number}`);
    }
  
    removeContact(name) {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
        console.log(`Contact removed: ${name}`);
    }
  
    displayContacts() {
        console.log("Contact List:");
        this.contacts.forEach(contact => console.log(`${contact.name}, ${contact.number}`));
    }
  }
  
  // Example usage
  const contactList = new ContactList();
  contactList.addContact("John Doe", "1234567890");
  contactList.addContact("Jane Doe", "9876543210");
  contactList.displayContacts();
  contactList.removeContact("John Doe");
  contactList.displayContacts();
  
  
  
  
  /**Create a system that is known as weatherfocust and has a city temperatur name and description 
   *  be able to add a city on this  and printit out 
  
  class WeatherFocust {
    constructor(){
      this.city = [];
    }
    addCity(temp,name,city){
      this.city.push(temp,name,city)
      console.log(`addCity ${name} ${city} ${temp}`);
    }
  };
  
  const weather = new WeatherFocust();
  WeatherFocust.addCity(`Kitui`,`city`,23.8);*/
  
  
  /**write a program thet  retrieves the location of a nearby driver to the passengers location. */