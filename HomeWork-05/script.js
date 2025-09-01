/*  Задания:
  Все запросы выполняем к сервису https://jsonplaceholder.typicode.com/.
  В каждой задаче обязательно использовать fetch, работать с Promise и обрабатывать ошибки (сеть, статус ответа).*/

/* 1. GET
Сделать запрос на https://jsonplaceholder.typicode.com/posts/1.

Вывести в консоль заголовок поста (title).

Если запрос завершился ошибкой, вывести "Ошибка запроса".*/

const p = fetch("https://jsonplaceholder.typicode.com/posts/1")

p.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`)
  }
  return response.json()
})
  .then(data => {
    console.log(data.title)
  })
  .catch(error => {
    console.log("Ошибка запроса")
  });

//-------------------------------------------------------------------//
/* 2. POST
Отправить запрос POST на https://jsonplaceholder.typicode.com/posts с телом:
{
"title": "My homework post",
"body": "This is a test post",
"userId": 1
}
Получить ответ и вывести в консоль id созданного поста.
Если сервер вернул ошибку (!response.ok), вывести "Ошибка создания поста".*/

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My homework post",
    body: "This is a test post",
    userId: 1,
  }),
})

  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`)
    }
    return response.json()
  })

  .then(data => {
    console.log("Создан пост с id:", data.id)
  })

  .catch(error => {
    console.log("Ошибка создания поста", error)
  })

  //-------------------------------------------------------------------//
/* 3. PUT
Обновить пост с id=1 (адрес: https://jsonplaceholder.typicode.com/posts/1) методом PUT.
Тело запроса:
{
"id": 1,
"title": "Updated title",
"body": "Updated body",
"userId": 1
}
Вывести в консоль обновлённый заголовок (title).
Если запрос неудачный, вывести "Ошибка обновления поста".
*/

const updatedPost = {
  id: 1,
  title: "Updated title",
  body: "Updated body",
  userId: 1,
}

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedPost),
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Ошибка обновления поста")
    }
    return response.json()
  })

  .then(data => {
    console.log("Обновлённый заголовок:", data.title)
  })

  .catch(error => {
    console.log(error.message)
  })


  //-------------------------------------------------------------------//
/* 4. PATCH
Изменить только поле title у поста с id=1 методом PATCH.
Запрос:
{
"title": "Patched title"
}
Вывести в консоль новый title.
В случае ошибки — вывести "Ошибка изменения поста".
*/

const patchedPost = {
  title: "Patched title"
};

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(patchedPost)
})

  .then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }
  return response.json();    
})

  .then((data) => {
  console.log("Новый заголовок:", data.title);
})

  .catch((error) => {
  console.log("Ошибка создания поста", error);
});


//-------------------------------------------------------------------//
/* 5. DELETE
Удалить пост с id=1 (адрес: https://jsonplaceholder.typicode.com/posts/1).
Если ответ успешный (status === 200), вывести "Пост удалён".
Если нет — вывести "Ошибка удаления поста".
*/

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then(response => {
    if (response.status === 200) {
      console.log("Пост удалён")
    } else {
      throw new Error("Ошибка удаления поста")
    }
  })
  .catch(error => {
    console.log(error)
  })
