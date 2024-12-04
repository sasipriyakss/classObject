// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    let success = false; // Simulating a condition
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  });
  
  // Using the promise
  myPromise
    .then((result) => {
      console.log(result); // Runs if resolved
    })
    .catch((error) => {
      console.error(error); // Runs if rejected
    })
    .finally(() => {
      console.log("Promise operation completed."); // Runs in all cases
    });
  