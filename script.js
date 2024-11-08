// Получаем ссылки на элементы
const loaderContainer = document.getElementById("loaderContainer");
const loaderTitle = document.getElementById("loaderTitle");
const loaderText = document.getElementById("loaderText");
const finalMessage = document.getElementById("finalMessage");
const finalText = document.getElementById("finalText");
const optionButtons = document.querySelectorAll(".option-button");

// Сообщения для разных вариантов
const employeeMessages = [
    "Сверяем базы данных...",
    "Проверяем список сотрудников...",
    "Производим авторизацию...",
    "Получаем данные доступа..."
];

const forceDoorMessages = [
    "Смотрим историю вашего браузера...",
    "Сильно удивляемся...",
    "Ну вы даёте!",
    "Это вообще легально?!",
    "Делаем выводы..."
];

// Функция для показа лоадера с последовательными сообщениями
function showLoader(title, messages, duration, finalMessageText) {
    console.log("Запуск функции showLoader");

    // Прячем основной экран и показываем лоадер
    document.querySelector(".container").style.display = "none";
    loaderContainer.style.display = "flex";
    loaderTitle.textContent = title;

    // Устанавливаем начальное сообщение и запускаем цикл сообщений
    let messageIndex = 0;
    loaderText.textContent = messages[messageIndex];
    console.log("Первое сообщение:", messages[messageIndex]);

    const messageInterval = setInterval(() => {
        messageIndex++;
        if (messageIndex < messages.length) {
            loaderText.textContent = messages[messageIndex];
            console.log("Обновлено сообщение:", messages[messageIndex]);
        }
    }, duration / messages.length);

    // Финальное сообщение и завершение лоадера
    setTimeout(() => {
        console.log("Завершение загрузки и показ финального сообщения");
        clearInterval(messageInterval);
        loaderContainer.style.display = "none";
        finalMessage.style.display = "block";
        finalText.textContent = finalMessageText;
    }, duration);
}

// Обработчики для каждой кнопки
optionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const option = button.textContent;
        console.log("Нажата кнопка:", option);

        // Проверка по тексту кнопки, что именно было выбрано
        if (option === "Я сотрудник") {
            showLoader("Пожалуйста, ожидайте", employeeMessages, 6000, "Сотрудник не распознан, вход запрещен!");
        } else if (option === "Немедленно открой дверь!") {
            showLoader("Начато сканирование, пожалуйста, ожидайте...", forceDoorMessages, 10000, "В доступе отказано! Теперь вы прокляты.");
        } else if (option === "А чё там внутри вообще?") {
            console.log("Выбран вариант с картинкой");
            document.querySelector(".container").style.display = "none";
            loaderContainer.style.display = "none";
            finalMessage.style.display = "block";
            finalText.innerHTML = '<img src="URL_вашего_изображения" alt="Советую спросить в магните" style="max-width: 100%;">';
        }
    });
});
