const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyOfCats = [
        ...cats,
        name
    ];
    return copyOfCats;
}

function prependCat(name) {
    const anotherCopyOfCats = [
        name,
        ...cats
    ];
    return anotherCopyOfCats;
}

function removeLastCat() {
    const copyOfCatsUsingSlice = cats.slice(0, -1);

    return copyOfCatsUsingSlice;
}
    
function removeFirstCat() {
    const anotherCopyOfCatsUsingSlice = cats.slice(1);

    return anotherCopyOfCatsUsingSlice;
}








