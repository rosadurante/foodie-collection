<script setup lang="ts">
  const props = defineProps({
    foodie: {
      type: Object,
      required: true
    },
    showDialog: {
      type: Boolean,
      required: false,
      readonly: false
    }
  })

  import { useFoodStore } from '@/stores/foodieStore'

  const foodStore = useFoodStore()

function handleClick() {
    console.log('click', props.foodie.id)
    foodStore.openDialog(props.foodie.id)
  }
</script>

<template>
  <a className="relative flex flex-col items-center justify-start rounded-lg p-2 h-[450px] overflow-hidden md:bg-teal-700 group" @click="handleClick">
    <div className="w-full h-full absolute top-0 left-0 md:bg-black/40 group-hover:md:opacity-0 transition duration-800"></div>
    <div className="w-full h-full  absolute top-0 left-0 bg-center bg-cover bg-no-repeat md:opacity-70 md:group-hover:opacity-100 md:bg-black/50 duration-800 transition group-hover:scale-120" :style="{ backgroundImage: `url(${props.foodie.src})` }"></div>
    <div className="absolute top-50 left-0 w-full duration-800 p-2 items-center opacity-100 md:opacity-0 transition-opacity ease-in-out md:group-hover:opacity-100" >
      <h2 class="text-white text-4xl font-bold uppercase text-center p-2">{{ props.foodie.title }}</h2>
    </div>
    <div className="absolute bottom-0 left-0 w-full p-4 bg-teal-700/70">
      <div className="w-full flex flex-row justify-between items-center">
        <p class="text-white text-sm">Tiempo: {{ props.foodie.timeToPrepare }}  min aprox</p>
        <p class="text-white text-sm">Dificultad: {{ props.foodie.difficulty }}</p>
      </div>
    </div>
  </a>
</template>
