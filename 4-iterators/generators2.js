function *createFlow() {
    const num = 10;
    const newNum = yield num;
    yield 5 + newNum;
    yield 6; 
}


const returnNextElement = createFlow();

const element1 = returnNextElement.next();
const element2 = returnNextElement.next(2);
const element3 = returnNextElement.next(3);
const element4 = returnNextElement.next();

console.log(element1);
console.log(element2);
console.log(element3);
console.log(element4);



