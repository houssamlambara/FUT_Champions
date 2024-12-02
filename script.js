const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const openModalButtons = document.querySelectorAll('.openModalButton');
const titulaireButton = document.querySelectorAll('.titulaire-btn');
const titulaireplayer = document.querySelectorAll('.titulaireplayer')
const listeCarte = document.querySelectorAll('.carte');
let playercard = document.getElementById("playerForm");
let Remplacement = document.getElementById("Remplacement");
let titulaireModal = document.getElementById("Titulairemodal");
let substitutePlayers = document.getElementById("substitutePlayers");
let cancelModal = document.getElementById("cancelModal");


let jsonPlayers;
let newPlayers = [];


fetch('./players.json')
    .then(res => res.json())
    .then(data => {
        jsonPlayers = data.players;
    })

titulaireButton.forEach(button => {
    button.onclick = function () {
        titulaireModal.style.display = "flex";
        let role = button.innerHTML;

        jsonPlayers.forEach(element => {
            if (element.position == role) {
                newPlayers.push(element);
            }
        });

        listplayer();
    };
});
function listplayer() {
    substitutePlayers.innerHTML = ''
    newPlayers.forEach(element => {
        substitutePlayers.innerHTML += playercardUI(element)
    });
}

cancelModal.onclick = function () {

    newPlayers = [];
    titulaireModal.style.display = "none";
}

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

function playercardUI(addedplayer) {
    let playerImage = addedplayer.AddedManually ? '' : addedplayer.photo;
    if (addedplayer.position === "GK") {
        return `
        <div class="relative flex justify-center items-center" onclick='selectedPlayer(${JSON.stringify(addedplayer)})'>
               
            <img src="./src/assets/img/card12-removebg-preview.png" height="150" width="160" alt="">
            <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <i class="fas fa-trash-alt absolute top-2 right-1 bg-white text-red-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-red-500 hover:text-white transition duration-200 ease-in-out" title="Delete"></i>
                    <i class="fas fa-edit absolute top-2 left-0 bg-white text-blue-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out" title="Edit"></i>
                ${playerImage ? `<img src="${playerImage}" class="absolute object-contain mb-16" height="90" width="100">` : ''}
                <div class="absolute object-contain" 
                    style="top: 36%; left: 45%; transform: translate(-50%, -50%); height: 90px; width: 100px;">
                    <div class="font-bold text-[0.7rem]">${addedplayer.rating}</div>
                    <div class="font-semibold text-[0.7rem]">${addedplayer.position}</div>
                </div>
                <div class="absolute top-[60%] text-center text-white">
                    <div class="font-bold text-[0.8rem]">${addedplayer.name}</div>
                    <div class="flex font-bold text-[0.6rem] gap-1">
                        <div class="flex flex-col">
                            <span>DIV</span>
                            <span>${addedplayer.diving}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>HAN</span>
                            <span>${addedplayer.handling}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>KIC</span>
                            <span>${addedplayer.kicking}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>REF</span>
                            <span>${addedplayer.reflexes}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>SPD</span>
                            <span>${addedplayer.speed}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>POS</span>
                            <span>${addedplayer.positioning}</span>
                        </div>
                    </div>
                    <div class="flex justify-center items-center mt-1">
                        <img src="${addedplayer.flag}" alt="Country Flag" class="w-4 h-3 mx-1" />
                        <img src="${addedplayer.logo}" alt="Team Logo" class="w-4 h-4 mx-1" />
                    </div>
                </div>
            </div>
        </div>`;
    } else {
        return `
        <div class="relative flex justify-center items-center" onclick='selectedPlayer(${JSON.stringify(addedplayer)})'>
    
            <img src="./src/assets/img/card12-removebg-preview.png" height="150" width="160" alt="">
            <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <i class="fas fa-trash-alt absolute top-2 right-1 bg-white text-red-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-red-500 hover:text-white transition duration-200 ease-in-out" title="Delete"></i>
                    <i class="fas fa-edit absolute top-2 left-0 bg-white text-blue-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out" title="Edit"></i>
                ${playerImage ? `<img src="${playerImage}" class="absolute object-contain mb-16" height="90" width="100">` : ''}
                <div class="absolute object-contain" 
                    style="top: 36%; left: 45%; transform: translate(-50%, -50%); height: 90px; width: 100px;">                 
                    <div class="font-bold text-[0.7rem]">${addedplayer.rating}</div>
                    <div class="font-semibold text-[0.7rem]">${addedplayer.position}</div>
                </div>
                <div class="absolute top-[60%] text-center text-white">
                    <div class="font-bold text-[0.8rem]">${addedplayer.name}</div>
                    <div class="flex font-bold text-[0.6rem] gap-1">
                        <div class="flex flex-col">
                            <span>PAC</span>
                            <span>${addedplayer.pace}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>SHO</span>
                            <span>${addedplayer.shooting}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PAS</span>
                            <span>${addedplayer.passing}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DRI</span>
                            <span>${addedplayer.dribbling}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>DEF</span>
                            <span>${addedplayer.defending}</span>
                        </div>
                        <div class="flex flex-col">
                            <span>PHY</span>
                            <span>${addedplayer.physical}</span>
                        </div>
                    </div>
                    <div class="flex justify-center items-center mt-1">
                        <img src="${addedplayer.flag}" alt="Country Flag" class="w-4 h-3 mx-1" />
                        <img src="${addedplayer.logo}" alt="Team Logo" class="w-4 h-4 mx-1" />
                    </div>

                </div>
            </div>
        </div>`;
    }
}

