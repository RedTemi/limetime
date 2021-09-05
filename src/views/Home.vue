<template>
  <h2 class="text-center text-2xl font-bold my-4">Products</h2>
  <select class="ring mb-4 ring-blue-400 bg-blue-300 text-gray-700 font-semibold font-serif px-2 py-1 rounded-lg w-2/5 outline-none mx-auto block" v-model="selected" id="">
    <option value="all">Showing all</option>
    <option v-for="option in categories" :key="option"  :value="option">{{option}}</option>
  </select>
    <div class="flex flex-row flex-wrap md:w-11/12 lg:w-10/12 mx-auto justify-center" >
      <productView :products="productss" />
    </div>
  <div class="flex justify-center text-center">
    <span v-if="products.current_page > 1" @click="prevPage"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
</svg></span>
    <span v-for="pagex in pages" :key="pagex" :class="{'text-blue-400': pagex === page}">{{pagex}}</span>
    <button v-if="page<3" @click="nextPage" class="border-2 border-red-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
</svg></button>
  </div>
</template>

<script>
// @ is an alias to /src

import ProductView from "@/views/ProductView";

export default {
  name: 'Home',
  data(){
    return{
      selected:'all',
    }
  },
  computed:{
    products() {
      return this.$store.state.products;
    },
    pages(){
      return this.$store.state.pages;
    },
    page(){
      return this.$store.state.page;
    },
    categories(){
      return this.$store.state.categories;
    },
    productss(){
        let temp = {};
        Object.assign(temp,this.$store.state.products);
        this.selected !== "all"? temp.data = temp.data.filter(element => element.catname === this.selected):null;
      return temp;
    }
  },
  mounted(){
    this.$store.dispatch('getProducts')

  },
  methods:{
  nextPage(){
    this.$store.dispatch('nextPage')
  },
  prevPage(){
    this.$store.dispatch('prevPage')
  }
  },
  components: {
    ProductView
  }
}
</script>
