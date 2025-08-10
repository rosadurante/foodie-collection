<script setup lang="ts">
import FoodieList from '@/components/FoodieList.vue'
</script>

<template>
  <div className="py-4">
  <header className="text-white flex flex-col items-end justify-end">
    <a href="https://www.rosadurante.com/" className="group flex flex-row items-center justify-center relative text-2xl font-bold py-2 px-4 bg-teal-700 text-teal-900 m-4 transition-transform hover:translate-x-0 translate-x-32 duration-800 ">
      <span className="text-teal-700 group-hover:text-white transition duration-800 text-sm font-roboto">Back to home page</span></a>
  </header>

  <main className="flex flex-col items-center justify-center">
    <FoodieList />
  </main>
  </div>
</template>

