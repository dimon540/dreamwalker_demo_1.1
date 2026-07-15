// =========================
// SAVE SYSTEM
// =========================

console.log("Система збережень запущена.");



// Кількість слотів

const maxSaveSlots = 3;



// =========================
// SAVE GAME
// =========================

function saveGame(slot = 1){



    const saveData = {


        scene:
        currentSceneName || null,


        step:
        currentStep || 0,


        player:
        player,


        history:
        dialogueHistory,


        settings:
        settings,


        date:
        new Date().toLocaleString()



    };



    localStorage.setItem(

        "dreamwalkerSave_" + slot,

        JSON.stringify(saveData)

    );



    console.log(
        "Гру збережено. Слот:",
        slot
    );



}




// =========================
// LOAD GAME
// =========================

function loadGame(slot = 1){



    const saved =

    localStorage.getItem(

        "dreamwalkerSave_" + slot

    );



    if(!saved){


        console.log(
            "Збереження не знайдено"
        );


        return false;


    }



    const saveData =
    JSON.parse(saved);



    currentSceneName =
    saveData.scene;



    currentStep =
    saveData.step;



    player =
    saveData.player;



    dialogueHistory =
    saveData.history;



    settings =
    saveData.settings;



    console.log(
        "Гру завантажено",
        saveData
    );



    startScene(
        currentSceneName
    );



    return true;



}




// =========================
// CHECK SAVE
// =========================

function hasSave(slot = 1){


    return localStorage.getItem(

        "dreamwalkerSave_" + slot

    ) !== null;


}




// =========================
// DELETE SAVE
// =========================

function deleteSave(slot = 1){


    localStorage.removeItem(

        "dreamwalkerSave_" + slot

    );


    console.log(
        "Слот очищено:",
        slot
    );


}
