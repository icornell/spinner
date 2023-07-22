let delay = 200;//create your delay
let spinner = ['|', '/', '-', '\\', '|'];//make the spinner variable an array that will loop through the characters

for (let i = 0; i < spinner.length; i++) {//for each character in the loop
  setTimeout(() => {//run the timer and play the character in the array
    process.stdout.write(`\r${spinner[i]}   `);
  }, delay);
  delay += 200;//add more time to the delay so that the next character will play after the previous one
};
