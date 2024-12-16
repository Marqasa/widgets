<script setup lang="ts">
import { Widget } from '@/schema/Widget'
import WidgetHeader from './WidgetHeader.vue'

defineProps<{
  widget: Widget
}>()
</script>

<template>
  <div>
    <WidgetHeader :widget="widget" />
  </div>
</template>
