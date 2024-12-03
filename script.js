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
const positionPlayer = document.getElementById('positionPlayer');
const GKStats = document.getElementById('GKStats');
const fieldPlayerStats = document.getElementById('fieldStats'); // Note: Changed selector to match your HTML

positionPlayer.addEventListener('change', function () {
    if (this.value === 'GK') {
        GKStats.classList.remove('hidden');
        fieldPlayerStats.classList.add('hidden');
    } else {
        GKStats.classList.add('hidden');
        fieldPlayerStats.classList.remove('hidden');
    }
});


let jsonPlayers;
let newPlayers = [];
let playerToEdit = null;

fetch('./players.json')
    .then(res => res.json())
    .then(data => {
        jsonPlayers = data.players;
    });

titulaireButton.forEach(button => {
    button.onclick = function () {
        titulaireModal.style.display = "flex";
        let role = button.innerHTML;

        newPlayers = [];
        jsonPlayers.forEach(element => {
            if (element.position == role) {
                newPlayers.push(element);
            }
        });

        listplayer();
    };
});

const playerImages = {
    player1: "https://cdn.sofifa.net/players/190/871/25_120.png",
    player2: "https://cdn.sofifa.net/players/020/801/25_120.png",
    player3: "https://cdn.sofifa.net/players/192/985/25_120.png",
    player4: "https://cdn.sofifa.net/players/231/747/25_120.png",
    player5: "https://cdn.sofifa.net/players/203/376/25_120.png",
    player6: "https://cdn.sofifa.net/players/158/023/25_120.png",
    player7: "https://cdn.sofifa.net/players/205/452/25_120.png",
    player8: "https://cdn.sofifa.net/players/212/622/25_120.png",
    player9: "https://cdn.sofifa.net/players/192/985/25_120.png"
};

const country = {
    BR: "https://cdn.sofifa.net/flags/br.png",
    FR: "https://cdn.sofifa.net/flags/fr.png",
    ARG: "https://cdn.sofifa.net/flags/ar.png",
    MR: "https://cdn.sofifa.net/flags/ma.png",
    EN: "https://cdn.sofifa.net/flags/gb-eng.png",
    IT: "https://cdn.sofifa.net/flags/it.png",
    PR: "https://cdn.sofifa.net/flags/pt.png",
    GR: "https://cdn.sofifa.net/flags/de.png",
    ND: "https://cdn.sofifa.net/flags/nl.png",
    BL: "https://cdn.sofifa.net/flags/be.png"
};

const club = {
    team1: "https://cdn.sofifa.net/meta/team/7980/120.png",
    team2: "https://cdn.sofifa.net/meta/team/2506/120.png",
    team3: "https://cdn.sofifa.net/meta/team/9/120.png",
    team4: "https://cdn.sofifa.net/meta/team/3468/120.png",
    team5: "https://cdn.sofifa.net/meta/team/503/120.png",
    team6: "https://cdn.sofifa.net/meta/team/7011/120.png",
    team7: "https://cdn.sofifa.net/meta/team/14/120.png",
    team8: "https://cdn.sofifa.net/meta/team/476/120.png",
    team9: "https://cdn.sofifa.net/meta/team/591/120.png"
};

// Add function to get random player image
function getRandomPlayerKey(obj) {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}


positionPlayer.addEventListener('change', function () {
    if (this.value === 'GK') {
        GKStats.classList.remove('hidden');
        fieldPlayerStats.classList.add('hidden');
    } else {
        GKStats.classList.add('hidden');
        fieldPlayerStats.classList.remove('hidden');
    }
});

// Modal handlers
const openModal = () => {
    modal.classList.remove('hidden');
    // Reset form when opening
    playercard.reset();
    // Reset playerToEdit
    playerToEdit = null;
    // Reset position-specific stats visibility
    GKStats.classList.add('hidden');
    fieldPlayerStats.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    playerToEdit = null;
};

