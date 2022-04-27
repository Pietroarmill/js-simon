// [*]al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
// [*]parte un countdown di 30 secondi 
// [*]al termine del countdown i numeri spariscono 
// [*]e appaiono 5 prompt dove l'utente dovra inserire i numeri che ricorda di aver visto
// []dopo di chè il programma dovra confrontare i numeri inseriti dall'utente e quelli generati casualmente 

// []al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
const startBtn = document.getElementById("start");
// const timer = 9995;

startBtn.addEventListener("click", function() {
    let timer;
    const userChoice = parseInt(document.getElementById("difficolta").value);
    if( userChoice === 1 ) {
        timer = 31;
    }   else if ( userChoice === 2 ) {
        timer = 21;
    }   else {
        timer = 6;
    }

    let numberString =  document.getElementById("rnd-numbers");
    // const arrayUserNumbers = [];
    
    const arrayRndNumbers = [];
    console.log(arrayRndNumbers);

    do {
        const thisNumber = getIntNumbers(1, 100);
        if ( !arrayRndNumbers.includes(thisNumber)) {
            arrayRndNumbers.push(thisNumber);
        }
    } while ( arrayRndNumbers.length != 5 );
    console.log(arrayRndNumbers.length);

    // []parte un countdown di 30 secondi 
    // []al termine del countdown i numeri spariscono 
    // []e appaiono 5 prompt dove l'utente dovra inserire i numeri che ricorda di aver visto
    let countdown = document.getElementById("counter");
    let counter = timer;

    let myInterval = setInterval(function(){

        counter--
        // console.log(counter);
        if (counter <= -1) {
            const arrayCorrectNumbers = [];

            for (let i = 0; i < arrayRndNumbers.length; i++) {

                const userNumber = parseInt(prompt("Dimmi un numero che hai visto."));
                let userCorrectNumbers = document.getElementById("user-numbers")
                if ( arrayRndNumbers.includes(userNumber) && !arrayCorrectNumbers.includes(userNumber)) {
                    arrayCorrectNumbers.push(userNumber)
                    let userCorrectNumbers = document.getElementById("user-numbers");
                }
                console.log(userNumber);
                console.log(arrayCorrectNumbers.length,"i numeri indovinati");
                console.log(":",arrayCorrectNumbers);
                userCorrectNumbers.innerHTML = `Hai indovinato ${arrayCorrectNumbers.length} numeri: ${arrayCorrectNumbers}.`
                countdown.innerHTML = ""
            }
            clearInterval(myInterval);

        }   else if ( counter <= 0 ) {
            numberString.innerHTML = "";
            countdown.innerHTML = "Tempo scaduto!!";

        }   else {
            countdown.innerHTML = `tempo a disposizione: ${counter} secondi.`;
            numberString.innerHTML = `memorizza questi numeri: ${arrayRndNumbers}.`;
        }
    }, 1000);

    this.style.pointerEvents = "none"

})




// Function
function getIntNumbers(min, max) {
    const number = Math.floor(Math.random() * max ) + min;
    return number;
}
