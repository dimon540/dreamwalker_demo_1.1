// =========================
// UI SYSTEM
// =========================

console.log("UI система запущена.");



// =========================
// CREATE GAME UI
// =========================

function createGameUI(){


    const menuButton = document.createElement("button");


    menuButton.id = "menu-button";


    menuButton.innerHTML = "☰";


    menuButton.onclick = openPauseMenu;



    document.body.appendChild(menuButton);



}



// =========================
// OPEN PAUSE MENU
// =========================

function openPauseMenu(){


    if(document.getElementById("pause-overlay")){

        return;

    }



    const overlay = document.createElement("div");


    overlay.id = "pause-overlay";



    overlay.innerHTML = `

        <div class="pause-window">


            <h1>
            ПАУЗА
            </h1>



            <button onclick="closePauseMenu()">
            ▶ Продовжити
            </button>



            <button onclick="openHistoryUI()">
            📖 Історія
            </button>



            <button onclick="saveGame()">
            💾 Зберегти
            </button>



            <button onclick="openSettingsUI()">
            ⚙ Налаштування
            </button>



            <button onclick="showMenu()">
            🏠 Головне меню
            </button>



        </div>

    `;



    document.body.appendChild(overlay);



}




// =========================
// CLOSE MENU
// =========================

function closePauseMenu(){


    const overlay =
    document.getElementById(
        "pause-overlay"
    );



    if(overlay){

        overlay.remove();

    }


}




// =========================
// HISTORY WINDOW
// =========================

function openHistoryUI(){


    alert(
        "Історія діалогів буде тут."
    );


}



// =========================
// SETTINGS WINDOW
// =========================

function openSettingsUI(){


    alert(
        "Налаштування будуть тут."
    );


}
