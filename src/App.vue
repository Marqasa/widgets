<script setup lang="ts">
import { ref } from 'vue'
import { useWidgetStore } from './stores/widgetStore'
import { Widgets } from './schema/Widget'
import axios from 'axios'
import WidgetItem from './components/WidgetItem.vue'

const widgetStore = useWidgetStore()
const widgets = ref(widgetStore.widgets)

/**
 * Fetch widgets from the API
 */
async function fetchWidgets() {
  const response = await axios.get(
    'https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets',
  )

  // Check if the response data is valid according to the Widgets schema
  if (Widgets.safeParse(response.data).success) {
    widgets.value = response.data
  } else {
    console.error('Failed to parse widgets')
  }
}

fetchWidgets()
</script>

<template>
  <main class="gs-container">
    <div v-if="widgets.length" class="gs-widgets-panel">
      <h1 class="gs-widgets-title">Per product widgets</h1>
      <div class="gs-widgets">
        <WidgetItem v-for="widget in widgets" :widget="widget" :key="widget.id" />
      </div>
    </div>
  </main>
</template>

<style>
.gs-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gs-widgets-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #f9f9f9;
  padding: 36px;
  border-radius: 8px;
}
.gs-widgets-title {
  font-size: 30px;
  font-weight: bold;
  color: #212121;
  border-bottom: 2px solid #b0b0b0;
  padding-bottom: 12px;
}
.gs-widgets {
  display: flex;
  gap: 60px;
}
</style>
