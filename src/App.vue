<script setup lang="ts">
import { ref } from 'vue'
import { Widget, Widgets } from './schema/Widget'
import axios from 'axios'

const widgets = ref<Widget[]>([])

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
  <main>
    <h1>Widgets</h1>
    <pre>{{ widgets }}</pre>
  </main>
</template>
