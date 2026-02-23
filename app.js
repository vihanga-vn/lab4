// 1. We must define the promise first (from Example 6)
const myPromise = new Promise((resolve, reject) => { 
  const condition = true; 
  if (condition) { 
    resolve('Success from Async/Await!'); 
  } else { 
    reject('Failure!'); 
  } 
}); 

// 2. Now the Async function can "await" that promise
async function myFunction() { 
  try { 
    const result = await myPromise; // This waits for the promise to finish
    console.log(result); 
  } catch (error) { 
    console.log(error); 
  } 
} 
 
myFunction();