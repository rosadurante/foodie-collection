<script setup lang="ts">

const props = defineProps({
  foodie: {
    type: Number,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  }
})

import data from '@/assets/data.json'
import { computed } from 'vue'

const foodieDetails = computed(() => {
  return data.find((foodie) => foodie.id === props.foodie)
})
const src = computed(() => {
  return new URL('../assets/' + foodieDetails.value.image, import.meta.url).href
})

</script>

<template>
  <section class=" md:flex md:flex-row h-full w-full">
    <div class="w-full h-24 md:w-96 md:h-full bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${src})` }"></div>
    <div class="p-4 overflow-y-auto">
    <header class="flex justify-between items-center p-4">
      <h1 class="text-2xl font-bold">{{ foodieDetails.title }}</h1>
      <button @click="onClose">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </header>
    <main class="space-y-4 px-4">
    <div class="text-sm mb-2">
      <p>Preparación: <span class="font-bold">{{ foodieDetails.timeToPrepare }} min aprox</span></p>
      <p>Ingredientes:
      <span v-for="ingredient in foodieDetails.ingredients" :key="ingredient">
        {{ ingredient }},
      </span>
      </p>
    </div>
    <div class="">
      <p class="text-sm mb-2">Pasos:</p>
      <div v-for="(instruction, index) in foodieDetails.instructions" :key="index" class="mb-2">
        <p class="text-sm">{{ index + 1 }}. {{ instruction }}</p>
      </div>
      </div>
      </main>
    </div>
  </section>
</template>