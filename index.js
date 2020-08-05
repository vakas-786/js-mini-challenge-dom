/***** Deliverable 1 *****/
window.addEventListener('DOMContentLoaded', (event) => {
    const header = document.querySelector("#header")
    console.log("Here's your header:", header.innerHTML)


/***** Deliverable 2 *****/

header.style = "color:red"


/***** Deliverable 3 *****/
roster = document.querySelector(".player-container")

function update_roster(PLAYERS) {

    for (let i = 0; i < PLAYERS.length; i++) {

        roster.innerHTML +=  
            `<div class='player' data-number = ${PLAYERS[i].number} >
          <h3>
            ${PLAYERS[i].name} (<em>${PLAYERS[i].nickname}</em>)
          </h3>
          <img src="${PLAYERS[i].photo}" alt="${PLAYERS[i].name}">
        </div>`
    }
}


    
    /***** Deliverable 4 *****/
    update_roster(PLAYERS)

    document.querySelector("div[data-number='7']").remove()
});