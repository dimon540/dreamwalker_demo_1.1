// =========================
// GAME ENGINE
// =========================


console.log("Двигун гри запущено.");



let currentScene = null;

let currentStep = 0;

let typing = false;

let typingTimer;



let sceneMusic = null;

let citySound = null;





// =========================
// START SCENE
// =========================


function startScene(sceneName){



    if(!window.scenes){


        console.error(
            "Система сцен не завантажена"
        );


        return;


    }



    const scene = window.scenes[sceneName];



    if(!scene){


        console.error(

            "Сцена не знайдена:",

            sceneName

        );


        return;


    }



    currentScene = scene;


    currentStep = 0;



    playSceneAudio(sceneName);



    showStep();



}







// =========================
// SHOW STEP
// =========================


function showStep(){



    clearInterval(typingTimer);



    const step =

    currentScene.steps[currentStep];



    app.innerHTML = `


    <div class="game-screen">


        <div id="background"></div>



        <div id="dialogue-box">


            ${
                step.name
                ?
                `
                <div class="speaker">

                ${step.name}

                </div>
                `
                :
                ""
            }



            <div id="dialogue"></div>


        </div>




        <button

        class="game-button"

        onclick="nextStep()">


        Далі


        </button>



    </div>


    `;




    const bg = document.getElementById(
        "background"
    );



    bg.style.backgroundImage =

    `url("${step.background}")`;




    if(step.camera === "close"){


        bg.classList.add(
            "camera-close"
        );


    }



    if(step.camera === "far"){


        bg.classList.add(
            "camera-far"
        );


    }




    typeText(step.text);



}







// =========================
// TEXT TYPING
// =========================


function typeText(text){



    const box = document.getElementById(
        "dialogue"
    );



    box.innerHTML="";



    let index=0;



    typing=true;




    typingTimer=setInterval(()=>{


        box.innerHTML += text[index];

        index++;




        if(index >= text.length){


            clearInterval(typingTimer);


            typing=false;


        }



    },60);



}







// =========================
// NEXT STEP
// =========================


function nextStep(){



    if(typing){



        clearInterval(typingTimer);



        document.getElementById(
            "dialogue"
        ).innerHTML =

        currentScene.steps[currentStep].text;



        typing=false;


        return;


    }




    currentStep++;




    if(currentStep < currentScene.steps.length){


        showStep();


    }

    else{


        stopSceneAudio();


        showMenu();


    }



}







// =========================
// AUDIO
// =========================


function playSceneAudio(sceneName){



    stopSceneAudio();



    if(sceneName==="scene1"){



        sceneMusic = new Audio(

        "assets/music/scene1.mp3"

        );



        sceneMusic.loop=true;


        sceneMusic.volume=0.7;




        citySound = new Audio(

        "assets/sounds/city.mp3"

        );



        citySound.loop=true;


        citySound.volume=0.25;




        sceneMusic.play()
        .catch(()=>{});



        citySound.play()
        .catch(()=>{});



    }


}







// =========================
// STOP AUDIO
// =========================


function stopSceneAudio(){



    if(sceneMusic){


        sceneMusic.pause();


        sceneMusic.currentTime=0;


    }




    if(citySound){


        citySound.pause();


        citySound.currentTime=0;


    }



}
