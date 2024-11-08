// Ты чё, ебанутый? Ты чё тут делаешь?
const loaderContainer = document.getElementById("loaderContainer");
const loaderTitle = document.getElementById("loaderTitle");
const loaderText = document.getElementById("loaderText");
const finalMessage = document.getElementById("finalMessage");
const finalText = document.getElementById("finalText");
const optionButtons = document.querySelectorAll(".option-button");

// @OriginalMotherfucker
const employeeMessages = [
    "Сверяем базы данных...",
    "Проверяем список сотрудников...",
    "Производим авторизацию...",
    "Получаем данные доступа..."
];

const forceDoorMessages = [
    "Смотрим историю вашего браузера...",
    "Сильно удивляемся...",
    "Ну вы даете!",
    "Это вообще легально?!",
    "Делаем выводы..."
];

// Функция показа лоадера и сообщений
function showLoader(title, messages, duration, finalMessageText) {
    console.log("Начинаем последовательность загрузки...");

    // Прячем главный контейнер и показываем лоадер
    document.querySelector(".container").style.display = "none";
    loaderContainer.style.display = "flex";
    loaderTitle.textContent = title;
    console.log("Лоадер заголовок:", title);

    // Устанавливаем начальное сообщение
    let messageIndex = 0;
    loaderText.textContent = messages[messageIndex];
    console.log("Первое сообщение:", messages[messageIndex]);

    // Обновление сообщений на экране с интервалом
    const messageInterval = setInterval(() => {
        messageIndex++;
        if (messageIndex < messages.length) {
            loaderText.textContent = messages[messageIndex];
            console.log("Обновлено сообщение:", messages[messageIndex]);
        }
    }, duration / messages.length);

    // Таймер для окончания загрузки и показа финального сообщения
    setTimeout(() => {
        clearInterval(messageInterval);
        loaderContainer.style.display = "none";
        finalMessage.style.display = "block";
        finalText.textContent = finalMessageText;
        console.log("Показано финальное сообщение:", finalMessageText);
    }, duration);
}

// Обработчики для каждой кнопки
optionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const option = button.textContent;
        console.log("Нажата кнопка:", option);

        if (option === "Я сотрудник") {
            showLoader("Пожалуйста, ожидайте", employeeMessages, 6000, "Сотрудник не распознан, вход запрещен!");
        } else if (option === "Немедленно открой дверь!") {
            showLoader("Начато сканирование, пожалуйста, ожидайте...", forceDoorMessages, 10000, "В доступе отказано! Теперь вы прокляты. Хорошего вам дня!");
        } else if (option === "А чё там внутри вообще?") {
            // Действие для третьей кнопки
            loaderContainer.style.display = "none";
            finalMessage.style.display = "block";
            finalText.innerHTML = '<img src="URL_вашего_изображения" alt="Картинка" style="max-width: 100%;">'; // Вставьте ссылку на картинку
            console.log("Показана картинка для варианта: А чё там внутри вообще?");
        }
    });
});
