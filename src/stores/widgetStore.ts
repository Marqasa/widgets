import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Widget } from '@/schema/Widget'

export const useWidgetStore = defineStore('widgets', () => {
  const widgets = ref<Widget[]>([])

  return { widgets }
})
