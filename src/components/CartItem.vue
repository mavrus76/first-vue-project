<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img width="120" height="120" :src="item.product.image" :alt="item.product.title" />
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <span class="product__code">
      Артикул: {{ item.product.id }}
    </span>

    <div class="product__counter form__counter">
      <button type="button" aria-label="Убрать один товар"
      @click.prevent="amount > 1 ? amount-- : false">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-minus"></use>
        </svg>
      </button>
      <label>
        <input type="text" v-model.number="amount" name="count">
      </label>
      <button type="button" aria-label="Добавить один товар" @click.prevent="amount++">
        <svg width="10" height="10" fill="currentColor">
          <use xlink:href="#icon-plus"></use>
        </svg>
      </button>
    </div>

    <b class="product__price">
      {{ (item.product.price * item.amount) | numberFormat }} ₽
    </b>

    <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины"
    @click.prevent="deleteFromCart()">
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
    <div class="message" v-show="productDeleting">Товар удаляется...</div>
  </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      productDeleting: false,
    };
  },
  filters: {
    numberFormat,
  },
  props: ['item'],
  computed: {
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.dispatch('updateCartProductAmount', { productId: this.item.productId, amount: value });
      },
    },
  },
  methods: {
    ...mapActions(['deleteProductFromCart']),

    deleteFromCart() {
      this.productDeleting = true;
      this.deleteProductFromCart(this.item.product.id)
        .then(() => {
          this.productDeleting = false;
        });
    },
  },
};
</script>
