<template>
  <h2>Products</h2>
  <select @change="fil" class="ring ring-blue-400 bg-blue-300 text-gray-700 font-semibold font-serif px-2 py-1 rounded-lg w-2/5 outline-none mx-auto block" v-model="selected" id="">
    <option value="all">Showing all</option>
    <option v-for="option in categories" :key="option"  :value="option">{{option}}</option>
  </select>
    <div class="flex flex-row flex-wrap md:w-11/12 lg:w-10/12 mx-auto" >
      <productView :products="selected === 'all'?products:productss" />
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
      productss:null
    }
  },
  computed:{
    products() {
      return this.$store.state.products;
    },
    page(){
      return this.$store.state.page;
    },
    categories(){
      return this.$store.state.categories;
    }
  },
  mounted(){
    this.$store.dispatch('getProducts')
  },
  methods:{
    fil(){
      if(this.selected !== "all"){
        let temp = {};
        Object.assign(temp,this.$store.state.products);
        temp.data = temp.data.filter(element => element.catname === this.selected)
        this.productss = temp;
      }else{
        this.productss = null;
      }

    }
  },
  components: {
    ProductView
  }
}
</script>
