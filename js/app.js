console.log("JS is working");


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



//  These are the Kings and answers to their own questions
// King1
// Name: Ashurnasirpal II
// Era: Neo-Assyrian Era
// Number: 1
// Img:
// Questions: [1,2,3,4,5,6,7,8,9,10]
//
// King2
// Name: Tiglath-Pileser III
// Era: Neo-Assyrian Era
// Number: 2
// Img:
// Questions: [11,12,13,14,15,16,17,18,19,20]
//
// King3
// Name: Sargon II
// Era: Neo-Assyrian Era
// Number: 3
// Img:
// Questions: [21,22,23,24,25,26,27,28,29,30]
//
// King4
// Name: Ashurbanipal
// Era: Neo-Assyrian Era
// Number: 4
// Img:
// Questions: [31,32,33,34,35,36,37,38,39,40]



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



//  Score Structure Function
//  userScore++
//  jQuery to user ("Correct, " + (answerValue.name) + " is the correct King.")
//  else, ("Incorrect. The correct king is " (answerValue.name)
//  load next question



//  End of Game Function
//  If score => 4.5,
//  Prompt "You've worn!"
//  Add jQuery retry button
//  Else,
//  Prompt, "You came close, but need at least 4.5 out of 5 to win"
//  Add jQuery retry button
