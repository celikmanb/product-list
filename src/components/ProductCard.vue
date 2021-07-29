<template>
  <div>
    <b-card
      :img-src="product.image"
      :img-alt="product.category"
      img-height="300"
      img-top
      tag="article"
      style="max-width: 20rem; max-height: 28rem;"
      class="mb-2"
    >
      <b-card-title style="font-size: 16px; font-size: 1vw;">
        {{product.title}}
      </b-card-title>

      <b-button href="#" variant="primary" @click="goDetail(product)">{{$t('detail')}}</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    product: Object
  },
  methods: {
    ...mapMutations(['setSelectedProduct']),
    goDetail(item) {
      this.setSelectedProduct(item)
      this.$router.push(`detail/${item.id}`)
    }
  },
};
</script>

<style>
</style>