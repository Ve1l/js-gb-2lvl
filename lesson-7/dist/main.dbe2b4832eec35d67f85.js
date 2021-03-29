/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/CartComponent.js":
/*!*****************************!*\
  !*** ./js/CartComponent.js ***!
  \*****************************/
/***/ (() => {

eval("Vue.component('cart', {\r\n  data() {\r\n    return {\r\n      cartUrl: '/getBasket.json',\r\n      cartItems: [],\r\n      imgCart: 'https://placehold.it/50x100',\r\n      showCart: false,\r\n    }\r\n  },\r\n  mounted() {\r\n    this.$parent.getJson(`/api/cart`).then((data) => {\r\n      for (let item of data.contents) {\r\n        this.$data.cartItems.push(item)\r\n      }\r\n    })\r\n  },\r\n  methods: {\r\n    addProduct(item) {\r\n      let find = this.cartItems.find((el) => el.id_product === item.id_product)\r\n      if (find) {\r\n        this.$parent\r\n          .putJson(`/api/cart/${find.id_product}`, { quantity: 1 })\r\n          .then((data) => {\r\n            if (data.result === 1) {\r\n              find.quantity++\r\n            }\r\n          })\r\n      } else {\r\n        let prod = Object.assign({ quantity: 1 }, item)\r\n        this.$parent.postJson(`/api/cart`, prod).then((data) => {\r\n          if (data.result === 1) {\r\n            this.cartItems.push(prod)\r\n          }\r\n        })\r\n      }\r\n    },\r\n    remove(product) {\r\n      for (let i = 0; i < this.cartItems.length; i++) {\r\n        if (this.cartItems[i].id_product === +product.id_product) {\r\n          this.$parent\r\n            .deleteJson(\r\n              `/api/cart/${this.cartItems[i].id_product}`,\r\n              this.cartItems[i]\r\n            )\r\n            .then((data) => {\r\n              if (data.result === 1) {\r\n                this.cartItems[i].quantity -= 1\r\n                if (this.cartItems[i].quantity === 0) {\r\n                  this.cartItems.splice(i, 1)\r\n                }\r\n              }\r\n            })\r\n        }\r\n      }\r\n    },\r\n  },\r\n  template: `<div>\r\n<button class=\"btn-cart\" type=\"button\" @click=\"showCart = !showCart\">Корзина</button>\r\n      <div class=\"cart-block\" v-show=\"showCart\">\r\n          <p v-if=\"!cartItems.length\">Корзина пуста</p>\r\n          <cart-item v-for=\"item of cartItems\" :key=\"item.id_product\" :img=\"item.img\" :cart-item=\"item\" @remove=\"remove\">\r\n          </cart-item>\r\n      </div>\r\n      </div>\r\n  `,\r\n})\r\n\r\nVue.component('cart-item', {\r\n  props: ['img', 'cartItem'],\r\n  template: `\r\n  <div class=\"cart-item\">\r\n                  <div class=\"product-bio\">\r\n                      <img :src=\"img\" alt=\"Some img\">\r\n                      <div class=\"product-desc\">\r\n                          <div class=\"product-title\">{{ cartItem.product_name }}</div>\r\n                          <div class=\"product-quantity\">Количество: {{ cartItem.quantity }}</div>\r\n                          <div class=\"product-single-price\">{{ cartItem.price }} рублей</div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"right-block\">\r\n                      <div class=\"product-price\">{{cartItem.quantity*cartItem.price}} руб</div>\r\n                      <button class=\"del-btn\" @click=\"$emit('remove', cartItem)\">&times;</button>\r\n                  </div>\r\n              </div>\r\n  `,\r\n})\r\n\n\n//# sourceURL=webpack:///./js/CartComponent.js?");

/***/ }),

/***/ "./js/ErrorComp.js":
/*!*************************!*\
  !*** ./js/ErrorComp.js ***!
  \*************************/
/***/ (() => {

eval("Vue.component('error', {\r\n  data() {\r\n    return {\r\n      text: '',\r\n    }\r\n  },\r\n  computed: {\r\n    isVisible() {\r\n      return this.text !== ''\r\n    },\r\n  },\r\n  template: `\r\n  <div class=\"error-block\" v-if=\"isVisible\">\r\n      <p class=\"error-msg\">\r\n      <button class=\"close-btn\" @click=\"text=''\">&times;</button>\r\n      {{ text }}\r\n</p>\r\n</div>\r\n  `,\r\n})\r\n\n\n//# sourceURL=webpack:///./js/ErrorComp.js?");

/***/ }),

/***/ "./js/FilterComp.js":
/*!**************************!*\
  !*** ./js/FilterComp.js ***!
  \**************************/
