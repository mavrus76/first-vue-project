<template>
  <ul class="cart__orders">
    <li class="cart__order" v-for="item in products" :key="item.product.id">
      <h3>{{ item.product.title }}</h3>
      <b>{{ item.product.price | numberFormat }} ₽</b>
      <span>Артикул: {{ item.product.id }}</span>
    </li>
  </ul>
</template>

<script>
import pagesCartAndOrderMixin from '@/mixins/pagesCartAndOrderMixin';

export default {
  mixins: [pagesCartAndOrderMixin],
};
</script>
