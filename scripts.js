// An app that prints out different messages to the user
// tell the app how your feeling and messages will show up

// in order to read input from console
const readLine = require("readline");

const data = {
  good: {
    setup: [
      "Let's keep the good, keep in mind:",
      "We love this feeling remember:",
      "You are such a force, you can and also:",
    ],
    quotes: [
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
      "To fall in love with yourself is the first secret to happiness.",
      "You're a rainbow of possibilities, spreading color wherever you wander.",
      "Find joy in the little things — they make life beautiful.",
    ],
  },
  stressed: {
    setup: [
      "I know it is hard but: ",
      "Despite the chaos: ",
      "There might be a lot of clouds around but: ",
    ],
    quotes: [
      "In the middle of difficulty lies opportunity.",
      "The greatest weapon against stress is our ability to choose one thought over another",
      "It’s not stress that kills us; it is our reaction to it.",
      "You don’t have to control your thoughts. You just have to stop letting them control you.",
    ],
  },
  lonely: {
    setup: [
      "You may feel this now, but: ",
      "This lonely feeling won't last:",
      "No matter what, this to shall pass: ",
    ],
    quotes: [
      "The worst loneliness is to not be comfortable with yourself.",
      "What a lovely surprise to finally discover how unlonely being alone can be.",
      "The loneliest moment in someone's life is when they are watching their whole world fall apart, and all they can do is stare blankly.",
    ],
  },
};

// inform user
console.log(
  "Based on how you're feeling we will display a unique message for you!",
);
console.log("1: Good");
console.log("2: Stressed");
console.log("3: Lonely");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// get random number from an array
function randomNumber(arr) {
  return Math.floor(Math.random() * arr.length);
}

// get a statement to display to user
function getStatement(arr, cb) {
  let index = cb(arr);
  return arr[index];
}

function logStatement(arr, cb) {
  console.log(getStatement(arr, cb));
}

// Ask user a question
rl.question("Select a number? ", (stringNum) => {
  // collect answer and turn to number
  let feeling = Number(stringNum);

  // check if feeling is a number and valid range
  if (typeof feeling !== "number" || feeling < 1 || feeling > 3) {
    console.log("invalid input");
  } else {
    console.log("----------------------------------");
    // get message based on feeling
    switch (feeling) {
      case 1:
        logStatement(data.good.setup, randomNumber);
        logStatement(data.good.quotes, randomNumber);
        break;
      case 2:
        logStatement(data.stressed.setup, randomNumber);
        logStatement(data.stressed.quotes, randomNumber);
        break;
      case 3:
        logStatement(data.lonely.setup, randomNumber);
        logStatement(data.lonely.quotes, randomNumber);
        break;
    }
  }

  // close terminal
  rl.close();
});
// console.log(currentFeeling);