function selectedPlayer(addedplayer) {
    document.getElementById(addedplayer.position).innerHTML = playercardUI(addedplayer);

    newPlayers = [];
    titulaireModal.style.display = "none";
}


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

    let moyenne = Math.round(
        (parseInt(PAC) + parseInt(SHO) + parseInt(PAS) + parseInt(DRI) + parseInt(DEF) + parseInt(PHY)) / 6
    );

    let playerImages = {
        player1: "https://cdn.sofifa.net/players/190/871/25_120.png",
        player2: "https://cdn.sofifa.net/players/020/801/25_120.png",
        player3: "https://cdn.sofifa.net/players/192/985/25_120.png",
        player4: "https://cdn.sofifa.net/players/231/747/25_120.png",
        player5: "https://cdn.sofifa.net/players/203/376/25_120.png",
        player6: "https://cdn.sofifa.net/players/158/023/25_120.png",
        player7: "https://cdn.sofifa.net/players/205/452/25_120.png",
        player8: "https://cdn.sofifa.net/players/212/622/25_120.png",
        player9: "https://cdn.sofifa.net/players/192/985/25_120.png",
    }

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
        team8: "https://cdn.sofifa.net/meta/team/476/120.png",
        team9: "https://cdn.sofifa.net/meta/team/591/120.png",
    };

    function deleteCard(event) {
        const card = event.target.closest('.border-md'); // Trouve l'élément parent de la poubelle (la carte)
        if (card) {
            card.remove(); // Supprime la carte du joueur
        }
    }

    Remplacement.addEventListener('click', (event) => {
        if (event.target.classList.contains('fa-trash-alt')) { // Suppression
            deleteCard(event);
        } else if (event.target.classList.contains('fa-edit')) { // Modification
            editCard(event);
        }
    });

    function getRandomPlayerKey(obj) {
        const keys = Object.keys(obj); // Récupère toutes les clés
        const randomIndex = Math.floor(Math.random() * keys.length);

        return keys[randomIndex];
    }

    let randomPlayerKey = getRandomPlayerKey(playerImages);

    let addedplayer = {
        "name": playername,
        "photo": playerImages[randomPlayerKey], // Cette photo peut être vide si nécessaire
        "nationality": Nationality,
        "flag": country[Nationality],
        "club": Team,
        "logo": club[Team],
        "position": positionPlayer,
        "rating": moyenne,
        "pace": PAC,
        "shooting": SHO,
        "passing": PAS,
        "dribbling": DRI,
        "defending": DEF,
        "physical": PHY,
        "diving": DIV,
        "handling": HAN,
        "kicking": KIC,
        "reflexes": REF,
        "speed": SPD,
        "positioning": POS,
        "AddedManually": true // Attribut pour savoir si le joueur est ajouté manuellement
    };



    jsonPlayers.push(
        addedplayer
    )
    let newcard = document.createElement("div");
    newcard.classList.add("border-md", "border-black", "hover:scale-110", "transition", "duration-200", "cursor-pointer");
    if (positionPlayer === "GK") {
        newcard.innerHTML = `
            <div class="relative flex justify-center items-center">

                <img src="./src/assets/img/card12-removebg-preview.png" height="150" width="160" alt="">
                <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <i class="fas fa-trash-alt absolute top-2 right-1 bg-white text-red-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-red-500 hover:text-white transition duration-200 ease-in-out" title="Delete"></i>
                    <i class="fas fa-edit absolute top-2 left-0 bg-white text-blue-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out" title="Edit"></i>
                    <div class="absolute left-[13%] top-[15%] text-center text-white">
                        <div class="font-bold text-[0.7rem]">${addedplayer.rating}</div>
                        <div class="font-semibold text-[0.7rem]">${addedplayer.position}</div>
                    </div>
                    <div class="absolute top-[60%] text-center text-white">
                        <div class="font-bold text-[0.8rem]">${addedplayer.name}</div>
                        <div class="flex font-bold text-[0.6rem] gap-1">
                            <div class="flex flex-col">
                                <span>DIV</span>
                                <span>${addedplayer.diving}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>HAN</span>
                                <span>${addedplayer.handling}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>KIC</span>
                                <span>${addedplayer.kicking}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>REF</span>
                                <span>${addedplayer.reflexes}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>SPD</span>
                                <span>${addedplayer.speed}</span>
                            </div>
                            <div class="flex flex-col">
                                <span>POS</span>
                                <span>${addedplayer.positioning}</span>
                            </div>
                        </div>
                        <div class="flex justify-center items-center mt-1">
                        <img src="${addedplayer.flag}" alt="Country Flag" class="w-4 h-3 mx-1" />
                        <img src="${addedplayer.logo}" alt="Team Logo" class="w-4 h-4 mx-1" />
                     </div>

                 </div>          
                </div>
            </div>
        `;
    } else {
        newcard.innerHTML = playercardUI(addedplayer)
    }

    Remplacement.appendChild(newcard);
    playercard.reset();
    modal.classList.add('hidden');

});