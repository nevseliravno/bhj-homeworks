let element = document.getElementById('timer')

if (element){
    let time = Number(element.textContent);
    const intervalId = setInterval(() => {
        time--;
        element.textContent = time;

        if(time === 0){
            clearInterval(intervalId);
            alert('Вы победили в конкурсе!');
        }
    },1000)
}