async function createFlow()) {
    console.log("Me First");
    const data = await fetch("http://twitter.com/will/1");
    console.log(data);
}

createFlow();

console.log("Me second");
