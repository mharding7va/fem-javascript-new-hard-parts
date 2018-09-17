function doWhenDataReceived(value) {
    returnNextElement.next(value);
}

function *createFlow() {
    const data = yield fetch("http://twitter/will/1");
    console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();

futureData.then(doWhenDataReceived);