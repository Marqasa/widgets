<script setup lang="ts">
const model = defineModel({ type: Boolean, required: true })
</script>

<template>
  <label class="gs-toggle-switch" :class="{ 'gs-toggle-switch-active': model }">
    <input class="gs-toggle-switch-input" type="checkbox" v-model="model" />

    <div class="gs-toggle-switch-thumb">
      <span class="gs-toggle-switch-overlay"></span>
      <span class="gs-toggle-switch-thumb-inner"></span>
    </div>
  </label>
</template>

<style>
.gs-toggle-switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 23px;
  border: 1px solid var(--gs-color-light-green);
  background-color: var(--gs-color-grey);
  border-radius: 34px;
  cursor: pointer;
  box-shadow: inset 0 1px 6px 0 rgba(0, 0, 0, 0.15);
  transition: all var(--gs-duration-s);
}

.gs-toggle-switch-active {
  background-color: var(--gs-color-green);
  border-color: var(--gs-color-green);
}

.gs-toggle-switch-input {
  display: none;
}

.gs-toggle-switch-thumb {
  position: absolute;
  top: 50%;
  left: -2px;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: all var(--gs-duration-s);
}

.gs-toggle-switch-active .gs-toggle-switch-thumb {
  left: calc(100% - 22px);
}

.gs-toggle-switch-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  border-radius: 50%;
  transition: all var(--gs-duration-s);
  background-color: var(--gs-color-light-green);
  opacity: 0;
}

.gs-toggle-switch:hover .gs-toggle-switch-overlay {
  opacity: 0.5;
}

.gs-toggle-switch-thumb-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: var(--gs-color-grey);
  border: 1px solid var(--gs-color-beige);
  border-radius: 50%;
  transition: all var(--gs-duration-s);
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.35));
}

.gs-toggle-switch-active .gs-toggle-switch-thumb-inner {
  border-color: var(--gs-color-green);
}
</style>
