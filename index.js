// Code your solutions in this file
function writeCards(names, occaision) {
    const newArray = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${occaision} gift!`
        newArray.push(message)
    }
    return newArray;
}

function countDown(num) {
    while(num >= 0) {
        console.log(num)
        num--
    }
}
countDown(4)