<script setup lang="ts">
import { computed } from 'vue'
import { PRODUCT_WIDGETS } from '@/assets/data/product-widgets'
import { useWidgetStore } from './stores/widgetStore'
import { Widgets } from './schema/Widget'
import axios from 'axios'
import WidgetItem from './components/WidgetItem.vue'

const widgetStore = useWidgetStore()
const widgets = computed(() => widgetStore.widgets)

/**
 * Fetch widgets from the API
 */
async function fetchWidgets() {
  const dataURL = import.meta.env.VITE_DATA_URL

  if (dataURL) {
    const response = await axios.get(dataURL)

    if (Widgets.safeParse(response.data).success) {
      widgetStore.setWidgets(response.data)
      return
    }
  }

  widgetStore.setWidgets(PRODUCT_WIDGETS)
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
  padding: 22px;
}

.gs-widgets-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #f9f9f9;
  padding: 36px;
  padding-bottom: 140px;
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
  flex-wrap: wrap;
  gap: 60px;
}

@media (max-width: 1024px) {
  .gs-widgets-title {
    text-align: center;
  }

  .gs-widgets-panel {
    padding-bottom: 36px;
  }

  .gs-widgets {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
