const products = [
  { id: 1, title: 'Notebook', price: 2000 },
  { id: 2, title: 'Mouse', price: 20 },
  { id: 3, title: 'Keyboard', price: 200 },
  { id: 4, title: 'Gamepad' },
]
//Функция для формирования верстки каждого товара
const renderProduct = (title, price = 'нет в наличии') => {
  return `<div class="product-item">
                <img class="products-img"src="img/${title}.png" alt="${title}"/>              
                <h3 class="text-h3">${title}</h3>
                <p class="price">${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
}
const renderPage = (list) => {
  const productsList = list.map((item) => renderProduct(item.title, item.price))
  console.log(productsList)
  document.querySelector('.products').innerHTML = productsList.join(' ')
}
renderPage(products)
