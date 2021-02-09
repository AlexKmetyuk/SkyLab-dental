
let user_name = document.getElementById('user-name');
let phone = document.getElementById('tel');
let email = document.getElementById('email');
let comment = document.getElementById('comment');

let form = document.getElementById('modal-form');
let btn = document.getElementById('submit-btn')

function getClientInfo(){
    
    let client_info = {
        'Имя': user_name.value,
        'Телефон': phone.value,
        'Почта': email.value,
        'Комментарий': comment.value
    }

    let arr =[];
    for (const key in client_info) {
    arr.push(key + ': ' + client_info[key])
    
    }   
    let txt = arr.join('    ')
    return txt
}

btn.addEventListener('click', e => {
    form.setAttribute('action', `https://api.telegram.org/bot1567344190:AAGJOym1zRzGxzrCa4qHom70VLgIcaHy2f8/sendMessage?chat_id=-1001391095034&parse_mode=html&text=${getClientInfo()}`);


})
