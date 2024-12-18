<script setup lang="ts">
import { useWidgetStore } from '@/stores/widgetStore'
import { Widget, WidgetColor } from '@/schema/Widget'
import GSCheckbox from './GSCheckbox.vue'
import WidgetHeader from './WidgetHeader.vue'
import GSColor from './GSColor.vue'
import GSToggleSwitch from './GSToggleSwitch.vue'
import GSInfo from './GSInfo.vue'

defineProps<{
  widget: Widget
}>()

const widgetStore = useWidgetStore()
</script>

<template>
  <div class="gs-widget-item">
    <WidgetHeader :widget="widget" />
    <div class="gs-widget-item-row">
      <div class="gs-widget-item-info">
        <p>Link to Public Profile</p>
        <GSInfo />
      </div>

      <GSCheckbox
        :model-value="widget.linked"
        @update:model-value="widgetStore.updateWidget(widget.id, { linked: $event })"
      />
    </div>

    <div class="gs-widget-item-row">
      <p>Badge colour</p>

      <div class="gs-widget-item-colors">
        <GSColor
          v-for="color in WidgetColor.options"
          :key="color"
          :color="color"
          :selected="widget.selectedColor === color"
          @color-selected="widgetStore.updateWidget(widget.id, { selectedColor: color })"
        />
      </div>
    </div>

    <div class="gs-widget-item-row">
      <p>Activate badge</p>
      <GSToggleSwitch
        :model-value="widget.active"
        @update:model-value="widgetStore.updateWidget(widget.id, { active: $event })"
      />
    </div>
  </div>
</template>

<style>
.gs-widget-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.gs-widget-item-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gs-color-green);
  font-size: 14px;
  height: 25px;
}

.gs-widget-item-info {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gs-widget-item-colors {
  display: flex;
  gap: 4px;
}
</style>
