/* 
Задача: Валидация email и подсказка 
Добавьте на страницу форму с полем для ввода email и кнопкой "Отправить". 

При вводе email: 
---Если поле пустое — уберите все стили (не добавляйте ни valid, ни invalid). 
---Если email содержит символ @ (см. подсказку ниже) — добавьте к полю класс valid (зелёная рамка). 
---Если email не содержит символ @ — добавьте к полю класс invalid (красная рамка).

Под полем отображайте подсказку:
--- "Введите email" — если поле пустое. 
--- "Email валиден" — если email содержит @. 
--- "Некорректный email" — если email не содержит @. 

Кнопка "Отправить" должна быть неактивна, если email невалиден или пустой. 
При отправке формы (submit) очищайте поле и показывайте сообщение "Email отправлен!" в консоли.
Подсказка: Чтобы проверить, есть ли в строке символ @, используйте метод includes: mystringvariable.includes("@") вернёт true, если символ @ найден в строке в переменной mystringvariable.
*/

const emailInput = document.getElementById("emailInput");
const hint = document.getElementById("hint");
const button = document.querySelector("button");
const form = document.getElementById("emailForm");

emailInput.addEventListener("input", () => {
    const value = emailInput.value;

    if (value === "") {
        emailInput.classList.remove("valid", "invalid");
        hint.textContent = "Введите email";
        button.disabled = true;
    } else if (value.includes("@")) {
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
        hint.textContent = "Email валиден";
        button.disabled = false;
    } else {
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        hint.textContent = "Некорректный email";
        button.disabled = true;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    console.log("Email отправлен!");
    emailInput.value = ""; 
    emailInput.classList.remove("valid", "invalid");
    hint.textContent = "Введите email";
    button.disabled = true;
});
