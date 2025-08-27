<script setup lang="ts">
import FoodieList from '@/components/FoodieList.vue'
import FoodieDialog from '@/components/FoodieDialog.vue'
</script>

<template>
  <div className="py-4">
  <header className="text-white flex flex-col items-end justify-end">
    <a href="https://www.rosadurante.com/" className="group flex flex-row items-center justify-center relative text-2xl font-bold py-2 px-4 bg-teal-700 text-teal-900 my-4 md:transition-transform md:hover:translate-x-0 md:translate-x-32 md:duration-800 ">
      <span className="text-white md:text-teal-700 md:group-hover:text-white md:transition md:duration-800 text-sm font-roboto">Back to home page</span></a>
  </header>

  <main className="flex flex-col items-center justify-center">
    <FoodieList />
  </main>
  </div>

  <FoodieDialog />

</template>

