function writeCards(names, occasion) {
    const cardsArray = []
    for (let i = 0; i < names.length; i++) {
        cardsArray.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
        debugger
    }
    return cardsArray
}
const names = ["Ali", "Ming", "Caleigh"]
writeCards(names, "surprise")

function countDown(numbers) {
    let count = 10
    while (count >= 0) {
        console.log(count--)
    }
}
countDown(10)