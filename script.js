//task1
let output = "";

for (let i = 20; i <= 30; i += 0.5) {
  output += i;
  
  if (i !== 30) {
    output += " ";
  }
}

console.log(output);