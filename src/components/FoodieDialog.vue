<script setup lang="ts">

import { computed } from 'vue'
import { useFoodStore } from '@/stores/foodieStore'
import FoodieDetails from '@/components/FoodieDetail.vue'

const foodStore = useFoodStore()

const handleClose = () => {
  foodStore.selectedFood = null
}

const isOpen = computed(() => foodStore.selectedFood !== null)
console.log(isOpen.value)

</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 " @click.self="handleClose">
    <div class="bg-white rounded-lg w-[50%] h-[50%] shadow-lg overflow-y-auto">
      <FoodieDetails :foodie="foodStore.selectedFood" :onClose="handleClose" />
    </div>
  </div>
</template>