//Game ready to go!//
$(document).ready(function(){

//Below function creates a random number between 19 and 120 as the player's number to match.//
var targetNumber = Math.floor(Math.random() * (120 - 19)) + 20;
	console.log("Number to be guessed: " + targetNumber);

//Below jQuery "injects" the targetNumber variable as text into the number-to-guess id in the HTML.//
$("#number-to-guess").text(targetNumber);

//Variables for each gem are assigned a random number between 1 and 12.//
var gemOne = Math.floor(Math.random() * 12 - 1) + 2;
	console.log("GemOne value: " + gemOne);
var gemTwo = Math.floor(Math.random() * 12 - 1) + 2;
	console.log("GemTwo value: " + gemTwo);
var gemThree = Math.floor(Math.random() * 12 - 1) + 2;
	console.log("GemThree value: " + gemThree);
var gemFour = Math.floor(Math.random() * 12 - 1) + 2;
	console.log("GemFour value: " + gemFour);

//Variables for counts to be tracks in the DOM.//
var numberCounter = 0;
var numberWins = 0;
var numberLosses = 0;

//Appending number of wins and losses to respective HTML ids.//
$("#wins").text(numberWins);
$("#losses").text(numberLosses);


//Reseting the game after a win or a loss.//
function reset(){
	targetNumber = Math.floor(Math.random() * (120 - 19)) + 2;
	console.log("New goal: " + targetNumber)
	$("#number-to-guess").text(targetNumber);

  	gemOne = Math.floor(Math.random() * 12 - 1) + 2;
  	gemTwo = Math.floor(Math.random() * 12 - 1) + 2;
  	gemThree = Math.floor(Math.random() * 12 - 1) + 2;
  	gemFour = Math.floor(Math.random() * 12 - 1) + 2;

  	numberCounter = 0;
      $('#counter').text(numberCounter);
      } 

//Function to set condition upon winning.  1 added to #wins (win counter) and reset game.//
function winning(){
console.log("You win!");
  numberWins++; 
  $('#wins').text(numberWins);
  reset();
}

//Function to set condition upon losing.  1 added to ##losses (loss counter) and reset game.//
function losing(){
console.log("You lose!");
  numberLosses++;
  $('#losses').text(numberLosses);
  reset();
}
//Setting up an on click function for each crystal that will add the random number assigned to total count.  Each function also sets up an if, else if statement to determine win/loss.//
 
//Crystal #1//
//Upong clicking crystal, numberCounter will have random value of gemOne added to it.//
  $('#crystal-one').on ('click', function(){
    numberCounter = numberCounter + gemOne;
        console.log(gemOne);
    	console.log("New total: = " + numberCounter);

    $('#counter').text(numberCounter); 

        if (numberCounter === targetNumber){
          winning();
        }
        else if ( numberCounter > targetNumber){
          losing();
        }   
  })

//Crystal #2//
//Upong clicking crystal, numberCounter will have random value of gemTwo added to it.//
   $('#crystal-two').on ('click', function(){
    numberCounter = numberCounter + gemTwo;
        console.log(gemTwo);
    	console.log("New total: = " + numberCounter);

    $('#counter').text(numberCounter); 


        if (numberCounter === targetNumber){
          winning();
        }
        else if ( numberCounter > targetNumber){
          losing();
        }   
  })

  //Crystal #3// 
  //Upong clicking crystal, numberCounter will have random value of gemThree added to it.//
   $('#crystal-three').on ('click', function(){
    numberCounter = numberCounter + gemThree;
        console.log(gemThree);
    	console.log("New total: = " + numberCounter);

    $('#counter').text(numberCounter); 


        if (numberCounter === targetNumber){
          winning();
        }
        else if ( numberCounter > targetNumber){
          losing();
        }   
  })

  //Crystal #4//
  //Upong clicking crystal, numberCounter will have random value of gemFour added to it.//
   $('#crystal-four').on ('click', function(){
    numberCounter = numberCounter + gemFour;
        console.log(gemFour);
    	console.log("New total: = " + numberCounter);

    $('#counter').text(numberCounter); 


        if (numberCounter === targetNumber){
          winning();
        }
        else if ( numberCounter > targetNumber){
          losing();
        }   


  });   
}); 






























