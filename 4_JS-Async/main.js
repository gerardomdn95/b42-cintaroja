console.log(1);
setTimeout(() => {
  console.log(2);
}, 5000);
setTimeout(() => {
  console.log(3);
}, 3000);
// Cuello de botella
for(let i = 0; i <= 9999999999; i++);
console.log(4);
