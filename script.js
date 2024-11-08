// Элементы для управления
const loaderContainer = document.getElementById("loaderContainer");
const loaderText = document.getElementById("loaderText");
const loaderTitle = document.getElementById("loaderTitle");
const finalMessage = document.getElementById("finalMessage");
const finalText = document.getElementById("finalText");

// Сообщения для каждой кнопки
const employeeMessages = [
    "Сверяем базы данных...",
    "Проверяем список сотрудников...",
    "Сканируем для аутентификации...",
    "Выявляем личность..."
];
const demandMessages = [
    "Смотрим историю вашего браузера...",
    "Сильно удивляемся...",
    "Ну вы даете!",
    "Это вообще легально?!"
];

// Обработка нажатия кнопки "Я сотрудник"
document.getElementById("employeeButton").addEventListener("click", () => {
    showLoader("Пожалуйста, ожидайте", employeeMessages, 6000, "Сотрудник не распознан, вход запрещен!");
});

// Обработка нажатия кнопки "Немедленно открой дверь!"
document.getElementById("demandAccessButton").addEventListener("click", () => {
    showLoader("Начато сканирование, пожалуйста, ожидайте...", demandMessages, 10000, "В доступе отказано! Теперь вы прокляты. Хорошего вам дня!");
});

// Обработка нажатия кнопки "А чё там внутри вообще?"
document.getElementById("curiousButton").addEventListener("click", () => {
    window.location.href = "https://example.com/your-image-link.jpg"; // Ссылка на картинку
});

// Функция для показа лоадера и сообщений
function showLoader(title, messages, duration, finalMessageText) {
    document.querySelector(".container").style.display = "none";
    loaderContainer.style.display = "flex";
    loaderTitle.textContent = title;

    let messageIndex = 0;
    loaderText.textContent = messages[messageIndex];

    // Таймер для смены сообщений
    const messageInterval = setInterval(() => {
        messageIndex++;
        if (messageIndex < messages.length) {
            loaderText.textContent = messages[messageIndex];
        }
    }, duration / messages.length);

    // Таймер для финального экрана
    setTimeout(() => {
        clearInterval(messageInterval);
        loaderContainer.style.display = "none";
        finalMessage.style.display = "block";
        finalText.textContent = finalMessageText;
    }, duration);
}
