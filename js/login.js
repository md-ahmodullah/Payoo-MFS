// step-1: set event handler
document.getElementById('btn-login').addEventListener('click', function(event) {
    // step-2: set preventDefault()
    event.preventDefault();
    console.log('clicked');
    
    // step-3: get phone number
    const phoneNumber = document.getElementById('phone').value;
    console.log(phoneNumber);
})


