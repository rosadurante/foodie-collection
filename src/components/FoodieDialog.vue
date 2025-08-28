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
  <transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-500"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 " @click.self="handleClose">
    <div class="bg-white rounded-lg w-[75%] h-[75%] md:w-[50%] md:h-[50%] shadow-lg overflow-y-auto">
      <FoodieDetails :foodie="foodStore.selectedFood" :onClose="handleClose" />
    </div>
  </div>
  </transition>
</template>