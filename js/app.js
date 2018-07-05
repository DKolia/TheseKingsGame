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
  "Which of These Kings reigned from 884-859 BCE?",
  "Which of These Kings was hosted over 60,000 guests for a ten day festival?",
  "Which of These Kings was succeeded by his son, Shalmaneser III?",
  "Which of These Kings renovated Ashur, the capital at that time?",
  "Which of These Kings was known for his ruthlessness displays in conquered cities- preventing further rebellions?",
  "Which of These Kings rebuilt the city of Caleh, including a new Grand Palace?",
  "Which of These Kings founded the new city of Khalu and made it the capital?",
]);
const k2 = new king("Tiglath-Pileser III", "Neo-Assyrian Era", 2, [
  "Which of These Kings took their place on the throne in a palace coup?",
  "Which of These Kings had been born with the birthname of 'Pulu' or 'Paul'?",
  "Which of These Kings was at one time the provincial governer of Khalu?",
  "Which of These Kings deposed the then royal family and Ashur Nirari V?",
  "Which of These Kings drastically reduced the power of provincial leaders to prevent an uprising?",
  "Which of These Kings created the first truly professional(not only consisting of farmers or conscripts) army in history?",
  "Which of These Kings used a predecessor's policy of deportation to a new, grand scale to control the populace?",
]);
const k3 = new king("Sargon II", "Neo-Assyrian Era", 3, [
  "Which of These Kings was the founder of a dynasty that bore their name?",
  "Which of These Kings defeated the Babalonians in 718 BCE?",
  "Which of These Kings announced the construction of (and then named as the new capital) Dur-Sharrukin",
  "Which of These Kings launched a brief, successful military campaign against the Kingdom of Urartu?",
  "Which of These Kings personally lead his army in unfamiliar mountain warefare?",
  "Which of These Kings ruled Assyria at its peak wealth, strength, and size?",
  "Which of These Kings died in battle and were unable to have their body recovered?",
]);
const k4 = new king("Ashurbanipal", "Neo-Assyrian Era", 4, [
  "Which of These Kings was considered the last great King of Assyria?",
  "Which of These Kings's name translated roughly to 'God is the creator of an heir?'",
  "Which of These Kings expanded the Assyrian Empire to include Babalonia, Persia, Syria, and Egypt?",
  "Which of These Kings's death lead the Assyrian Empire to fall apart?",
  "Which of These Kings is known for their massive library they built in Nineveh?",
  "Which of These Kings is known to have multiple reliefs of them hunting a lion?",
  "Which of These Kings was able to read and write cuneiform tablets, often signing their own name?",
]);

