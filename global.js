//  Global object

// console.log(global);

setTimeout(() => {
  console.log("it actually works");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("setinterval works too");
}, 1000);
