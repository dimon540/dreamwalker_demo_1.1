// =========================
// PLAYER SYSTEM
// =========================

console.log("Система гравця запущена.");


// Дані героя

let player = {

    name: "Героїня"

};



// =========================
// SET PLAYER NAME
// =========================

function setPlayerName(name){

    if(name && name.trim() !== ""){

        player.name = name.trim();

    }

    else{

        player.name = "Героїня";

    }


    localStorage.setItem(
        "dreamwalkerPlayer",
        JSON.stringify(player)
    );


}



// =========================
// LOAD PLAYER
// =========================

function loadPlayer(){


    const savedPlayer =
    localStorage.getItem(
        "dreamwalkerPlayer"
    );


    if(savedPlayer){

        player =
        JSON.parse(savedPlayer);

    }


}



// Запуск

loadPlayer();
