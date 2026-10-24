// Порахує й виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories
// знайде й виведе в консоль текст заголовка елемента (тегу <h2>)
//  і кількість елементів у категорії (усіх <li>,
// вкладених у нього).
const items = document.querySelectorAll('.item');
const itemsQuantity = items.length;
console.log(`Number of categories: ${itemsQuantity}`);
items.forEach(item => {
  const nameCategory = item.firstElementChild.textContent;
  console.log(`Category: ${nameCategory}`);
  const listCategory = item.children[1].querySelectorAll('li').length;
  console.log(`Elements: ${listCategory}`);
});
