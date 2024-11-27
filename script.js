const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const openModalButtons = document.querySelectorAll('.openModalButton');
const listeCarte=document.querySelectorAll('.carte');
let playercard = document.getElementById("playerForm");
let Remplacement = document.getElementById("Remplacement");
const openModal = () => {
    modal.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
};

openModalButtons.forEach((button) => {
    button.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

listeCarte.forEach((carte)=>{
    carte.addEventListener('click',()=>{
        afficherListePlayer(carte);
    })
})

let players=[];

playercard.addEventListener("submit", function(event){
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
    

    let newcard = document.createElement("div");
    newcard.classList.add("border-md", "border-black", "p-2");
    newcard.innerHTML =`
    <div class="carte p-6 rounded-lg relative bg-cover bg-center" 
                            style="background-image: url('./src/assets/img/badge_gold.webp');">
                        <div class="flex text-black text-center mt-2">${positionPlayer}</div>

                            <div class="flex justify-center items-center">
                                <img src="https://cdn.sofifa.net/players/190/871/25_120.png" alt="Sub Player"
                                    class="h-16 w-16 object-contain">
                            </div>

                            <div class="flex justify-center items-center mt-2">
                                <img src="https://cdn.sofifa.net/flags/br.png" alt="Brazil Flag" class="w-6 h-4 mx-1" />
                                <img src="https://cdn.sofifa.net/meta/team/7011/120.png" alt="Al-Hilal Logo"
                                    class="w-6 h-6 mx-1" />
                            </div>
                        </div>
    `
    Remplacement.appendChild(newcard);
    playercard.reset();
    modal.classList.add('hidden');

});


//  positionPlayer.addEventListener('change',()=>{
//     if(positionPlayer.value=="GK")
//     {
//         statistique.innerHTML=`
//         <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         `
//     }else{
//         statistique.innerHTML=
//         `
//          <label for="" >rating</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >pace</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >shooting</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >passing</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >dribbling</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >defending</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         <label for="" >physical</label>
//         <input type="number" class="rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Player's note">
//         `
//     }
// })