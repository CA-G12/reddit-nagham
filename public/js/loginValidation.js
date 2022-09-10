const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const btn = document.querySelector('.logBtn');
const error = document.querySelector('.error');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('/login',{
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
        })
    }).then(data =>data.json())
    .then(result => {
        if(result.msg){
            error.textContent = result.msg;
            console.log(result.msg);
        }else{
            window.location.href = '../index.html';
        }
    })
})