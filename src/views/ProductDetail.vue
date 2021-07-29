<template>
  <div>
    <div id="nav">
      <b-button style="position:absolute; left: 1%;" @click="$router.go(-1)">{{$t('back')}}</b-button>
      <h1 class="text-center" style="margin-left: 5%;">{{$t('detailTitle')}}</h1>
    </div>
    <div class="container">
      <b-row>
        <b-col md="6">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="720"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              v-for="(image,key) in selectedProduct.sliderImage"
              :key="key"
              :img-src="image"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col md="4">
          <p><strong>{{$t('price')}}</strong></p>
          {{ selectedProduct.price }}$
        </b-col>
        <b-col md="12" class="mt-2 mb-2" style="text-align: left">
          <h2>
            {{ selectedProduct.title }}
          </h2>
        </b-col>
        <b-col md="12">
          {{ selectedProduct.description }}
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ProductDetail",
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  computed: {
    ...mapState(["selectedProduct", "productData"]),
  },
  methods: {
    ...mapActions(['getProductDetail']),
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
  created() {
    const id= this.$route.params.id
    let isExist = this.productData.find(element => element.id == id)
    if (isExist == undefined) {
      this.$router.push("/page-not-found")
    }
  },
};
</script>

<style>
</style>