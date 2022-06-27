<template>
  <div class="cart__total">
    <p>Доставка: <b>500 ₽</b></p>
    <p>Итого:
      <b>{{ totalProducts | numberFormat }}</b>
    товара на сумму
      <b>{{ totalPrice | numberFormat }} ₽</b>
    </p>
  </div>
</template>

<script>
import pagesCartAndOrderMixin from '@/mixins/pagesCartAndOrderMixin';

export default {
  mixins: [pagesCartAndOrderMixin],
};
</script>
