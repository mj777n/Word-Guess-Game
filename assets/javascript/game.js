<script type="text/javascript">

  // Delcare variables to be used
var wins = 0;
var inAnswerArray = 0;
var guessesLeft = 10;
var numbRight = 0;
var answers=["beige","magenta","gold","silver","green","grey","violet","orange","pink","red","ivory","purple","indigo","yellow","blue","white","brown","black","tan","salmon","bone"];
var challenges=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var matchArray=[];
var lettersArray=[];
var secretWord=[""];
var hiddenWord=[];
var letter=" ";
var randomWord=[""];
var dupe = false;
document.getElementById("guesses-remaining").innerHTML=guessesLeft;

  // begin program //

// getRandomWord();
// Get random word and display dashes
hangman();
// make a funcion to "play again/else say goodbye"

// function getRandomWord() 
// { var answer = answers[Math.floor(Math.random() * answers.length)];
//   document.getElementById("random-word").innerHTML=answer;
//   randomWord=answer;
//   // display "Secret Word using dashes"
//   for (h=0; h < answer.length; h++)
//   {
//     hiddenWord[h] = "_";
//   }
//   document.getElementById("hidden-word").innerHTML=hiddenWord;
// }

// Run game   
function hangman()
{

  guessesLeft = 10;
  vmatchArray = [];
  lettersArray=[];
  secretWord=[""];
  hiddenWord=[""];
  letter=" ";
  match = false;
  randomWord=[""];
  var dupe = false;

  var answer = answers[Math.floor(Math.random() * answers.length)];
  // document.getElementById("random-word").innerHTML=answer;
  randomWord=answer;

  // display "Secret Word using dashes"
  for (h=0; h < answer.length; h++)
  {
    hiddenWord[h] = "_";
  }
  document.getElementById("hidden-word").innerHTML=hiddenWord.join("  ");
  // document.getElementById("guesses").innerHTML=lettersArray;

  // Get user keystroke entered
  document.onkeyup = function(event)
  {
    var letter = event.key;
    var dupe = false;
    document.getElementById ("outcome-1").innerHTML="** THE CATEGORY IS 'COLORS' **";   
    document.getElementById ("outcome-2").innerHTML="";
    // guessedArray.push(letter);
    console.log (letter);
  
    //   First, check letter for dupe
    for (d = 0; d < lettersArray.length; d++)
    {  
      if (letter === lettersArray[d])
      {      
        dupe=true;        
      }
    } // end For Loop/checking for dupe/if dupe set to true
//--------------------------------------------------
    if (dupe===false)  // this is a new "non-dupe" letter
    { 
      for (i=0; i < randomWord.length; i++)
      { 
        if (letter === randomWord[i])
        { // We have a match !!");
          numbRight ++;
          // if a match, push letter into both arrays
          // and show in display

          // lettersArray.push(letter);
          matchArray.push(letter);
          // console.log(matchArray);
          hiddenWord[i]=letter;
          document.getElementById("hidden-word").innerHTML=hiddenWord.join("  ");   
        }
      }  // end main For i Loop
    } 
    // action if a dupe - still push into letters guessed
    else 
    {
      alert("You've already selected this letter. You wasted a guess.");
      dupe = false;  //reset dupe 
      // lettersArray.push(letter);
    }  
    // end if-else statement (Dupe or Not?)
       
    guessesLeft --;  // Decrement number of guesses left
    lettersArray.push(letter);  // Push letter for either case (if dupe or not)
    document.getElementById("guesses").innerHTML=lettersArray;
    console.log(lettersArray);
    document.getElementById("guesses-remaining").innerHTML=guessesLeft;
    
    // check if all letters guessed
    // If true - you guessed the secret word
    if (matchArray.length === randomWord.length)
    // YOU WON!
    { 
      wins ++;   
      document.getElementById ("outcome-1").innerHTML="You got it! Nice job.";   
      document.getElementById ("outcome-2").innerHTML="The color was:  "+randomWord+".   Play again?";
      document.getElementById("wins").innerHTML=wins;
      // lettersArray = [];
      // docuement.getElementById("guesses").innerHTML=lettersArray;
      playAgain();          
    }      
    else if (guessesLeft === 0)
    { // YOU LOST!
      document.getElementById ("outcome-1").innerHTML="You lose. Your 10 guesses are up.";
      document.getElementById ("outcome-2").innerHTML="The color was:   "+randomWord+".   How about another try?";
      document.getElementById("guesses").innerHTML=lettersArray;
      playAgain();
    }
console.log("before end of key up function"); 
  } //end on keyup function  
}  //end hangman()


function resetGame()
{
  guessesLeft = 10;
  matchArray = [];
  matchArray.length = 0;
  lettersArray=[];
  lettersArray.length = 0;
  secretWord=[""];
  hiddenWord=[];
  letter=" ";
  match = false;
  randomWord=[""];
  dupe = false;
  document.getElementById("guesses").innerHTML=lettersArray;
  document.getElementById("guesses-remaining").innerHTML=guessesLeft;

}

function playAgain() 
{
  // var matchArray = [];
  // var lettersArray=[];
  // var randomWord=[""];
  // var hiddenWord=[];
  // lettersArray.length = 0;
  console.log("Inside playAgain");
    resetGame();
  
  // console.log("Returned from resetGame");
  // console.log(guessesLeft);
  console.log("Letters array "+lettersArray);
  console.log("Match array "+matchArray);
  console.log("Hidden word "+hiddenWord);
  console.log("Random word "+randomWord);
  // console.log("Random word "+randomWord);
  // getRandomWord();
  // console.log("Returned from getRandomWord");
  // console.log("This is the keystroke "+letter);
  // console.log("Returned from getRandomWord");
  hangman();
  // console.log("Returned from extra hangman");
}

</script>