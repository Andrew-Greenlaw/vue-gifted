<template>
  <div class="container-fluid">
    <div class="row">
      <GiftCard v-for="g in gifts" :key="g.id" :gift="g" />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { giftsService } from '../services/GiftsService.js'
export default {
  setup() {
    async function getGifts() {
      await giftsService.getGifts()
    }
    getGifts()
    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss"></style>
