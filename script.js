// script.js

const button = document.getElementById("magic-button");
const message = document.getElementById("message");

let clickCount = 0;

// Функция для случайного перемещения кнопки
function moveButton() {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

// Функция, которая срабатывает при попытке клика
function handleClick() {
    clickCount++;

    if (clickCount < 5) {
        moveButton(); // Перемещаем кнопку на новое случайное место
    } else {
        button.classList.add("hidden"); // Скрываем кнопку
        message.classList.remove("hidden"); // Показываем сообщение об отказе
    }
}

// Назначаем функции перемещения и клика на кнопку
button.addEventListener("mouseover", moveButton);
button.addEventListener("click", handleClick);
