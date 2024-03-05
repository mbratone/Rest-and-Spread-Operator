// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...args) => Math.min(...args);


// // mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// /** remove a random element in the items array
// and return a new array without that item. */

// function removeRandom(items) {

// }

// /** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

// /** Return a new object with all the keys and values
// from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }


// /** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }


// /** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }


// /** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }


// Remove a random element in the items array and return a new array without that item.
const removeRandom = (items) => {
    const randomIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)];
  };
  
  // Return a new array with every item in array1 and array2.
  const extend = (array1, array2) => [...array1, ...array2];
  
  // Return a new object with all the keys and values from obj and a new key/value pair.
  const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });
  
  // Return a new object with a key removed.
  const removeKey = (obj, key) => {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  };
  
  // Combine two objects and return a new object.
  const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });
  
  // Return a new object with a modified key and value.
  const update = (obj, key, val) => ({ ...obj, [key]: val });
  