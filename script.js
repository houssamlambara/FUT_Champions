const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalButton');
const openModalButtons = document.querySelectorAll('.openModalButton');

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