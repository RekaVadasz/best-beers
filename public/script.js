const beerCardComponent = function (index, name, brewery, flavour) {
    return `
        <div class="beer-card">
            <div class="index">${index}</div>
            <p class="beer-name">${name}</p>
            <p class="beer-brewery">${brewery}</p>
            <p class="beer-flavour">${flavour}</p>
            <button class="details-btn">
                ${beers.button}
                <span class="material-symbols-outlined">arrow_forward</span>
            </button>
        </div>
    
    `
}


const loadEvent = function () {
   
    let beerCard = "";

    beers.cards.forEach((card, index) => {
        beerCard += beerCardComponent(index + 1, card.title, card.sub, card.text )

    })
   
    document.querySelector(".beer-cards-section").insertAdjacentHTML("beforeend", beerCard)
}

window.addEventListener("load", loadEvent) 