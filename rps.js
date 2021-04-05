const indextypedTextSpan = document.querySelector(".type");

const textArray = ["Rock - Paper - Scissors Online GameApp"];
const typigDelay = 100;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        indextypedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typigDelay);
    }
}
type();
//__________________________________________________________________________________________________________________________________________________
const array = ["rock", "paper", "scissors"];
var userChoice = null;
var us = 0;
var cs = 0;
var numele;
numele = prompt("What's your name?");
document.getElementById("userlabel").innerHTML = numele;
//__________________________________________________________________________________________________________________________________________________
function myfunction1(){
    userChoice = "rock"
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
}
    if(userChoice != null){
        var compare = function(choice1, choice2) {
            if(choice1 === choice2) {
                document.getElementById("ress").innerHTML = "It's a DRAW.";
            }
            if(choice2 === "scissors") {
                us++;
                document.getElementById("userscore").innerHTML = us;
                document.getElementById("ress").innerHTML = numele + " WON, rock crushes scissors."; 
            } else {
                if(choice2 === "paper"){
                cs++;
                document.getElementById("computerscore").innerHTML = cs;
                document.getElementById("ress").innerHTML = numele + " LOST, paper covers rock."; 
            }
        }
        }
        };
        console.log("User Choice: " + userChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log(compare(userChoice, computerChoice));}
//__________________________________________________________________________________________________________________________________________________
function myfunction2(){
    userChoice = "paper";
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
        if(userChoice != null){
            var compare = function(choice1, choice2) {
                if(choice1 === choice2) {
                    document.getElementById("ress").innerHTML = "It's a DRAW.";
            }
                if(choice2 === "rock") {
                    us++;
                    document.getElementById("userscore").innerHTML = us; 
                    document.getElementById("ress").innerHTML = numele + " WON, paper covers rock.";
                } else {
                    if(choice2 === "scissors") {
                        cs++;
                        document.getElementById("computerscore").innerHTML = cs;
                        document.getElementById("ress").innerHTML = numele + " LOST, scissors cuts paper."; 
                    }
            }
            }
            };
            console.log("User Choice: " + userChoice);
            console.log("Computer Choice: " + computerChoice);
            console.log(compare(userChoice, computerChoice));}
//__________________________________________________________________________________________________________________________________________________
    function myfunction3(){
        userChoice = "scissors";
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
        if(userChoice != null){
            var compare = function(choice1, choice2) {
                if(choice1 === choice2) {
                    document.getElementById("ress").innerHTML = "It's a DRAW.";
                }
                if(choice2 === "rock") {
                    cs++;
                    document.getElementById("computerscore").innerHTML = cs; 
                    document.getElementById("ress").innerHTML = numele + " LOST, rock crushes scissors.";
                } else {
                    if(choice2 === "paper") {
                        us++;
                        document.getElementById("userscore").innerHTML = us; 
                        document.getElementById("ress").innerHTML =  numele + " WON, scissors cuts paper.";
                    }
                }
            }
            };
            console.log("User Choice: " + userChoice);
            console.log("Computer Choice: " + computerChoice);
            console.log(compare(userChoice, computerChoice));}    
//__________________________________________________________________________________________________________________________________________________