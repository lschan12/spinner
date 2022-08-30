let i = 100
let animation = ["\r|", "\r/", "\r-", "\r\\"]
for (let a of animation) {
  setTimeout(() => {
    process.stdout.write(`${a}   `);
  }, i);
  i += 200
};

