import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UpdateWidgetData, Widget } from '@/schema/Widget'

export const useWidgetStore = defineStore('widgets', () => {
  const widgets = ref<Widget[]>([])

  /**
   * Set the widgets
   * @param newWidgets The new widgets to set
   */
  function setWidgets(newWidgets: Widget[]) {
    widgets.value = newWidgets
  }

  /**
   * Update a widget by id
   * @param id The id of the widget to update
   * @param data The data to update the widget with
   */
  function updateWidget(id: number, data: UpdateWidgetData) {
    const widget = widgets.value.find((w) => w.id === id)

    if (!widget) return

    Object.assign(widget, data)
  }

  return { widgets, setWidgets, updateWidget }
})
