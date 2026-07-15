// =========================
// DREAMWALKER GAME ENGINE
// =========================


console.log(
    "Dreamwalker Engine 1.1 запущено."
);



// =========================
// GAME STATE
// =========================


let currentScene = null;

let currentSceneName = "";

let currentStep = 0;

let typing = false;

let typingTimer;



// =========================
// START GAME
// =========================


function startGame(){


    createGameUI();


    startScene("scene1");


}





// =========================
// START SCENE
// =========================


function startScene(sceneName){



    const scene = scenes[sceneName];



    if(!scene){


        console.error(
            "Сцена не знайдена:",
            sceneName
        );


        return;


    }



    currentScene = scene;

    currentSceneName = sceneName;

    currentStep = 0;



    playSceneAudio(sceneName);



    showStep();



}




// =========================
// SHOW STEP
// =========================


function showStep(){



    clearInterval(
        typingTimer
    );



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
            ${
                step.name === true
                ?
                player.name
                :
                step.name
            }
            </div>
            `
            :
            ""
        }



        <div id="dialogue">
        </div>



        </div>



        <button 
        class="game-button"
        onclick="nextStep()">

        Далі

        </button>



    </div>

    `;



    const background =
    document.getElementById(
        "background"
    );



    background.style.backgroundImage =

    `url("${step.background}")`;



    if(step.camera === "close"){


        background.className =
        "camera-close";


    }


    if(step.camera === "far"){


        background.className =
        "camera-far";


    }



    typeText(
        step.text
    );



    addToHistory(step);



}




// =========================
// TEXT SYSTEM
// =========================


function typeText(text){


    const box =
    document.getElementById(
        "dialogue"
    );



    box.innerHTML = "";



    let index = 0;



    typing = true;



    typingTimer =
    setInterval(()=>{


        box.innerHTML += text[index];


        index++;



        if(index >= text.length){


            clearInterval(
                typingTimer
            );


            typing = false;


        }



    },
    
    settings.textSpeed);



}





// =========================
// NEXT STEP
// =========================


function nextStep(){



    if(typing){



        clearInterval(
            typingTimer
        );



        document.getElementById(
            "dialogue"
        ).innerHTML =

        currentScene.steps[currentStep].text;



        typing = false;



        return;


    }




    currentStep++;



    if(

    currentStep <

    currentScene.steps.length

    ){


        showStep();


    }

    else{


        stopAudio();


        console.log(
            "Сцена завершена"
        );


    }



}





// =========================
// START
// =========================


window.onload = function(){


    showMainMenu();


};