openModalButtons.forEach((button) => {
    button.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Initialize jsonPlayers if fetch fails
if (!jsonPlayers) {
    jsonPlayers = [];
}


function listplayer() {
    substitutePlayers.innerHTML = '';
    newPlayers.forEach(element => {
        substitutePlayers.innerHTML += playercardUI(element);
    });
}

function deletePlayer(player, cardElement) {
    // Remove from jsonPlayers array
    const index = jsonPlayers.findIndex(p => p.name === player.name && p.position === player.position);
    if (index > -1) {
        jsonPlayers.splice(index, 1);
    }

    // Remove from newPlayers array if it exists there
    const newPlayerIndex = newPlayers.findIndex(p => p.name === player.name && p.position === player.position);
    if (newPlayerIndex > -1) {
        newPlayers.splice(newPlayerIndex, 1);
    }

    // Remove the card from DOM
    if (cardElement) {
        cardElement.remove();
    } else {
        // Refresh the display
        listplayer();
    }
}

function editPlayer(player) {
    playerToEdit = player;

    // Populate form with player data
    document.getElementById('Name').value = player.name;
    document.getElementById('Nationality').value = player.nationality;
    document.getElementById('Team').value = player.club;
    document.getElementById('positionPlayer').value = player.position;

    if (player.position === 'GK') {
        document.getElementById('DIV').value = player.diving;
        document.getElementById('HAN').value = player.handling;
        document.getElementById('KIC').value = player.kicking;
        document.getElementById('REF').value = player.reflexes;
        document.getElementById('SPD').value = player.speed;
        document.getElementById('POS').value = player.positioning;

        // Show GK stats and hide field player stats
        document.getElementById('GKStats').classList.remove('hidden');
        document.querySelector('.grid.grid-cols-2.gap-4').classList.add('hidden');
    } else {
        document.getElementById('PAC').value = player.pace;
        document.getElementById('SHO').value = player.shooting;
        document.getElementById('PAS').value = player.passing;
        document.getElementById('DRI').value = player.dribbling;
        document.getElementById('DEF').value = player.defending;
        document.getElementById('PHY').value = player.physical;

        // Show field player stats and hide GK stats
        document.getElementById('GKStats').classList.add('hidden');
        document.querySelector('.grid.grid-cols-2.gap-4').classList.remove('hidden');
    }

    // Open modal
    modal.classList.remove('hidden');
}

// Update the playercardUI function to include onclick handlers
function playercardUI(addedplayer) {
    let playerImage = addedplayer.AddedManually ? '' : addedplayer.photo;
    const baseCard = `
        <div class="relative flex justify-center items-center">
            <img src="./src/assets/img/card12-removebg-preview.png" height="150" width="160" alt="">
            <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <i class="fas fa-trash-alt absolute top-2 right-1 bg-white text-red-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-red-500 hover:text-white transition duration-200 ease-in-out" onclick='deletePlayer(${JSON.stringify(addedplayer)}, this.closest(".relative"))' title="Delete"></i>
                <i class="fas fa-plus absolute bottom-2 right-1 bg-white text-green-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-green-500 hover:text-white transition duration-200 ease-in-out" onclick='selectedPlayer(${JSON.stringify(addedplayer)})' title="Add or Replace"></i>
                <i class="fas fa-edit absolute top-2 left-0 bg-white text-blue-500 rounded-full shadow-md p-2 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out" onclick='editPlayer(${JSON.stringify(addedplayer)})' title="Edit"></i>`;

    if (addedplayer.position === "GK") {
        return baseCard + `
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
        return baseCard + `
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
    // Trouver le conteneur correspondant à la position du joueur
    let addPlayer = document.getElementById(addedplayer.position);

    // Supprimer la carte existante dans le slot du joueur
    addPlayer.innerHTML = '';

    // Ajouter la nouvelle carte dans le slot du joueur
    let playerSlot = document.createElement('div');
    playerSlot.innerHTML = playercardUI(addedplayer);
    addPlayer.appendChild(playerSlot);

    // Fermer le modal des joueurs titulaires
    titulaireModal.style.display = "none";

    // Réinitialiser la liste des nouveaux joueurs
    newPlayers = [];
}

playercard.addEventListener("submit", function (event) {
    event.preventDefault();

    // Regex patterns
    const nameRegex = /^[a-zA-ZÀ-ÿ \-']{2,50}$/;
    const nationalityRegex = /^[A-Z]{2}$/;
    const teamRegex = /^[a-zA-Z0-9 \-]{2,50}$/;
    const statRegex = /^([1-9][0-9]?)$/;

    // Get values from the form
    const playername = document.getElementById("Name").value;
    const Nationality = document.getElementById("Nationality").value;
    const Team = document.getElementById("Team").value;
    const positionPlayer = document.getElementById("positionPlayer").value;

    let errors = [];

    // Validate name
    if (!nameRegex.test(playername)) {
        errors.push("Le nom du joueur est invalide. (2 à 50 caractères)");
    }

    // Validate nationality
    if (!nationalityRegex.test(Nationality)) {
        errors.push("La nationalité est invalide.");
    }

    // Validate team
    if (!teamRegex.test(Team)) {
        errors.push("Le nom de l'équipe est invalide.");
    }

    // Validate stats based on position
    if (positionPlayer === "GK") {
        const div = document.getElementById("DIV").value;
        const han = document.getElementById("HAN").value;
        const kic = document.getElementById("KIC").value;
        const ref = document.getElementById("REF").value;
        const spd = document.getElementById("SPD").value;
        const pos = document.getElementById("POS").value;

        if (
            !statRegex.test(div) ||
            !statRegex.test(han) ||
            !statRegex.test(kic) ||
            !statRegex.test(ref) ||
            !statRegex.test(spd) ||
            !statRegex.test(pos)
        ) {
            errors.push("Les statistiques du joueur doivent être des nombres entre 1 et 99.");
        }
    } else {
        const pac = document.getElementById("PAC").value;
        const sho = document.getElementById("SHO").value;
        const pas = document.getElementById("PAS").value;
        const dri = document.getElementById("DRI").value;
        const def = document.getElementById("DEF").value;
        const phy = document.getElementById("PHY").value;

        if (
            !statRegex.test(pac) ||
            !statRegex.test(sho) ||
            !statRegex.test(pas) ||
            !statRegex.test(dri) ||
            !statRegex.test(def) ||
            !statRegex.test(phy)
        ) {
            errors.push("Les statistiques du joueur doivent être des nombres entre 1 et 99.");
        }
    }

    // If there are errors, show them and stop submission
    if (errors.length > 0) {
        alert("Erreurs :\n" + errors.join("\n"));
        return;
    }

    // If validation passes, continue with form processing
    let playerData = {
        name: playername,
        nationality: Nationality,
        club: Team,
        position: positionPlayer,
        flag: country[Nationality],
        logo: club[Team],
        AddedManually: true
    };

    // Calculate average rating based on position
    if (positionPlayer === "GK") {
        const div = parseInt(document.getElementById("DIV").value);
        const han = parseInt(document.getElementById("HAN").value);
        const kic = parseInt(document.getElementById("KIC").value);
        const ref = parseInt(document.getElementById("REF").value);
        const spd = parseInt(document.getElementById("SPD").value);
        const pos = parseInt(document.getElementById("POS").value);

        Object.assign(playerData, {
            diving: div,
            handling: han,
            kicking: kic,
            reflexes: ref,
            speed: spd,
            positioning: pos,
            rating: Math.round((div + han + kic + ref + spd + pos) / 6)
        });
    } else {
        const pac = parseInt(document.getElementById("PAC").value);
        const sho = parseInt(document.getElementById("SHO").value);
        const pas = parseInt(document.getElementById("PAS").value);
        const dri = parseInt(document.getElementById("DRI").value);
        const def = parseInt(document.getElementById("DEF").value);
        const phy = parseInt(document.getElementById("PHY").value);

        Object.assign(playerData, {
            pace: pac,
            shooting: sho,
            passing: pas,
            dribbling: dri,
            defending: def,
            physical: phy,
            rating: Math.round((pac + sho + pas + dri + def + phy) / 6)
        });
    }

    // Add random player image
    let randomPlayerKey = getRandomPlayerKey(playerImages);
    playerData.photo = playerImages[randomPlayerKey];

    if (playerToEdit) {
        // Update existing player in jsonPlayers
        const index = jsonPlayers.findIndex(
            (p) => p.name === playerToEdit.name && p.position === playerToEdit.position
        );
        if (index > -1) {
            jsonPlayers[index] = playerData;
        }

        // Update player in newPlayers if it exists there
        const newPlayerIndex = newPlayers.findIndex(
            (p) => p.name === playerToEdit.name && p.position === playerToEdit.position
        );
        if (newPlayerIndex > -1) {
            newPlayers[newPlayerIndex] = playerData;
        }

        // Find and update the existing card in the DOM
        const allCards = Remplacement.getElementsByClassName("relative");
        for (let card of allCards) {
            const nameElement = card.querySelector(".font-bold.text-\\[0\\.8rem\\]");
            if (nameElement && nameElement.textContent === playerToEdit.name) {
                const parentCard = nameElement.closest(".relative");
                if (parentCard) {
                    parentCard.outerHTML = playercardUI(playerData);
                }
                break;
            }
        }

        // Reset playerToEdit
        playerToEdit = null;
    } else {
        // Add new player
        jsonPlayers.push(playerData);

        // Create and add new card
        let newcard = document.createElement("div");
        newcard.innerHTML = playercardUI(playerData);
        Remplacement.appendChild(newcard);
    }

    // Refresh the display if we're showing filtered players
    if (newPlayers.length > 0) {
        listplayer();
    }

    // Reset form and close modal
    playercard.reset();
    modal.classList.add("hidden");

    // Reset fieldStats visibility
    document.getElementById("fieldStats").classList.add("hidden");
    document.getElementById("GKStats").classList.add("hidden");
});


cancelModal.onclick = function () {
    newPlayers = [];
    titulaireModal.style.display = "none";
};