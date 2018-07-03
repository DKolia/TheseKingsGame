// To do:
// 1. Make randomizer that draws 3 kings
// 2. Make questions out of those 3 kings
// 3. Pull first 5 questions from that array
// 4. Make quiz
// 5. Make jQuery push things
// 6. Make end game script

console.log("JS is working");


//  This reaches into an array, displays a random background, applies styling, and runs on read of JS file
function backgroundImages() {
  const images = ["Background1.jpg", "Background2.jpg", "Background3.jpg", "Background4.jpg", "Background5.jpg", "Background6.jpg",];
  $('#backgroundImage').css({
    background:
    "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0, 0.4))" + "," + "url(images/backgrounds/" + images[Math.floor(Math.random() * images.length)] + ")"
  });
}
backgroundImages()


//  This is working
function gameStart() {
  userScore = 0
  roundNumber = 1
  console.log("Starting the game!");
  console.log("The current score is " + userScore);
  console.log("The current round is " + roundNumber);
}

//  Checks if user scored a point or not, advances round
function checkScore() {
  userScore++
  console.log("Congrats! They are the correct King.");
  console.log("Current score: " + userScore);
  roundNumber++
  if (roundNumber < 6 ) {
  console.log("Now beginning round " + roundNumber + ".");
  }
  gameEnd();
}

//  Checks if user has completed 5 rounds, if they have won the game, or needs to try again
function gameEnd() {
  if (roundNumber === 6) {
    if (userScore === 4.5 || userScore === 5) {
      console.log("You've Won! (Game over)");
      console.log("Final score: " + userScore + ".");
    } else {
      console.log("Try again... (Game over)");
      console.log("Final score: " + userScore + ".");
    }
  }
}

//  This randomly chooses 1-4 with no duplicates and logs numbers
function drawKings() {
  drawnKingA = Math.floor(Math.random() * 4) + 1;
  drawnKingB = Math.floor(Math.random() * 4) + 1;
  drawnKingC = Math.floor(Math.random() * 4) + 1;
  if (drawnKingA !== drawnKingB && drawnKingA !== drawnKingC && drawnKingB !== drawnKingC) {
    // console.log(drawnKingA + " " + drawnKingB + " " + drawnKingC);
  } else {
    drawKings()
  }
}

//  These take the number and assigns the kings
function drawKingA() {
  if (drawnKingA === 1) {
    drawnKingA = king1
    } else if (drawnKingA === 2) {
      drawnKingA = king2
    } else if (drawnKingA === 3) {
      drawnKingA = king3
    } else if (drawnKingA === 4) {
      drawnKingA = king4
    }
  // console.log(drawnKingA);
}
function drawKingB() {
  if (drawnKingB === 1) {
    drawnKingB = king1
  } else if (drawnKingB === 2) {
      drawnKingB = king2
    } else if (drawnKingB === 3) {
      drawnKingB = king3
    } else if (drawnKingB === 4) {
      drawnKingB = king4
    }
  // console.log(drawnKingB);
}
function drawKingC() {
  if (drawnKingC === 1) {
    drawnKingC = king1
  } else if (drawnKingC === 2) {
      drawnKingC = king2
    } else if (drawnKingC === 3) {
      drawnKingC = king3
    } else if (drawnKingC === 4) {
      drawnKingC = king4
    }
  // console.log(drawnKingC);
}


function revealKings() {
  drawKingA();
  drawKingB();
  drawKingC();
  console.log("The Kings in play are: " + drawnKingA.name + ", " + drawnKingB.name + ", " + drawnKingC.name + ".");
}



//  These are the kings and their stats
const king1 = {
  name: "Ashurnasirpal II",
  era: "Neo-Assyrian Era",
  number: 1,
  questions: ["1","2","3","4","5","6","7"]
}
const king2 = {
  name: "Tiglath-Pileser III",
  era: "Neo-Assyrian Era",
  number: 2,
  questions: ["8","9","10","11","12","13","14"]
}
const king3 = {
  name: "Sargon II",
  era: "Neo-Assyrian Era",
  number: 3,
  questions: ["15","16","17","18","19","20","21"]
}
const king4 = {
  name: "Ashurbanipal",
  era: "Neo-Assyrian Era",
  number: 4,
  questions: ["22","23","24","25","26","27","28"]
}












 // Start button
 // jQuery removes basic homepage elements
 // jQuery adds questionSlot
 // jQuery adds three random kings art, names, and answer buttons
 // Loads first question from array
 // Loads first answer value from question
 // Sets score = 0;
 // jQuery score to user
 //
 // Game question array = []
 // Game checks kingValue of button1
 // Game checks kingValue of button2
 // Game checks kingValue of button3
 // Game pushes questions to array.
 // If button.kingValue === GameQuestionValue, return true
 // else return false
 // if true, run score function



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




//  Score Structure Function
//  checkScore()
//  jQuery to user ("Correct, " + (answerValue.name) + " is the correct King.")
//  else, ("Incorrect. The correct king is " (answerValue.name)
//  load next question









// const game = {
//   //  Starts the game, establishes rounds, will be tied to button soon...
//   function gameStart {
//     userScore = 0
//     roundNumber = 1
//     console.log("Starting the game!");
//     console.log("The current score is " + userScore);
//     console.log("The current round is " + roundNumber);
//   }





//   properties
//    which king currently showing
//
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
