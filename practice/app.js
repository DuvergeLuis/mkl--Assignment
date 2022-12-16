//  var numbers = [0,1,2,3,4,5,6,7,8,9]
//  const fruit = ["banana", "orange", "apple", "kiwi"]

// for(var i = 0; i <numbers.length; i++){
//     console.log(numbers[i])
// }



//  for(var i = 0; i < fruit.length; i++){
//      console.log(fruit[i])
//  }

// for(var i = numbers.length -1; i>= 0; i--){
//     console.log(numbers[i])
// }

// for(var i = 0; i < 100; i++){
//     console.log[i] % 2  == 0 

// }
// function factorialize(num) {
//     let arr = [];
//   for (let i = 0;i <= num ; i++){
//   arr.push[i]
  
//   }
//   return arr;
//   }


// 1. Remove the last item from the vegetable array.
// 2. Remove the first item from the fruit array.
// 3. Find the index of "orange."
// 4. Add that number to the end of the fruit array.
// 5. Use the length property to find the length of the vegetable array.
// 6. Add that number to the end of the vegetable array.
// 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// 8. Remove 2 elements from your new array starting at index 4 with one method.
// 9. Reverse your array.
// 10. Turn the array into a string and return it.

//  var fruit = ["banana", "apple", "orange", "watermelon"];
//   console.log(fruit)
//  var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
//   console.log(vegetables)

// fruit.shift()
//  console.log(fruit)
// vegetables.pop()
// console.log (vegetables)

// var index = fruit.indexOf("orange");
// // console.log(index)

// var newFruit = fruit.push(1)
//  console.log(newFruit)
// var length = vegetables.length
// console.log(length)
// var newVegetables = vegetables.push(3)
// /console.log(newVegetables)
//   var newArr = colors1.concat(colors2)
//   console.log(newArr)
//    var food =  fruit.concat(vegetables)
     

   

//  var removed = food.splice(4, 2)
//  food.reverse()
//  food.toString
//  console.log(food)

// var name = "hello wolrd"
//  var  uppercasedHelloWorld = name.toUpperCase()
//  console.log(uppercasedHelloWorld)

//  var lowercasedhelloworld = name .toLowerCase()
//  console.log(lowercasedhelloworld)

// function Car (year, make, model) {
//     // use the "this" keyword to reference each object
//     // that is created from this constructor
//     this.year = year;
//     this.make = make;
//     this.model = model;
// }

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

// var myTacoma = new Car(2015, "Toyota", "Tacoma");


//     var employees = []
//     console.log(employees)


//  function Employee( name, job, salary,status){
//     this.name = name; 
//      this.job = job ;
//      this.salary = salary;
//      this.currentStatus = status;
//      this.status = function(){
//         console.log(this.currentStatus)

//         this.pushEmployees = function(){
//         employees.push(this)
//      }
//     }
   
//     var Jason = new Employee( "Jason","floorteck", "$30/hr", "contract")

//     var Kim = new Employee("Kim" ,"housekeeper","$40/hr", "part-time" )

//     var Angela = new Employee("Angela","housekeeper","$45/hr","fulltime")

//  }this.speak = function printEmployeeForm() {
//    console.log(this.name, this.job, this.salary, this.status);
   
//    Jason.speak();
//    Kim.speak();
//    Angela.speak();
// }

//  var employees = [];

// function Employee(name, job, salary, status ){
//     this.name = name
//     this.job = job
//     this.salary = salary
//     this.status = status
//     //this.printEmployeeForm = function(){
//         //console.log(Employee())
// //}

// this.speak = function printEmployeeForm() {
//   console.log(this.name, this.job, this.salary, this.status);
// }

// }
// var roger = new Employee("Roger", "Chef", "$20/hour", "Status: Full Time" )
// var sally = new Employee("Sally", "Register", "$8/hour", "Status: Full Time")
// var kevin = new Employee("Kevin", "Manager", "$30/hour", "Status: Full Time")


// var roger = new Employee("Roger", "Chef", "$20/hour", "Status: Part Time")

// roger.speak();
// sally.speak();
// kevin.speak();

// employees.push(roger,sally,kevin)
// console.log(employees)



// 1 box color 1 
// 2,3,4,5 box willl be second color 
// ??6,7 are color 3 
// 8 is color 4
// 9 is color 5
// 768px above regular form 
//  bellow 768px  must look like apride flag 