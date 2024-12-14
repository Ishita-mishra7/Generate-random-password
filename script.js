document.getElementById('btn').addEventListener('click', generatePassword);

function generatePassword() {
    fetch('https://password.ninja/api/password')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const passwordInput = document.getElementById('passwordInput');
            if (data && data.password) {
                passwordInput.value = data.password;
            } else {
                passwordInput.value = 'Failed to generate password';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            const passwordInput = document.getElementById('passwordInput');
            passwordInput.value = 'Error: ' + error.message;
        });
}




document.getElementById('copy').addEventListener('click',copyPassword);

function copyPassword(){
    console.log("copied");
    passwordInput.select();
    document.execCommand("copy");
}




    









