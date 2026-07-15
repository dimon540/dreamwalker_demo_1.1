// =========================
// SETTINGS SYSTEM
// =========================

console.log("Система налаштувань запущена.");



// =========================
// DEFAULT SETTINGS
// =========================

let settings = {


    music:70,


    sound:80,


    textSpeed:15,


    language:"Українська",


    autosave:true


};




// =========================
// LOAD SETTINGS
// =========================

function loadSettings(){


    const savedSettings =
    localStorage.getItem(
        "dreamwalkerSettings"
    );



    if(savedSettings){


        settings =
        JSON.parse(savedSettings);


    }


}




// =========================
// SAVE SETTINGS
// =========================

function saveSettings(){


    localStorage.setItem(

        "dreamwalkerSettings",

        JSON.stringify(settings)

    );


}




// =========================
// CHANGE SETTINGS
// =========================

function setMusic(value){


    settings.music = Number(value);


    saveSettings();


}



function setSound(value){


    settings.sound = Number(value);


    saveSettings();


}



function setTextSpeed(value){


    settings.textSpeed = Number(value);


    saveSettings();


}



function setLanguage(value){


    settings.language = value;


    saveSettings();


}



function setAutosave(value){


    settings.autosave = value;


    saveSettings();


}




// Запуск

loadSettings();
