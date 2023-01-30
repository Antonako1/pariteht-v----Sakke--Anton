


// const person = {
//     firstName: etunimi,
//     lastName : sukunimi,
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
// };
// person.askName();


// person.askName = function () {
//     etunimi = prompt("etunimi");
//     Object.defineProperty(person, "firstName", {writable: true})
//     sukunimi = prompt("sukunimi")
//     return etunimi, sukunimi;
// }

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");
  
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ". My mother is " + myMother.age + "."; 
  