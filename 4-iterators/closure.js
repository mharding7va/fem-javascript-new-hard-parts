function createNewFunction() {
    function add2 (num) {
        return num + 2;
    }
    return add2
}

const newFunction = createNewFunction();

const result = newFunction(3);

// -----------------------
// COVE or Closure

function createFunction(array) {
    let i = 0;
    function inner() {
        const element = array[i];
        i++;
        return element;
    }
    return inner;
}

const returnNextElement = createFunction([4, 5, 6]);

console.log(returnNextElement());

const element1 = returnNextElement();
const element2 = returnNextElement();
const element3 = returnNextElement();

console.log(element1);
console.log(element2);
console.log(element3);
