document.getElementById("toilet-access-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Показываем лоадер и скрываем форму
    document.querySelector(".container").style.display = "none";
    document.getElementById("loaderContainer").style.display = "flex";

    // Массив сообщений, которые будут отображаться во время "загрузки"
    const messages = [
        "Связываемся с сервером обработки данных...",
        "Подключаем слитые базы имён...",
        "Ищем ваш номер среди VIP-клиентов...",
        "Делаем расклад Таро...",
        "Проводим астрологическую оценку...",
        "Настраиваем кристаллы...",
        "Подключаем высшие силы для верификации..."
    ];

    let messageIndex = 0;
    const loaderText = document.getElementById("loaderText");

    // Функция для смены сообщений каждые 2 секунды
    const messageInterval = setInterval(() => {
        loaderText.textContent = messages[messageIndex];
        messageIndex++;

        // Останавливаем показ сообщений, когда они заканчиваются
        if (messageIndex >= messages.length) {
            clearInterval(messageInterval);
            showFinalMessage(); // Показываем финальное сообщение
        }
    }, 2000);

    // Функция для отображения финального экрана с отказом
    function showFinalMessage() {
        document.getElementById("loaderContainer").style.display = "none";
        document.getElementById("finalMessage").style.display = "block";
    }
});
