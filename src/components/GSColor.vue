<script setup lang="ts">
import { computed } from 'vue'
import { getBackgroundColor } from '@/composables/getBackgroundColor'
import { WidgetColor } from '@/schema/Widget'

const props = defineProps<{
  color: WidgetColor
  selected: boolean
}>()

const emit = defineEmits<{
  (e: 'colorSelected'): void
}>()

const backgroundColor = computed(() => getBackgroundColor(props.color))
</script>

<template>
  <div
    @click="emit('colorSelected')"
    class="gs-color"
    :class="[color, { 'gs-color-selected': selected }]"
  ></div>
</template>

<style>
.gs-color {
  width: 16px;
  height: 16px;
  border: 2px solid v-bind('backgroundColor');
  background-color: v-bind('backgroundColor');
  cursor: pointer;
  transition: all var(--gs-duration-s);
}

.gs-color:hover {
  filter: brightness(1.2);
}

.gs-color.black:hover {
  filter: brightness(1.5);
}

.gs-color.white:hover,
.gs-color.beige:hover {
  filter: brightness(0.9);
}

.gs-color-selected {
  border-color: var(--gs-color-dark-grey);
}
</style>
