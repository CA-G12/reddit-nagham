const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const img = document.querySelector('#image');
const btn = document.querySelector('.logBtn');
const errorHolder = document.querySelector('.error');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('/signup',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value,
        })
    }).then(data => data.json().then(result => {
        if(result.msg){
            error(result.msg);
        }else{
            window.location.href = '../index.html';
        }
    }))
    

})

const error = (error) => {
    errorHolder.textContent = error;
}


