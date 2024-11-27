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
    newcard.innerHTML = `
                <div class="relative flex justify-center items-center">
        <img src="./src/assets/img/cart-1.png" class="object-contain" height="170" width="120" alt="">
        <div class="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <img src="https://cdn.sofifa.net/players/020/801/25_120.png" alt="Left ST" class="object-contain mb-4" height="60" width="80">
            <div class="absolute left-[23%] top-[20%] text-center text-white">
                <div class="font-bold text-xs">97</div>
                <div class="font-semibold text-[0.5rem]">${positionPlayer}</div>
            </div>
            <div class="absolute top-[64%] text-center text-white">
                <div class="font-bold text-[0.5rem]">${playername}</div>
                <div class="flex font-semibold text-[0.4rem] gap-1">
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
            </div>
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