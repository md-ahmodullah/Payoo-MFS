document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const pin = document.getElementById('pin-minus').value;
    if (pin == '1234') {
        const minusAmount = Number(document.getElementById('minus-amount').value);
        const currentBalance = Number(document.getElementById('current-balance').innerText);
        const newBalance = currentBalance - minusAmount;

        document.getElementById('current-balance').innerText = newBalance;
        
    }
    else{
        alert("Please Input Correct PIN.");
    }
})