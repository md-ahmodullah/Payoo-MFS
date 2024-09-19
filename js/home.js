document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const pin = document.getElementById('pin').value;
    if (pin == '1234') {
        const addAmount = Number(document.getElementById('add-amount').value);
        const currentBalance = Number(document.getElementById('current-balance').innerText);
        const newBalance = addAmount + currentBalance;

        document.getElementById('current-balance').innerText = newBalance;
        
    }
    else{
        alert("Please Input Correct PIN.");
    }
})
