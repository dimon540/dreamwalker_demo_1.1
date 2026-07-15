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



            <button onclick="startScene('scene1')">

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
