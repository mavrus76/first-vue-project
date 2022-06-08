<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#"
    @click.prevent="$emit('gotoPage', 'product', {id: product.id})">
      <img :src="product.image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#">{{ product.title }}</a>
    </h3>

    <span class="catalog__price"> {{ product.price }} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="colorId in product.colorsId" :key="colorId">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="colorId" />
          <span class="colors__value" :style="{ 'background-color': colorId }"> </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ['product'],
};
</script>
