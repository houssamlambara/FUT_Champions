const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const openModalButtons = document.querySelectorAll('.openModalButton');
const listeCarte = document.querySelectorAll('.carte');
let playercard = document.getElementById("playerForm");
let Remplacement = document.getElementById("Remplacement");
const openModal = () => {
    modal.classList.remove('hidden');
};

function closeModal() {
    modal.classList.add('hidden');
}

openModalButtons.forEach((button) => {
    button.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

listeCarte.forEach((carte) => {
    carte.addEventListener('click', () => {
        afficherListePlayer(carte);
    })
})


const positionPlayer = document.getElementById('positionPlayer');
const GKStats = document.getElementById('GKStats'); 
const fieldPlayerStats = document.querySelector('.grid.grid-cols-2.gap-4'); 


positionPlayer.addEventListener('change', function () {
    if (this.value === 'GK') {

        GKStats.classList.remove('hidden');
        fieldPlayerStats.classList.add('hidden');
    } else {

        GKStats.classList.add('hidden');
        fieldPlayerStats.classList.remove('hidden');
    }
});

let players = [];

playercard.addEventListener("submit", function (event) {
    event.preventDefault();

    let playername = document.getElementById("Name").value;
    let Nationality = document.getElementById("Nationality").value;
    let Team = document.getElementById("Team").value;
    let positionPlayer = document.getElementById("positionPlayer").value;
    let PAC = document.getElementById("PAC").value;
    let SHO = document.getElementById("SHO").value;
    let PAS = document.getElementById("PAS").value;
    let DRI = document.getElementById("DRI").value;
    let DEF = document.getElementById("DEF").value;
    let PHY = document.getElementById("PHY").value;

    let DIV = document.getElementById("DIV").value;
    let HAN = document.getElementById("HAN").value;
    let KIC = document.getElementById("KIC").value;
    let REF = document.getElementById("REF").value;
    let SPD = document.getElementById("SPD").value;
    let POS = document.getElementById("POS").value;

    let country = {
        BR: "https://cdn.sofifa.net/flags/br.png",
        FR: "https://cdn.sofifa.net/flags/fr.png",
        ARG: "https://cdn.sofifa.net/flags/ar.png",
        MR: "https://cdn.sofifa.net/flags/ma.png",
        EN: "https://cdn.sofifa.net/flags/gb-eng.png",
        IT: "https://cdn.sofifa.net/flags/it.png",
        PR: "https://cdn.sofifa.net/flags/pt.png",
        GR: "https://cdn.sofifa.net/flags/de.png",
        ND: "https://cdn.sofifa.net/flags/nl.png",
        BL: "https://cdn.sofifa.net/flags/be.png",
    };

    let club = {
        team1: "https://cdn.sofifa.net/meta/team/7980/120.png",
        team2: "https://cdn.sofifa.net/meta/team/2506/120.png",
        team3: "https://cdn.sofifa.net/meta/team/9/120.png",
        team4: "https://cdn.sofifa.net/meta/team/3468/120.png",
        team5: "https://cdn.sofifa.net/meta/team/503/120.png",
        team6: "https://cdn.sofifa.net/meta/team/7011/120.png",
        team7: "https://cdn.sofifa.net/meta/team/14/120.png",
    };

    let newcard = document.createElement("div");
    newcard.classList.add("border-md", "border-black", "p-2");

    // CONDITION position du joueur
    if (positionPlayer === "GK") {
        newcard.innerHTML = `
            <div class="relative flex justify-center items-center">
                <img src="./src/assets/img/card12-removebg-preview.png" height="150" width="160" alt="">
                <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="Left ST" class="absolute object-contain mb-16" height="90" width="100">
                    <div class="absolute left-[15%] top-[15%] text-center text-white">
                        <div class="font-bold text-xs">97</div>
                        <div class="font-semibold text-[0.5rem]">${positionPlayer}</div>
                    </div>
                    <div class="absolute top-[60%] text-center text-white">
                        <div class="font-bold text-[0.8rem]">${playername}</div>
                        <div class="flex font-bold text-[0.6rem] gap-1">
                            <div class="flex flex-col">
                                <span>DIV</span>
                                <span>${DIV}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>HAN</span>
                                <span>${HAN}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>KIC</span>
                                <span>${KIC}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>REF</span>
                                <span>${REF}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>SPD</span>
                                <span>${SPD}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>POS</span>
                                <span>${POS}</span>
                            </div>
                        </div>
                        <div class="flex justify-center items-center mt-1">
                        <img src="${country[Nationality]}" alt="Country Flag" class="w-4 h-3 mx-1" />
                        <img src="${club[Team]}" alt="Team Logo" class="w-4 h-4 mx-1" />
                    </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        newcard.innerHTML = `
            <div class="relative flex justify-center items-center">
                <img src="./src/assets/img/card12-removebg-preview.png" height="150" width="160" alt="">
                <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="Left ST" class="absolute object-contain mb-16" height="90" width="100">
                    <div class="absolute left-[15%] top-[15%] text-center text-white">
                        <div class="font-bold text-xs">97</div>
                        <div class="font-semibold text-[0.5rem]">${positionPlayer}</div>
                    </div>
                    <div class="absolute top-[60%] text-center text-white">
                        <div class="font-bold text-[0.8rem]">${playername}</div>
                        <div class="flex font-bold text-[0.6rem] gap-1">
                            <div class="flex flex-col">
                                <span>PAC</span>
                                <span>${PAC}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>SHO</span>
                                <span>${SHO}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>PAS</span>
                                <span>${PAS}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>DRI</span>
                                <span>${DRI}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>DEF</span>
                                <span>${DEF}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>PHY</span>
                                <span>${PHY}</span>
                            </div>
                        </div>
                        <div class="flex justify-center items-center mt-1">
                        <img src="${country[Nationality]}" alt="Country Flag" class="w-4 h-3 mx-1" />
                        <img src="${club[Team]}" alt="Team Logo" class="w-4 h-4 mx-1" />
                    </div>
                    </div>
                </div>
            </div>
        `;
    }

    Remplacement.appendChild(newcard);
    playercard.reset();
    modal.classList.add('hidden');

});