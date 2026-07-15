// =========================
// MAIN MENU SYSTEM
// =========================


console.log("Меню гри запущено.");




// =========================
// SHOW MAIN MENU
// =========================


function showMainMenu(){


    app.innerHTML = `


    <div class="menu-screen">


        <h1 class="game-logo">
            DREAMWALKER
        </h1>



        <div class="menu-buttons">



            <button onclick="newGame()">
                Нова гра
            </button>



            <button onclick="continueGame()">
                Продовжити
            </button>



            <button onclick="showChaptersMenu()">
                Розділи
            </button>



            <button onclick="showSavesMenu()">
                Збереження
            </button>



            <button onclick="showSettingsMenu()">
                Налаштування
            </button>



            <button onclick="showGalleryMenu()">
                Галерея
            </button>



            <button onclick="showAboutMenu()">
                Про гру
            </button>



        </div>



    </div>


    `;


}




// =========================
// NEW GAME
// =========================


function newGame(){


    app.innerHTML = `


    <div class="menu-screen">


        <h1 class="game-logo">
            Як тебе звати?
        </h1>



        <input 
        id="player-name-input"
        placeholder="Введи ім'я..."
        >



        <button onclick="confirmName()">

            Почати

        </button>



    </div>


    `;


}




// =========================
// CONFIRM NAME
// =========================


function confirmName(){


    const input =
    document.getElementById(
        "player-name-input"
    );



    setPlayerName(
        input.value
    );



    startScene("scene1");


}




// =========================
// CONTINUE
// =========================


function continueGame(){


    if(hasSave(1)){


        loadGame(1);


    }

    else{


        alert(
            "Збережень поки немає."
        );


    }


}





// =========================
// PLACEHOLDERS
// =========================


function showChaptersMenu(){


    alert(
        "Розділи будуть доступні після створення сюжету."
    );


}



function showSavesMenu(){


    alert(
        "Меню збережень у розробці."
    );


}



function showSettingsMenu(){


    alert(
        "Налаштування у розробці."
    );


}



function showGalleryMenu(){


    alert(
        "Галерея у розробці."
    );


}



function showAboutMenu(){


    app.innerHTML = `


    <div class="menu-screen">


        <h1>
        DREAMWALKER
        </h1>


        <p>
        Візуальна новела про мрії,
        страхи та шлях до мети.
        </p>



        <button onclick="showMainMenu()">
        ← Назад
        </button>



    </div>


    `;


}
