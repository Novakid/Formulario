const newitem = () => {
    const name = document.getElementById('Nombre').value;
    const lastname = document.getElementById('Apellido').value;
    const fre = document.getElementById('FRegistro').value;
    const nickname = document.getElementById('Nickname').value;

    sessionStorage.setItem('Nombre', name);
    sessionStorage.setItem('Apellido', lastname);
    sessionStorage.setItem('FRegistro', fre);
    sessionStorage.setItem('Nickname', nickname);

    view();
}
const view = () => {
    let list = document.getElementById('list');

    for(let i = 0; i<sessionStorage.length; i++){
        let key = sessionStorage.key(i);
        let value = sessionStorage.getItem(key);

        list.innerHTML += `<li><b>${key}-${value}</b></li>`;
    }
}

const button = () => {
    const submit = document.getElementById('submit');

    submit.addEventListener('click', newitem);
    
    view();
}

window.addEventListener('load', button);