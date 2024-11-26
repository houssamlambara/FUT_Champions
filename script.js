 const modal = document.getElementById('modal');
 const addPlayerButton = document.getElementById('addPlayerButton');
 const closeModalButton = document.getElementById('closeModal');

 addPlayerButton.addEventListener('click', function() {
     modal.classList.remove('hidden');  
 });

 closeModalButton.addEventListener('click', function() {
     modal.classList.add('hidden');  
 });