let cookie = document.getElementById('cookie');

cookie.addEventListener('click', () => {
    let countElement = document.getElementById('clicker__counter');
    let counter = Number(countElement.textContent);

    counter++
    countElement.textContent = counter;

    if(counter % 2){
       cookie.width += 100;
       cookie.height += 64;
    } else {
       cookie.width -= 100;
       cookie.height -= 64;
    }
})
