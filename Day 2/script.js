/*
let age = prompt("Enter Age:")

if(age === null){
    console.log("You have not entered your age")
}else{
    if(age.trim() === ""){
        console.log("Please write something...")
    }else{
        age = Number(age);
        if(isNaN(age)){
            console.log("Please enter a number")
        }else{
            if(age >= 18){
                console.log("You are eligible to vote")
            }else{
                console.log("You are not eligible to vote")
            }
        }
    }
}
    
*/

const correct = "1234";
let attempts = 0;

while (attempts < 3) {
  let input = prompt("Enter the password:");
  if (input === correct) {
    console.log("You have entered the correct password");
    break;
  }
  attempts++;
}
if (attempts === 3) {
  console.log("Account Locked...");
}
