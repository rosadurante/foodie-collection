<script setup lang="ts">
import data from '@/assets/data.json'
import FoodieItem from '@/components/FoodieItem.vue'

const foodies = data.map((foodie) => {
  return {
    ...foodie,
    src: new URL('../assets/' + foodie.image, import.meta.url).href
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center p-10 w-full">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 w-full">
    <div v-for="foodie in foodies" :key="foodie.id">
      <FoodieItem :foodie="foodie" />
    </div>
    </div>
  </div>
</template>
