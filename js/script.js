// [*]al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
// []parte un countdown di 30 secondi 
// []al termine del countdown i numeri spariscono 
// []e appaiono 5 prompt dove l'utente dovra inserire i numeri che ricorda di aver visto
// []dopo di chè il programma dovra confrontare i numeri inseriti dall'utente e quelli generati casualmente 

// []al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
const startBtn = document.getElementById("start");
const timer = 5;

startBtn.addEventListener("click", function() {
    let numberString =  document.getElementById("rnd-numbers")
    const arrayRndNumbers = [];
    
    for (let i = 0; i < 5; i++) {
        const thisNumber = getIntNumbers(1, 100);
        if ( !arrayRndNumbers.includes(thisNumber) ) {
            arrayRndNumbers.push(thisNumber);
        }
    }
    console.log(arrayRndNumbers);

    // []parte un countdown di 30 secondi 
    let counter = document.getElementById("counter");
    counter.innerHTML = timer;

    let countdown = setInterval(function(){

        counter.innerHTML--

        if (counter.innerHTML <= 0) {
            counter.innerHTML = "Tempo scaduto!!";
            clearInterval(countdown);
            numberString.innerHTML = "";
        }   else {
            numberString.innerHTML = arrayRndNumbers;
        }
    }, 1000);

    this.style.pointerEvents = "none"
})




// Function
function getIntNumbers(min, max) {
    const number = Math.floor(Math.random() * max ) + min;
    return number;
}
