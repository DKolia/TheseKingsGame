console.log("JS is working");


//  This reaches into an array and displays a random background, then applies styling
function backgroundImages() {
  const images = ["Background1.jpg", "Background2.jpg", "Background3.jpg", "Background4.jpg", "Background5.jpg", "Background6.jpg",];
  $('#backgroundImage').css({
    background:
    "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0, 0.4))" + "," + "url(images/backgrounds/" + images[Math.floor(Math.random() * images.length)] + ")"
  });
}
//  Runs the above on launch of JS file
backgroundImages()






//  Start button
//  jQuery removes basic homepage elements
//  jQuery adds questionSlot
//  jQuery adds three random kings art, names, and answer buttons
//  Loads first question from array
//  Loads first answer value from question
//  Sets score = 0;
//  jQuery score to user

//  Game question array = []
//  Game checks kingValue of button1
//  Game checks kingValue of button2
//  Game checks kingValue of button3
//  Game pushes questions to array.
//  If button.kingValue === GameQuestionValue, return true
//  else return false
//  if true, run score function



//  These are the slots that the Kings slip into and become the answers
// AnswerSlot1
// Name:
// Img:
// Number:
// Answer = Number
// jQuery to populate
//
// AnswerSlot2
// Name:
// Img:
// Number:
// Answer = Number
// jQuery to populate
//
// AnswerSlot3
// Name:
// Img:
// Number:
// Answer = Number
// jQuery to populate



// class King = {
  // this.questions = questions
  // this.name =
  // this.era =
  // this.askedQuestions = []

  // getRandomQuestion() {
  //   // get a random q from this.questions
    /// move that q to asked Questions
  //    // return that question
  // }
// }
// const k = new King("ash", "neo-assyrian", [
//   "asdfasdfasdf",
//   "asdfasdfasdfasdf",
// ])


//  These are the 4 available Kings
// kings = [king1, king2, king3, king4];
// kingsInPlay = [math.random integer 1-4, math.random integer 1-4, math.random integer 1-4, math.random integer 1-4,]
//
// questions = [king1.questions, king2.questions, king3.questions, king4.questions]
// questionsInPlay = [kingsInPlay[0], kingsInPlay[1], kingsInPlay[2]]



// const king1 = {
//   name: "Ashurnasirpal II",
//   era: "Neo-Assyrian Era",
//   number: 1,
//   // img: x,
//   questions: ["1","2","3","4","5","6","7"]
// }
//
// const king2
//   king2.name = "Tiglath-Pileser III";
//   king2.era = "Neo-Assyrian Era";
//   king2.number = 2;
//   // king2.img =
//   king2.questions = ["8","9","10","11","12","13","14"];
//
// const king3
//   king3.name = "Sargon II";
//   king3.era = "Neo-Assyrian Era";
//   king3.number = 3;
//   // king3.img =
//   king3.questions = ["15","16","17","18","19","20","21"];
//
// const king4
//   king4.name = "Ashurbanipal";
//   king4.era = "Neo-Assyrian Era";
//   king4.number = 4;
//   // king4.img:
//   king4.questions = ["22","23","24","25","26","27","28"];


//  Score Structure Function
//  checkScore()
//  jQuery to user ("Correct, " + (answerValue.name) + " is the correct King.")
//  else, ("Incorrect. The correct king is " (answerValue.name)
//  load next question


// //  Starts the game, establishes rounds, will be tied to button soon...
// function gameStart() {
//   userScore = 0
//   roundNumber = 1
//   console.log("Starting the game!");
// }
//
// //  Checks if user scored a point or not, advances round
// function checkScore() {
//   userScore++
//   console.log("Congrats! They are the correct King.");
//   console.log("Current score: " + userScore);
//   roundNumber++
//   if (roundNumber < 6 ) {
//   console.log("Now beginning round " + roundNumber + ".");
//   }
//   gameEnd();
// }
//
// //  Checks if user has completed 5 rounds, if they have won the game, or needs to try again
// function gameEnd() {
//   if (roundNumber === 6) {
//     if (userScore === 4.5 || userScore === 5) {
//       console.log("You've Won!");
//       console.log("Final score: " + userScore + ".");
//     } else {
//       console.log("Try again...");
//       console.log("Final score: " + userScore + ".");
//     }
//   }
// }




// const game = {
//   properties
//    which king currently showing
//    userScore
//    cuurentRound
//   askQuestion() {
//     choose a random king from the 3
//     choose a random question about that king
//     print it in html something like $('question').text(getRandomQuestion())
//     in that king's object, call some method that moves this question object into that king's askedQuestions array so that you can pick another question
//   }
//   checkAnswer(event? kingClicked?) {
//     this f will most likely be called by a listener
//     displayResult()
//   }
//   displayResult() {
//     either you got it or you did not
//     prompt user to move one
//   }
//   nextQuestion() {
//    manip data and call askQuestion()
//   }
// }





 // Prompt "You've worn!"
 // Add jQuery retry button
 // Else,
 // Prompt, "You came close, but need at least 4.5 out of 5 to win"
 // Add jQuery retry button




 //  Hint Structure:
 //  On button click:
 //  Rand 1-3 King
 //  If answer = Number, pass
 //  if answer != number, fade to zero opacity
 //  reduce score by .5

 //  Or...

 //  If Answer = even,
 //  animate even numbers
 //  else, odd numbers
 //  reduce score by .5
