// =========================
// AUDIO SYSTEM
// =========================

console.log("Аудіосистема запущена.");


// Поточна музика

let currentMusic = null;


// Поточний атмосферний звук

let currentAmbient = null;



// =========================
// PLAY SCENE AUDIO
// =========================

function playSceneAudio(sceneName){


    stopAudio();



    if(sceneName === "scene1"){



        currentMusic = new Audio(
            "assets/music/scene1.mp3"
        );


        currentAmbient = new Audio(
            "assets/sounds/city.mp3"
        );



        currentMusic.loop = true;

        currentAmbient.loop = true;



        currentMusic.volume = 0.7;

        currentAmbient.volume = 0.25;



        currentMusic.play()

        .then(()=>{

            console.log(
                "Музика запущена"
            );

        })

        .catch(error=>{

            console.log(
                "Музика очікує взаємодії користувача",
                error
            );

        });



        currentAmbient.play()

        .then(()=>{

            console.log(
                "Атмосфера міста запущена"
            );

        })

        .catch(error=>{

            console.log(
                "Звук міста очікує взаємодії",
                error
            );

        });



    }


}




// =========================
// STOP AUDIO
// =========================

function stopAudio(){



    if(currentMusic){


        currentMusic.pause();

        currentMusic.currentTime = 0;


    }



    if(currentAmbient){


        currentAmbient.pause();

        currentAmbient.currentTime = 0;


    }


}




// =========================
// VOLUME CONTROL
// =========================

function setMusicVolume(value){


    if(currentMusic){

        currentMusic.volume = value;

    }


}



function setAmbientVolume(value){


    if(currentAmbient){

        currentAmbient.volume = value;

    }


}
