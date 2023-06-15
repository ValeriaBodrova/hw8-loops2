//task1
let output = "";

for (let i = 20; i <= 30; i += 0.5) {
  output += i;
  
  if (i !== 30) {
    output += " ";
  }
}

console.log(output);

//task2

for ( let i = 10; i <= 100; i += 10){
        let product = i * 40;
        console.log(product);
}

//task3
let n = 3000;

for (let i = 1; i <= 100; i++){
    let square = i * i;
    if(square <= n){
        console.log(i);
    } else {
        break;
    }
}

//task4 

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(isPrime(53));  
  console.log(isPrime(24));  
  console.log(isPrime(1));   
  

