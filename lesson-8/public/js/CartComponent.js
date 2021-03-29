Vue.component('cart', {
  data() {
    return {
      cartUrl: '/getBasket.json',
      cartItems: [],
      imgCart: 'https://placehold.it/50x100',
      showCart: false,
    }
  },
  mounted() {
    this.$parent.getJson(`/api/cart`).then((data) => {
      for (let item of data.contents) {
        this.$data.cartItems.push(item)
      }
    })
  },
  methods: {
    addProduct(item) {
      let find = this.cartItems.find((el) => el.id_product === item.id_product)
      if (find) {
        this.$parent
          .putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity++
            }
          })
      } else {
        let prod = Object.assign({ quantity: 1 }, item)
        this.$parent.postJson(`/api/cart`, prod).then((data) => {
          if (data.result === 1) {
            this.cartItems.push(prod)
          }
        })
      }
    },
    remove(product) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id_product === +product.id_product) {
          this.$parent
            .deleteJson(
              `/api/cart/${this.cartItems[i].id_product}`,
              this.cartItems[i]
            )
            .then((data) => {
              if (data.result === 1) {
                this.cartItems[i].quantity -= 1
                if (this.cartItems[i].quantity === 0) {
                  this.cartItems.splice(i, 1)
                }
              }
            })
        }
      }
    },
  },
  template: `<div>
<button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
      <div class="cart-block" v-show="showCart">
          <p v-if="!cartItems.length">Корзина пуста</p>
          <cart-item v-for="item of cartItems" :key="item.id_product" :img="item.img" :cart-item="item" @remove="remove">
          </cart-item>
      </div>
      </div>
  `,
})

Vue.component('cart-item', {
  props: ['img', 'cartItem'],
  template: `
  <div class="cart-item">
                  <div class="product-bio">
                      <img :src="img" alt="Some img">
                      <div class="product-desc">
                          <div class="product-title">{{ cartItem.product_name }}</div>
                          <div class="product-quantity">Количество: {{ cartItem.quantity }}</div>
                          <div class="product-single-price">{{ cartItem.price }} рублей</div>
                      </div>
                  </div>
                  <div class="right-block">
                      <div class="product-price">{{cartItem.quantity*cartItem.price}} руб</div>
                      <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                  </div>
              </div>
  `,
})
