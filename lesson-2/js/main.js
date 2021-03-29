class productsList {
  constructor(container = '.products') {
    this.container = container
    this.goods = []
    this._fetchProducts()
  }
  _fetchProducts() {
    this.goods = [
      { id: 1, title: 'Notebook', price: 2000 },
      { id: 2, title: 'Mouse', price: 20 },
      { id: 3, title: 'Keyboard', price: 200 },
      { id: 4, title: 'Gamepad', price: 300 },
    ]
  }
  render() {
    const block = document.querySelector(this.container)
    for (let product of this.goods) {
      const productObj = new ProductItem(product)
      block.insertAdjacentHTML('beforeend', productObj.render())
    }
  }
  getSum() {
    let result = this.goods.reduce((sum, item) => (sum += item.price), 0)
    alert(result)
  }
}
class ProductItem {
  constructor(product) {
    this.title = product.title
    this.price = product.price
    this.id = product.id
  }
  render() {
    return `<div class="product-item">
    <img class="products-img"src="img/${this.title}.png" alt="${this.title}"/>
    <h3 class="text-h3">${this.title}</h3>
    <p class="price">${this.price}</p>
    <button class="buy-btn">Купить</button>
    </div>
    <div class="product-sum"></div>`
  }
}

let list = new productsList()
list.render()
list.getSum()

class Basket {
  addGoods() {}
  removeGoods() {}
  changeGoods() {}
  render() {}
}
class itemBasket {
  render() {}
}
