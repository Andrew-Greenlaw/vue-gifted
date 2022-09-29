<template>
  <div class="col-md-3 mt-3">
    <div class="card">
      <img class="img-fluid" :src="gift.url" alt="Card image Cat">
      <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">Text</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Gift } from '../models/Gift.js'

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
