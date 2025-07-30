/* Комментарии оставляю для себя:) */

/* Практика 1: Используя метод reduce найти самый дорогой товар (то есть результатом reduce должен быть один из элементов массива - объект-описание товара)*/

// {id: 1, title: ‘велосипед’, price: 45000, marks: [4, 5, 3, 5]},
// {id: 2, title: ‘самокат’, price: 15000, marks: [4, 4, 5, 4]},
// {id: 3, title: ‘сноуборд’, price: 20000, marks: [3, 3, 2, 3]},
// {id: 4, title: ‘лыжи’, price: 22000, marks: [4, 4, 3, 4]}

const products = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] }
];

const maxPrice = products.reduce((maxProduct, itemProduct) => {
  if (itemProduct.price > maxProduct.price) {
    return itemtProduct;
  } else {
    return maxProduct;
  }
});

console.log(maxPrice);


/*---------------------------------------------------------------------*/
/* Практика 2: Преобразовать объекты в массиве так, чтобы в итоге массив состоял из объектов со свойствами id, title, price, summark, где summark - это сумма оценок в marks)*/

const items = [
  { id: 1, title: 'велосипед', price: 45000, marks: [4, 5, 3, 5] },
  { id: 2, title: 'самокат', price: 15000, marks: [4, 4, 5, 4] },
  { id: 3, title: 'сноуборд', price: 20000, marks: [3, 3, 2, 3] },
  { id: 4, title: 'лыжи', price: 22000, marks: [4, 4, 3, 4] },
];
const newArr = items.map(item => {
  const summark = item.marks.reduce((acc, mark) => acc + mark, 0);
  
  return {
    id: item.id,
    title: item.title,
    price: item.price,
    summark: summark
  };
});

console.log(newArr);
// map() — создаёт новый массив, где каждый объект будет обновлён.
// reduce() — используется для вычисления суммы оценок в marks.


/*---------------------------------------------------------------------*/
/* Практика 3: найти сумму всех элементов массива, не используя второй аргумент reduce (который аккумулятор) [1,4,3,2,5]*/

// Возможно я не правильно поняла условие, так как очень просто получается...

const arr = [1,4,3,2,5];

const sum = arr.reduce((acc, num) => acc + num);

console.log(sum);
