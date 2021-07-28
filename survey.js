// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  rl.question("What's your name? Nicknames are also acceptable", (nickname) => {
    rl.question("What's an activity you like doing?", (activity) => {
      rl.question("What do you listen to while doing that?", (music) => {
        console.log(`Thank you for your valuable feedback: ${answer}`, `Nice to meet you ${nickname}!`, `${activity} sounds like fun.`,`${music}is a fitting choice.`);

        rl.close();
      });
    });
  });
});

//

//   rl.close();
// });
