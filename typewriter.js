const sentence = "hello there from lighthouse labs";
let lineBreak = sentence + "\n"
let timeDelay = 0;
for (const char of lineBreak) {
  setTimeout(() => {
  process.stdout.write(char);
  }, timeDelay)
  timeDelay += 50;
};