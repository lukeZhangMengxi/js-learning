const message = name => {
  console.log(name + ": This message is shown after 3 seconds");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function settimeout(func, seconds, ...params) {
  console.log("I was called first and executed first!")
  await sleep(seconds * 1000);
  func(...params);
  console.log("I was called first and Now I am done!")
}

settimeout(message, 3, "YES");
console.log("I was called secondly: Sequence DOES NOT matter for async func!");
