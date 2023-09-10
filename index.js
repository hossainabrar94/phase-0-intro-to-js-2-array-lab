// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
cats.push("Ralph");
};

function destructivelyPrependCat(name){
    cats.unshift("Bob");
};

function destructivelyRemoveLastCat(){
    cats.pop()
};

function destructivelyRemoveFirstCat(){
    cats.shift()
};


function appendCat(name){
    const newCatArray = [...cats];
    newCatArray.push(name)
    return newCatArray
};

function prependCat(name){
    const newCatArray = [...cats];
    newCatArray.unshift(name)
    return newCatArray
};

function removeLastCat(){
    const newCatArray = [...cats];
    newCatArray.pop();
    return newCatArray;
}

function removeFirstCat(){
    const newCatArray = [...cats];
    newCatArray.shift();
    return newCatArray;
}