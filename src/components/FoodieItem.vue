<script setup lang="ts">
  const props = defineProps({
    foodie: {
      type: Object,
      required: true
    }
  })
</script>

<template>
      <div className="relative flex flex-col items-center justify-start rounded-lg p-2 h-[450px] overflow-hidden bg-teal-700 group">
        <div className="w-full h-full absolute top-0 left-0 md:bg-teal-700 group-hover:md:opacity-0 transition duration-800"></div>
        <div className="w-full h-full  absolute top-0 left-0 bg-center bg-cover bg-no-repeat opacity-70 group-hover:opacity-100 bg-black/50 duration-800 transition group-hover:scale-120" :style="{ backgroundImage: `url(${props.foodie.src})` }"></div>
        <div className="absolute top-50 left-0 w-full duration-800 p-2 items-center opacity-0 invisible transition-opacity ease-in-out
           group-hover:opacity-100 group-hover:visible" >
        <h2 class="text-white text-4xl font-bold uppercase text-center p-2">{{ props.foodie.title }}</h2>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-2 bg-teal-700/50">
          <div className="w-full flex flex-row justify-between items-center">
        <p class="text-white text-sm">Tiempo: {{ props.foodie.timeToPrepare }}  min aprox</p>
        <p class="text-white text-sm">Dificultad: {{ props.foodie.difficulty }}</p>
        </div>
        </div>
      </div>
</template>
