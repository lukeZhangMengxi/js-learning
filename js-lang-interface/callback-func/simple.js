const message = function (name) {
  console.log(name + ": This message is shown after 3 seconds");
}

setTimeout(message, 3000, 'luke');


setTimeout(function () {
  console.log("This message is also shown after 3 seconds");
}, 3000);

setTimeout(() => {
  console.log("ES6: This message is also shown after 3 seconds");
}, 3000);