const game = {  // Sets up the game including base variables, functions
  currentKing: null,
  kings: [k1, k2, k3, k4],
  kingsInPlay: [],
  questionsInPlay: [],
  answersInPlay: [],
  answerSubmitted: [],
  buttonAnswers: [],

  //  Starts the game and runs below functions to set things up
  gameStart() {
    userScore = 0
    roundNumber = 1
    console.log("Starting the game!");
    console.log("The current score is " + userScore);
    console.log("The current round is " + roundNumber);
    game.randKings();
    game.randQuestions();
  },

  // This is a function that determines 3 of 4 random, unique kings for play
  randKings() {
    for (let i = 0; game.kingsInPlay.length < 3; i++) {   //  This loop determines random integers for index locations
      const randIndex = Math.floor(Math.random() * 4);
      if (game.kingsInPlay.includes(game.kings[randIndex])) {   // This determines whether or not the random integers are unqiue or not
          // Do nothing in this for loopz
      } else {
        game.kingsInPlay.push(game.kings[randIndex]);   // This pushes the king associated with the random index into the kingsInPlay array
        // game.buttonAnswers.push(game.kings[randIndex]);
        game.buttonAnswers.push(this.randIndex);   // This pushes the king's index from kingsInPlay array to separate answer array
      }
    }
    console.log("Your Kings are: " + game.kingsInPlay[0].name + ", " + game.kingsInPlay[1].name + ", " + game.kingsInPlay[2].name);  // Logs the names of the three Kings chosen
  },

  // Pushes a randomly selected king's question into new array.
  randQuestions() {
    for (let i = 0; i < 5; i++) {  // Makes this function run 5 times
      const randIndex = Math.floor(Math.random() * 3);  // This chooses a random king from array kingsInPlay
      const questionIndex = Math.floor(Math.random() * 7);  // This randomly chooses a random kingsInPlay question index


      game.questionsInPlay.push(game.kingsInPlay[randIndex].questions[questionIndex]); // This pushes the randomly chosen question into questionsInPlay array
      game.answersInPlay.push(randIndex);   // This pushes the corresponding answers to the randomly drawn questions to answersInPlay
      // if (game.questionsInPlay.includes(game.kingsInPlay[randIndex].questions[questionIndex]) {
      //   // Do nothing
      // } else {

    }
    $(".introText").empty().append("Q1: " + game.questionsInPlay[0]);
    $(".introText").empty().append("Q2: " + game.questionsInPlay[1]);
    $(".introText").empty().append("Q3: " + game.questionsInPlay[2]);
    $(".introText").empty().append("Q4: " + game.questionsInPlay[3]);
    $(".introText").empty().append("Q5: " + game.questionsInPlay[4]);
    console.log("Q1: " + game.questionsInPlay[0]);
    console.log("Q2: " + game.questionsInPlay[1]);
    console.log("Q3: " + game.questionsInPlay[2]);
    console.log("Q4: " + game.questionsInPlay[3]);
    console.log("Q5: " + game.questionsInPlay[4]);
    console.log("Answers are: " + game.answersInPlay);
  },

  //  Checks if user scored a point or not, advances round
  checkScore() {
    if (game.answerSubmitted[roundNumber - 1] === game.answersInPlay[roundNumber - 1]) {
      userScore++
      console.log("Congrats! They are the correct King.");
      console.log("Current score: " + userScore);
    }
    if (game.answerSubmitted[roundNumber - 1] !== game.answersInPlay[roundNumber - 1]) {
      console.log("Sorry! That's the wrong King!");
    }
    roundNumber++
    $("#roundDigit").empty().append("Round : " + roundNumber + " out of 5");
    $("#scoreDigit").empty().append("Score : " + userScore + " out of 5");
    if (roundNumber < 6 ) {
      console.log("Now beginning round " + roundNumber + ".");
    }
    game.gameEnd();
  },

  //  Checks if user has completed 5 rounds, if they have won the game, or needs to try again
  gameEnd() {

    if (roundNumber === 6) {
      $("#roundDigit").empty();
      $("#scoreDigit").empty();
      if (userScore === 5) {
        console.log("You've won These Kings with a perfect score of: 5 out of 5!");
      } else {
        console.log("You've answered " + userScore + " out of 5 questions correctly. Try again with a new set of These Kings and questions.");
      }
    }
  }
}

//  This start button disappears and makes answer buttons appear when clicked
$("#startButton").click(function ()
{
  //  These make the necessary jQuery/CSS changes to play/advance the game
  $("button").removeClass("hidden");
  $("#startButton").addClass("hidden");
  $(".scoreCard").removeClass("hidden");





  $("#button0").click(function (event)
  {
    console.log("Button 0 is clicked; submitting answer King " + game.kingsInPlay[0].name) + ".";
    game.answerSubmitted.push(0);
    console.log(game.answerSubmitted);
    game.checkScore()
  });


  $("#button1").click(function (event)
  {
    console.log("Button 1 is clicked; submitting answer King " + game.kingsInPlay[1].name) + ".";
    game.answerSubmitted.push(1);
    console.log(game.answerSubmitted);
    game.checkScore()
  });


  $("#button2").click(function (event)
  {
    console.log("Button 2 is clicked; submitting answer King " + game.kingsInPlay[2].name) + ".";
    game.answerSubmitted.push(2);
    console.log(game.answerSubmitted);
    game.checkScore()
  });


  game.gameStart()
});





// To do:
// Push user feedback
// Compare "submittedAnswers array to answersInPlay array"
// Determine score
// Finish MVP
// Add images to buttons
// Fix up alt sites
// Add CSS animations
