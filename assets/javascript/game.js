var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var userGuess = null;
    var letterToBeGuessed = availableLetters[Math.floor(Math.random() * availableLetters.length)];

    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

    document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if (guessesSoFar.indexOf(userGuess) < 0 && availableLetters.indexOf(userGuess) >= 0) {
            guessesSoFar[guessesSoFar.length] = userGuess;
            guessesLeft--;
        }

        if (letterToBeGuessed == userGuess) {
            wins++;
            alert("That's a win!!");
            guessesLeft = 9;
            guessesSoFar = [];
            letterToBeGuessed = availableLetters[Math.floor(Math.random() * availableLetters.length)];

            //For debugging
            console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
        }

        if (guessesLeft == 0) {
            losses++;
            alert("That's an L, Try Again!");
            guessesLeft = 9;
            guessesSoFar = [];
            letterToBeGuessed = availableLetters[Math.floor(Math.random() * availableLetters.length)];

            //For debugging
            console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
        }

        var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";

        document.querySelector("#game").innerHTML = html;

    }