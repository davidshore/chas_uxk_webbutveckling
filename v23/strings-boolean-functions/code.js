const inputElement = document.getElementById("age");

function checkAge() {
  const age = inputElement.value;

  // kan vara true eller false
  const isOver20 = age > 20; // age = 30 ger true

  const over20Text =
    "     Du är " + age + " år gammal. Du får gå på systemet    ";

  if (isOver20) {
    console.log(over20Text);
    console.log(over20Text.trim());
    console.log(over20Text.trim().toUpperCase());

    //alert(over20Text.trim().toUpperCase());
  } else {
    alert(`Du är ${age} år gammal. Du får inte gå på systemet`.toLowerCase());
  }
}

// Strängar

const s1 = "hej";
const s2 = "hej2";
const s3 = `hej3`;

const myName = "David";
console.log(`hej ${myName}`);

// Jämnförelser och boolean
const myAge = 45;
console.log("Age over 20: ", myAge > 20);
console.log("Age less than 20: ", myAge < 20);
console.log("Age less than or equal to 20: ", myAge <= 20);
console.log("Age over or equal to 20; ", myAge >= 20);
console.log("Age equal to 20; ", myAge == 20);
console.log("Age not equal to 20; ", myAge != 20);

// sätta ihop flera jämnförelser
console.log("Age more than 20 and less than 30", myAge > 20 && myAge < 30);

// funktioner
function checkMyAge(age) {
  return age > 20;
}

const result = checkMyAge(25);
const result2 = checkMyAge(35);
const result3 = checkMyAge(15);
console.log("function call result: ", result);
console.log("function call result3: ", result2);
console.log("function call result3: ", result3);

// arrow functions (funkar som functions)
const checkMyAgeAgain = (age) => {
  return age < 20;
};

const result4 = checkMyAgeAgain(25);
const result5 = checkMyAgeAgain(35);
const result6 = checkMyAgeAgain(15);
console.log("function call result4: ", result4);
console.log("function call result5: ", result5);
console.log("function call result6: ", result6);
