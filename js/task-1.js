const listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);

const MessageTextContent = listItem.forEach(el => {
  const title = el.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  const arrayOfCategoriesItems = el.querySelectorAll('li');
  console.log(`Elements: ${arrayOfCategoriesItems.length}`);
});
