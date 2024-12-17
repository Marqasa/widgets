<script setup lang="ts">
const model = defineModel({ type: Boolean, required: true })
</script>

<template>
  <div class="gs-checkbox" :class="{ 'gs-checkbox-checked': model }">
    <input class="gs-checkbox-input" v-model="model" type="checkbox" />
    <div class="gs-checkbox-icon"></div>
    <div class="gs-checkbox-overlay"></div>
  </div>
</template>

<style>
.gs-checkbox {
  position: relative;
  width: 18px;
  height: 18px;
}

.gs-checkbox-input {
  appearance: none;
  width: 100%;
  height: 100%;
  border: 3px solid var(--gs-color-black);
  border-radius: 4px;
  cursor: pointer;
  transition: all var(--gs-duration-s);
}

.gs-checkbox-checked .gs-checkbox-input {
  background-color: var(--gs-color-green);
  border-color: var(--gs-color-green);
}

.gs-checkbox-icon,
.gs-checkbox-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: all var(--gs-duration-s);
}

.gs-checkbox-icon {
  width: 75%;
  height: 75%;
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDEzLjE3IDkuNTkiPgogIDxwYXRoIGZpbGw9IiNmOWY5ZjkiIGQ9Ik01LjI5IDkuMjljLS4zOS4zOS0xLjAyLjM5LTEuNDEgMEwuMjkgNS43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzkgMS4wMi0uMzkgMS40MSAwbDIuODggMi44OEwxMS40Ni4yOWMuMzktLjM5IDEuMDItLjM5IDEuNDEgMHMuMzkgMS4wMiAwIDEuNDFMNS4yOSA5LjI5WiIvPgo8L3N2Zz4=);
  background-size: 100% 100%;
  opacity: 0;
}

.gs-checkbox-checked .gs-checkbox-icon {
  opacity: 1;
}

.gs-checkbox-overlay {
  width: 100%;
  height: 100%;
  background-color: var(--gs-color-light-green);
  border-radius: 50%;
}

.gs-checkbox:not(.gs-checkbox-checked):hover .gs-checkbox-overlay {
  width: 150%;
  height: 150%;
  opacity: 0.5;
}
</style>
