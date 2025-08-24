import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFoodStore = defineStore('foodStore', () => {
  const selectedFood = ref<number | null>(null)

  function openDialog(id: number) {
    selectedFood.value = id
  }

  function closeDialog() {
    selectedFood.value = null
  }

  return { selectedFood, openDialog, closeDialog }
})