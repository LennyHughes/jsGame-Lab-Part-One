/*
Set USer's health points to 40
Set Grant's health points to 10

set user's wins to 0
set winner to null


Prompt the user " Do you want to play?"
if yes then prompt the user to enter their name
 the game starts
  While user's wins != 3 OR user's health != 0
    if Grants health point > 0 AND user health point > 0
      decrease (1-2) points from User and Grant
      log users health score 
      log Grants health score
    else if Grants health point = 0
       users win++
    else if 
       set Grant as the winner



log winner


 */
let userName;
let userHealth = 40;
let grantHealth = 10;

let userWins = 0;
let winner;  

function decreaseBy() {
    let val = Math.floor(Math.random() * 2) + 1; 
    return val;
  }
  

let response = prompt("Do you want to play?");

if (['yes', 'Yes', 'YES', 'Yeah', 'yeah', 'y','Y'].indexOf(response) >= 0){
    userName = prompt("Great! What is your name?");


    while (userWins < 3 && userHealth > 0){
        
        grantHealth = grantHealth - decreaseBy();
        userHealth = userHealth - decreaseBy();
        console.log(`${userName} has ${userHealth} health left.`);
        console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);

        if (grantHealth <= 0 && userHealth > 0){
            userWins++;
            // console.log(`User Wins:${userWins}`);
            grantHealth = 10;
        } else if (grantHealth > 0 && userHealth <= 0) {
            winner = "Grant the Mighty Chicken";
            break;
        } else {winner = "No one";}
    }

    if (userWins === 3) {
        winner = userName;
    }
    console.log(`${winner} WINS the GAME!`);

}