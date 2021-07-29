<template>
  <div class="home">
    <div id="nav">
      <h1 class="text-center" style="margin-left: 5%;">{{$t('mainTitle')}}</h1>
    </div>
    <div class="container">
      <b-row>
        <b-col sm="12" md="4" v-for="item in productData" :key="item.id">
          <ProductCard :product="item" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data() {
    return {
      limit: 40
    }
  },
  computed: {
    ...mapState(['productData'])
  },
  methods: {
    ...mapActions(['getProductData','getMockData']),
    ...mapMutations(['setProductData']),
    getNextData() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.limit += 40
          let params = {limit: this.limit}
          this.getMockData(params).then(({data})=>{
            this.setProductData(data)
          })    
        }
      }
    }
  },
  created() {
    let params = {limit: this.limit}
    this.getMockData(params).then(({data})=>{
      this.setProductData(data)
    })
  },
  mounted() {
    this.getNextData()
  },
}
</script>
