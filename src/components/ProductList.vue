<template>
  <ul class="catalog__list">
    <ProductItem
      :products="products"
      v-for="product in products"
      :key="product.id"
      :product="product"
      @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"
    ></ProductItem>
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products', 'product'],
};
</script>
