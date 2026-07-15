// =========================
// DREAMWALKER MAIN MENU
// =========================


const app = document.getElementById("app");



// =========================
// MAIN MENU
// =========================


function showMenu(){


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




<button onclick="showChapters()">

Розділи

</button>




<button onclick="showSaves()">

Збереження

</button>




<button onclick="showSettings()">

Налаштування

</button>




<button onclick="showGallery()">

Галерея

</button>




<button onclick="showAbout()">

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


    startScene("scene1");


}




// =========================
// CONTINUE
// =========================


function continueGame(){


app.innerHTML = `


<div class="menu-screen">


<h1 class="game-logo">

ПРОДОВЖИТИ

</h1>



<div class="menu-buttons">


<p>

Збережень поки немає

</p>



<button onclick="showMenu()">

← Назад

</button>



</div>


</div>


`;

}




// =========================
// SAVES
// =========================


function showSaves(){


app.innerHTML = `


<div class="menu-screen">


<h1 class="game-logo">

ЗБЕРЕЖЕННЯ

</h1>




<div class="menu-buttons">


<p>

Слот 1 — порожньо

</p>


<p>

Слот 2 — порожньо

</p>


<p>

Слот 3 — порожньо

</p>



<button onclick="showMenu()">

← Назад

</button>


</div>


</div>


`;

}





// =========================
// START
// =========================


showMenu();
