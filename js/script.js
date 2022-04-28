// [*]al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
// [*]parte un countdown di 30 secondi 
// [*]al termine del countdown i numeri spariscono 
// [*]e appaiono 5 prompt dove l'utente dovra inserire i numeri che ricorda di aver visto
// []dopo di chè il programma dovra confrontare i numeri inseriti dall'utente e quelli generati casualmente 

// []al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
const startBtn = document.getElementById("start");
// const timer = 9995;

startBtn.addEventListener("click", function () {
    startBtn.style.display = "none";
    let tryAgain = document.getElementById("try-again");
    let timer;
    let mumberOfNumbers;
    const userChoice = parseInt(document.getElementById("difficolta").value);
    if (userChoice === 1) {
        timer = 31;
        mumberOfNumbers = 5;
    } else if (userChoice === 2) {
        timer = 21;
        mumberOfNumbers = 6;
    } else {
        timer = 11;
        mumberOfNumbers = 7;
    }

    let textString = document.getElementById("rnd-numbers");
    let numbersString = document.getElementById("rnd-numbers");
    // const arrayUserNumbers = [];

    const arrayRndNumbers = [];

    do {
        const thisNumber = getIntNumbers(1, 100);
        if (!arrayRndNumbers.includes(thisNumber)) {
            arrayRndNumbers.push(thisNumber);
        }
    } while (arrayRndNumbers.length != mumberOfNumbers);
    console.log(arrayRndNumbers);
    console.log(arrayRndNumbers.length, "sono i numeri generati");

    // []parte un countdown di 30 secondi 
    // []al termine del countdown i numeri spariscono 
    // []e appaiono 5 prompt dove l'utente dovra inserire i numeri che ricorda di aver visto
    let countdown = document.getElementById("counter");
    let counter = timer;
    let userCorrectNumbers = document.getElementById("user-correct-numbers");
    let userIncorrectNumbers = document.getElementById("incorrect-numbers");
    let numbersGuess = document.getElementById("numbers-guess");

    let myInterval = setInterval(function () {

        counter--
        // console.log(counter);
        if (counter <= -1) {
            const arrayCorrectNumbers = [];
            const arrayIncorrectNumbers = [];
            const arrayNotGuessNumbers =[];
            const arrayUserNumbers = [];


            for (let i = 0; i < arrayRndNumbers.length; i++) {

                const thisRndNumber = arrayRndNumbers[i];
                const userNumber = parseInt(prompt("Dimmi un numero che hai visto."));

                arrayUserNumbers.push(userNumber);
                console.log(arrayUserNumbers);
                if (arrayRndNumbers.includes(userNumber) && !arrayCorrectNumbers.includes(userNumber)) {
                    arrayCorrectNumbers.push(userNumber);
                    let userCorrectNumbers = document.getElementById("user-numbers");
                } else {
                    arrayIncorrectNumbers.push(userNumber);
                }

                // if (!arrayCorrectNumbers.includes(thisRndNumber)) {

                //     arrayNotGuessNumbers.push(thisRndNumber);
                //     console.log("i numeri non indovinati:",arrayNotGuessNumbers);

                // }
                console.log(userNumber);
                console.log(arrayCorrectNumbers.length, "i numeri indovinati");
                userCorrectNumbers.innerHTML = `Hai indovinato ${arrayCorrectNumbers.length} numeri: <span class="green">${arrayCorrectNumbers},</span><span class="red">${arrayIncorrectNumbers}</span>`
                countdown.innerHTML = ""
                numbersGuess.innerHTML = `su ${arrayRndNumbers.length}: ${arrayRndNumbers}`;
                userIncorrectNumbers.innerHTML = `di cui errati ${arrayIncorrectNumbers.length}: `
            }
            clearInterval(myInterval);

        } else if (counter <= 0) {
            textString.innerHTML = "";
            numbersString.innerHTML = "";
            countdown.innerHTML = "Tempo scaduto!!";
            tryAgain.style.display = "block"

        } else {
            countdown.innerHTML = `Tempo a disposizione: ${counter} secondi.`;
            textString.innerHTML = `Memorizza questi numeri:`;
            numbersString.innerHTML = `${arrayRndNumbers}.`;
        }
    }, 1000);

    this.style.pointerEvents = "none";

    tryAgain.addEventListener("click", function () {

        userCorrectNumbers.innerHTML = "";
        numbersGuess.innerHTML = "";
        tryAgain.style.display = "none"
        startBtn.style.pointerEvents = "visible";
        startBtn.style.display = "block";

    })

})




// Function
function getIntNumbers(min, max) {
    const number = Math.floor(Math.random() * max) + min;
    return number;
}
