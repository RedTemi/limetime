import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    products:[],
    categories:[],
    page:null,
      pages:[],
    selected:'all'
  },
  mutations: {
    addProducts(state,products){
      state.products = products;
      let catnames = [];
      products.data.forEach(element=>{
        catnames.push(element.catname);
      });
      let pages= [];
      for (let i = 1; i <= products.last_page; i++) {
        pages.push(i);
      }
      state.pages = pages;
      state.page = products.current_page;
      state.categories = [... new Set(catnames)];
    },

  },
  actions: {
    getProducts ({commit}) {
        axios.get('https://trayvonnorthern.com/Edgewood-API/public/api/products').then((response)=>{
          commit('addProducts',response.data)
        })
      },
    nextPage(context){
      axios.get(context.state.products.next_page_url).then(response=>{
        context.commit('addProducts',response.data)
      })
    },
    prevPage(context){
      axios.get(context.state.products.prev_page_url).then(response=>{
        context.commit('addProducts',response.data)
      })
    }
    }
  ,
  modules: {

  }
})
