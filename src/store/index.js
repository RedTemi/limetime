import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products:[],
    categories:[],
    page:null
  },
  mutations: {
    addProducts(state,products){
      state.products = products;
      let catnames = [];
      products.data.forEach(element=>{
        catnames.push(element.catname);
      });
      state.page = products.current_page;
      state.categories = [... new Set(catnames)];

    }
  },
  actions: {
    getProducts ({commit}) {
      axios.get('https://trayvonnorthern.com/Edgewood-API/public/api/products').then((response)=>{
        commit('addProducts',response.data)
      })
    }
  },
  modules: {

  }
})
