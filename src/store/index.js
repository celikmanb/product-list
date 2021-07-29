import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: [],
    selectedProduct: {}
  },
  mutations: {
    setProductData(state, val) {
      let temp = state.productData.concat(val)
      state.productData = temp
    },
    setSelectedProduct(state, val){
      state.selectedProduct = val
    }
  },
  actions: {
    getProductData(){
      return axios.get(`${process.env.VUE_APP_BASE_URL}/products`)
    },
    getProductDetail(_, id){
      return axios.get(`${process.env.VUE_APP_BASE_URL}/products/${id}`)
    },
    getMockData(_, limit) {
      return axios.post(`/products`, limit)
    }
  },
  modules: {
  }
})
