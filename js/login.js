// step-1 
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step-3
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step-4 verify email and password
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('tejjo');
    }

})

