<template>
  <div class="productHolder" v-for="item in products.data" :key="item.id"><img :src="item.image" alt="">
    <div
        class="absolute w-full px-1 pt-2 pb-1  left-0 rounded-b-md bottom-0 text-white bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur back font-bold text-white">
      {{item.name}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'productView',
  props: {
    products: {},
  }
}
</script>
<style>
.productHolder {
  @apply block rounded-md drop-shadow my-0.5 p-1 bg-gradient-to-l max-w-full ring-opacity-0 from-blue-400 to-green-400 relative self-start sm:w-1/2 lg:w-1/4;
  flex-grow: 0;
  flex-shrink: 0;
  /*flex-basis: 21%;*/
  /*margin: 3px;*/
}
</style>
