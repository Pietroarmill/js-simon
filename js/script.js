// [*]al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
// []parte un countdown di 30 secondi 
// []al termine del countdown i numeri spariscono 
// []e appaiono 5 prompt dove l'utente dovra inserire i numeri che ricorda di aver visto
// []dopo di chè il programma dovra confrontare i numeri inseriti dall'utente e quelli generati casualmente 

// []al click di un pulsante vengono generati e visualizzati a schermo 5 numeri casuali
const startBtn = document.getElementById("start");

startBtn.addEventListener("click", function() {

    const arrayRndNumbers = [];
    
    for (let i = 0; i < 5; i++) {
        const thisNumber = getIntNumbers(1, 100);
        if ( !arrayRndNumbers.includes(thisNumber) ) {
            arrayRndNumbers.push(thisNumber);
        }
    }
    console.log(arrayRndNumbers);

    // []parte un countdown di 30 secondi 

    let counter = 3;
    let newYearCountdown = setInterval(function(){
    console.log(counter);
    counter--
    if (counter <= 0) {
        console.log("HAPPY NEW YEAR!!");
        clearInterval(newYearCountdown);
    }
    }, 1000);

})




// Function
function getIntNumbers(min, max) {
    const number = Math.floor(Math.random() * max ) + min;
    return number;
}
