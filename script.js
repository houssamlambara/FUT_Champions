const modal = document.getElementById('modal');
const carte = document.getElementById('carte')
const addPlayerButton = document.getElementById('addPlayerButton');
const closeModalButton = document.getElementById('closeModal');

addPlayerButton.addEventListener('click', function () {
    modal.classList.remove('hidden');
});

closeModalButton.addEventListener('click', function () {
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