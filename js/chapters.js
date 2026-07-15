// =========================
// CHAPTERS MENU
// =========================


function showChapters(){


app.innerHTML = `


<div class="menu-screen">


<h1 class="game-logo">

РОЗДІЛИ

</h1>



<div class="menu-buttons">



<button onclick="startPrologue()">

🌙 Пролог

</button>



<button disabled>

🔒 Глава 1

</button>



<button disabled>

🔒 Глава 2

</button>



<button disabled>

🔒 Глава 3

</button>




<button onclick="showMenu()">

← Назад

</button>



</div>


</div>


`;



}



// =========================
// START PROLOGUE
// =========================


function startPrologue(){


    console.log("Запуск прологу");


    startScene("scene1");


}
