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


//  Establishes Kings and their stats
class king {
  constructor(name, era, number, questions){
    this.name = name;
    this.era = era;
    this.number = number;
    this.questions = questions; // questions is an array
  }
}
// These are the Kings, instantiated
const k1 = new king("Ashurnasirpal II", "Neo-Assyrian Era", 1, [
  "Q1",
  "Q2",
  "Q3",
  "Q4",
  "Q5",
  "Q6",
  "Q7",
]);
const k2 = new king("Tiglath-Pileser III", "Neo-Assyrian Era", 2, [
  "Q8",
  "Q9",
  "Q10",
  "Q11",
  "Q12",
  "Q13",
  "Q14",
]);
const k3 = new king("Sargon II", "Neo-Assyrian Era", 3, [
  "Q15",
  "Q16",
  "Q17",
  "Q18",
  "Q19",
  "Q20",
  "Q21",
]);
const k4 = new king("Ashurbanipal", "Neo-Assyrian Era", 4, [
  "Q15",
  "Q16",
  "Q17",
  "Q18",
  "Q19",
  "Q20",
  "Q21",
]);

const game = {
  currentKing: null,
  kings: [k1, k2, k3, k4],
  kingsInPlay: [],

  //  Starts the game and runs below functions to set things up
  gameStart() {
    userScore = 0
    roundNumber = 1
    console.log("Starting the game!");
    console.log("The current score is " + userScore);
    console.log("The current round is " + roundNumber);
  },

  // This is a function that determines 3 of 4 random, unique kings for play
  randKings() {
    for (let i = 0; game.kingsInPlay.length < 3; i++) {   //  This loop determines random integers for index locations
      const randIndex = Math.floor(Math.random() * 4);
      if (game.kingsInPlay.includes(game.kings[randIndex])) {   // This determines whether or not the random integers are unqiue or not
          // Do nothing in this for loop
      } else {
        game.kingsInPlay.push(this.kings[randIndex]);   // This pushes the king associated with the random index into the kingsInPlay array
      }
    }
  },

  // Need to randomly draw a question
  getRandQuestion() {
    const randIndex = Math.floor(Math.random() * 3);  // This chooses a random king from array kingsInPlay
    console.log(randIndex);
    console.log(this.kingsInPlay[randIndex]);
    const questionIndex = Math.floor(Math.random() * 8);  // This randomly chooses a random kingsInPlay question index
    console.log(game.kingsInPlay[randIndex].questions[questionIndex]);
  },

  //  Checks if user scored a point or not, advances round
  checkScore() {
    userScore++
    console.log("Congrats! They are the correct King.");
    console.log("Current score: " + userScore);
    roundNumber++
    if (roundNumber < 6 ) {
      console.log("Now beginning round " + roundNumber + ".");
    }
    gameEnd();
  }
}






      // set up the listener references -- put the correct kings on the page (you can add an id like "0" with jQuery)



  // getQuestionAndAnswer() {


  //   // choose random king  rn bt 0 - 2 -- set current above -- so that you can check if the answer is correcrt -- this will change each time
  //
  //   // choose a random question from that king's array (using the getRandomQuestion method of the King class and print it
  //   // const q to show = whateverKingYouChoseAbove.getRandomQuestion()
  //   // jq qToShow onto the screen
  // },
  // checkUserChoice() {
  // }






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
    if (userScore === 5) {
      console.log("You've won These Kings with a perfect score of: 5 out of 5!");
    } else {
      console.log("You've answered " + userScore + " out of 5 questions correctly. Try again with a new set of These Kings and questions.");
    }
  }
}









//  To Do //////////////////////////////////////////////////////////////////////
//  Set up Start Game function
//  Set up Check Score function
//  Set up Game End function
//  Log Kings and Questions
//  Set Up Round Counter
//  Set Up Score Counter
