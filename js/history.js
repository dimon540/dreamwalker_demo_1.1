// =========================
// HISTORY SYSTEM
// =========================

console.log("Система історії запущена.");



// Історія діалогів

let dialogueHistory = [];




// =========================
// ADD DIALOGUE
// =========================

function addToHistory(step){


    let entry = {


        name:
        step.name === true
        ?
        player.name
        :
        step.name || "",


        text:
        step.text


    };



    dialogueHistory.push(entry);



    saveHistory();


}




// =========================
// SAVE HISTORY
// =========================

function saveHistory(){


    localStorage.setItem(

        "dreamwalkerHistory",

        JSON.stringify(dialogueHistory)

    );


}




// =========================
// LOAD HISTORY
// =========================

function loadHistory(){


    const saved =

    localStorage.getItem(
        "dreamwalkerHistory"
    );



    if(saved){


        dialogueHistory =
        JSON.parse(saved);


    }


}




// =========================
// CLEAR HISTORY
// =========================

function clearHistory(){


    dialogueHistory = [];


    saveHistory();


}




// =========================
// GET HISTORY
// =========================

function getHistory(){


    return dialogueHistory;


}




// Запуск

loadHistory();
