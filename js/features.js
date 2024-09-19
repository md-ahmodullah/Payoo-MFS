document.getElementById('show-btn-add-money').addEventListener('click', function(){
    document.getElementById('cash-out-display').classList.add('hidden');
    document.getElementById('add-money-display').classList.remove('hidden');
})

document.getElementById('show-btn-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-display').classList.remove('hidden');
    document.getElementById('add-money-display').classList.add('hidden');
})