/***/ (() => {

eval("Vue.component('filter-el', {\r\n  data() {\r\n    return {\r\n      userSearch: '',\r\n    }\r\n  },\r\n  template: `<form action=\"#\" class=\"search-form\" @submit.prevent=\"$parent.$refs.products.filter(userSearch)\">\r\n              <input type=\"text\" class=\"search-field\" v-model=\"userSearch\">\r\n              <button type=\"submit\" class=\"btn-search\">\r\n                  <i class=\"fas fa-search\"></i>\r\n              </button>\r\n          </form>`,\r\n})\r\n\n\n//# sourceURL=webpack:///./js/FilterComp.js?");

/***/ }),

/***/ "./js/ProductComponent.js":
/*!********************************!*\
  !*** ./js/ProductComponent.js ***!
  \********************************/
/***/ (() => {

eval("Vue.component('products', {\r\n  data() {\r\n    return {\r\n      catalogUrl: '/catalogData.json',\r\n      filtered: [],\r\n      products: [],\r\n    }\r\n  },\r\n  mounted() {\r\n    this.$parent.getJson(`/api/products`).then((data) => {\r\n      for (let item of data) {\r\n        this.$data.products.push(item)\r\n        this.$data.filtered.push(item)\r\n      }\r\n    })\r\n  },\r\n  methods: {\r\n    filter(userSearch) {\r\n      let regexp = new RegExp(userSearch, 'i')\r\n      this.filtered = this.products.filter((el) => regexp.test(el.product_name))\r\n    },\r\n  },\r\n  template: `<div class=\"products\">\r\n               <product v-for=\"item of filtered\" \r\n               :key=\"item.id_product\" \r\n               :img=\"item.img\"\r\n               :product=\"item\"\r\n               @add-product=\"$parent.$refs.cart.addProduct\"></product>\r\n              </div>`,\r\n})\r\nVue.component('product', {\r\n  props: ['product', 'img'],\r\n  template: `\r\n           <div class=\"product-item\">\r\n               <img :src=\"product.img\" alt=\"Some img\">\r\n               <div class=\"desc\">\r\n                   <h3>{{product.product_name}}</h3>\r\n                   <p>{{product.price}}</p>\r\n                   <button class=\"buy-btn\" @click=\"$emit('add-product', product)\">Купить</button>\r\n               </div>\r\n           </div>\r\n   `,\r\n})\r\n\n\n//# sourceURL=webpack:///./js/ProductComponent.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @css/style */ \"./css/style.css\");\n/* harmony import */ var _js_CartComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/CartComponent */ \"./js/CartComponent.js\");\n/* harmony import */ var _js_CartComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_CartComponent__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_ErrorComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/ErrorComp */ \"./js/ErrorComp.js\");\n/* harmony import */ var _js_ErrorComp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_ErrorComp__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_FilterComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/FilterComp */ \"./js/FilterComp.js\");\n/* harmony import */ var _js_FilterComp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_FilterComp__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_ProductComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/ProductComponent */ \"./js/ProductComponent.js\");\n/* harmony import */ var _js_ProductComponent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_ProductComponent__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst API =\r\n  'https://raw.githubusercontent.com/Ve1l/online-storage-api/main/responses'\r\n\r\nconst app = new Vue({\r\n  el: '#app',\r\n  data: {\r\n    userSearch: '',\r\n  },\r\n  methods: {\r\n    getJson(url) {\r\n      return fetch(url)\r\n        .then((result) => result.json())\r\n        .catch((error) => {\r\n          // console.log(error)\r\n          this.$refs.error.text = error\r\n        })\r\n    },\r\n    postJson(url, data) {\r\n      return fetch(url, {\r\n        method: 'POST',\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n      })\r\n        .then((result) => result.json())\r\n        .catch((error) => {\r\n          // console.log(error)\r\n          this.$refs.error.text = error\r\n        })\r\n    },\r\n    putJson(url, data) {\r\n      return fetch(url, {\r\n        method: 'PUT',\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n      })\r\n        .then((result) => result.json())\r\n        .catch((error) => {\r\n          // console.log(error)\r\n          this.$refs.error.text = error\r\n        })\r\n    },\r\n    deleteJson(url, data) {\r\n      return fetch(url, {\r\n        method: 'DELETE',\r\n        headers: {\r\n          'Content-Type': 'application/json',\r\n        },\r\n        body: JSON.stringify(data),\r\n      })\r\n        .then((result) => result.json())\r\n        .catch((error) => {\r\n          // console.log(error);\r\n          this.$refs.error.text = error\r\n        })\r\n    },\r\n  },\r\n})\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;