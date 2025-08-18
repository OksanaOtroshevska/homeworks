//Задача 1:
// Создайте объект profile с полями name (строка), age (число), isStudent (boolean).
// Сохраните этот объект в localStorage в виде строки JSON.
// Затем получите его обратно из localStorage, распарсьте и выведите в консоль имя пользователя.

const profile = {
  name: 'Oksana',
  age: 40,
  isStudent: true
};

const profileJSON = JSON.stringify(profile);

window.localStorage.setItem('profile-my', profileJSON);

const profileFromStorage = window.localStorage.getItem('profile-my');

if (profileFromStorage !== null) {
  const profileParsed = JSON.parse(profileFromStorage);
  console.log(profileParsed.name);
}


// Задача 2:
// Напишите функцию saveSessionData, которая принимает объект с произвольными данными,
// преобразует его в JSON и сохраняет в sessionStorage под ключом "session-data".
// Затем напишите функцию loadSessionData, которая получает эти данные из sessionStorage и возвращает распарсенный объект.

function saveSessionData(data) {
  const jsonData = JSON.stringify(data); 
  window.sessionStorage.setItem('session-data', jsonData);
}

function getSessionStorage() {
  const jsonData = window.sessionStorage.getItem('session-data'); 
  if(jsonData !== null) {
    return JSON.parse(jsonData); 
  }
  return null; 
}

saveSessionData({ name: "Oksana", age: 40 });

const sessionObj = getSessionStorage();
console.log(sessionObj); 

