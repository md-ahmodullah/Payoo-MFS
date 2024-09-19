// step-1: set event handler
document.getElementById('btn-login').addEventListener('click', function(event) {
    // step-2: set preventDefault()
    event.preventDefault();
    
    // step-3: get phone number and pin
    const phoneNumber = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;

    // step-4 : validate
    // Bad way temporary practice
    if (phoneNumber == '01580521689' && pin == '1234' ) {
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin.');
    }
})


