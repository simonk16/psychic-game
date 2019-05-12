
var computerletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 9;
var guessletters = [];

document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerletters[Math.floor(Math.random() * computerletters.length)];

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    

   if (letters.indexOf(userGuess) > -1) {

       if (userGuess === computerGuess) {
           wins++;
           numGuesses = 9;
           guessletters = [];
       }

       if (userGuess != computerGuess) {
           numGuesses --;
           guessletters.push(userGuess);
       }

       if (numGuesses === 0) {

       numGuesses = 9;
       losses ++;
       guessletters = [];

       
   }

   var html = 
   "<h1>Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of:</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessletters.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};