console.log("JS is working");


// let images = ["Background1.jpg", "Background2.jpg", "Background3.jpg", "Background4.jpg", "Background5.jpg", "Background6.jpg",];
// $('#backgroundImage').css('background': 'url(images/backgrounds' + images[Math.floor(Math.random() * images.length)] + ')');





//
//
// //  Start button
// //  jQuery removes basic homepage elements
// //  jQuery adds questionSlot
// //  jQuery adds three random kings art, names, and answer buttons
// //  Loads first question from array
// //  Loads first answer value from question
// //  Sets score = 0;
// //  jQuery score to user
//
// //  Game question array = []
// //  Game checks kingValue of button1
// //  Game checks kingValue of button2
// //  Game checks kingValue of button3
// //  Game pushes questions to array.
// //  If button.kingValue === GameQuestionValue, return true
// //  else return false
// //  if true, run score function
//
//
//
// //  These are the slots that the Kings slip into and become the answers
// // AnswerSlot1
// // Name:
// // Img:
// // Number:
// // Answer = Number
// // jQuery to populate
// //
// // AnswerSlot2
// // Name:
// // Img:
// // Number:
// // Answer = Number
// // jQuery to populate
// //
// // AnswerSlot3
// // Name:
// // Img:
// // Number:
// // Answer = Number
// // jQuery to populate
//
//
//
// //  These are the Kings and answers to their own questions
// // King1
// // Name: Ashurnasirpal II
// // Era: Neo-Assyrian Era
// // Number: 1
// // Img:
// // Questions: [1,2,3,4,5,6,7,8,9,10]
// //
// // King2
// // Name: Tiglath-Pileser III
// // Era: Neo-Assyrian Era
// // Number: 2
// // Img:
// // Questions: [11,12,13,14,15,16,17,18,19,20]
// //
// // King3
// // Name: Sargon II
// // Era: Neo-Assyrian Era
// // Number: 3
// // Img:
// // Questions: [21,22,23,24,25,26,27,28,29,30]
// //
// // King4
// // Name: Ashurbanipal
// // Era: Neo-Assyrian Era
// // Number: 4
// // Img:
// // Questions: [31,32,33,34,35,36,37,38,39,40]
//
//
//
// //  Hint Structure:
// //  On button click:
// //  Rand 1-3 King
// //  If answer = Number, pass
// //  if answer != number, fade to zero opacity
// //  reduce score by .5
//
// //  Or...
//
// //  If Answer = even,
// //  animate even numbers
// //  else, odd numbers
// //  reduce score by .5
//
//
//
// //  Score Structure Function
// //  checkScore()
// //  jQuery to user ("Correct, " + (answerValue.name) + " is the correct King.")
// //  else, ("Incorrect. The correct king is " (answerValue.name)
// //  load next question
//
//
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
//
// class King = {
//   // this.questions = questions
//   // this.name =
//   // this.era
//   // this.askedQuestions
//
//   // getRandomQuestion() {
//   //   // get a random q from this.questions
//     /// move that q to asked Questions
//   //    // return that question
//   // }
// }
// const ashurbanipal = new King([
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   },
//   {
//     q: "This guy really liked cheese"
//   }
//
// ])
//
//
// const game = {
  // properties
  //  which king currently showing
  //  userScore
  //  cuurentRound
  // askQuestion() {
    // choose a random king from the 3
    // choose a random question about that king
    // print it in html something like $('question').text(getRandomQuestion())
    // in that king's object, call some method that moves this question object into that king's askedQuestions array so that you can pick another question
  // }
  // checkAnswer(event? kingClicked?) {
    // this f will most likely be called by a listener
    // displayResult()
  // }
  // displayResult() {
    // either you got it or you didn't
    // prompt user to move one
  // }
  // nextQuestion() {
  //  manip data and call askQuestion()
  // }
// }





//  Prompt "You've worn!"
//  Add jQuery retry button
//  Else,
//  Prompt, "You came close, but need at least 4.5 out of 5 to win"
//  Add jQuery retry button
