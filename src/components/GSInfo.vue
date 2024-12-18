<template>
  <div class="gs-info">
    <svg class="gs-info-icon" viewBox="0 0 10 10">
      <path
        d="M4.5 7.5h1v-3h-1v3ZM5 0C2.24 0 0 2.24 0 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 9C2.8 9 1 7.21 1 5s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Zm-.5-5.5h1v-1h-1v1Z"
      />
      <path d="M4.5 2.5h1v1h-1v-1Zm0 2h1v3h-1v-3Z" />
      <path
        d="M5 0C2.24 0 0 2.24 0 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 9C2.8 9 1 7.21 1 5s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4Z"
      />
    </svg>

    <div class="gs-info-tooltip">
      <p>
        This widget links directly to your public profile so that you can easily share your impact
        with your customers. Turn it off here if you do not want the badge to link to it.
      </p>

      <a class="gs-info-link" href="#">View Public Profile</a>
    </div>
  </div>
</template>

<style>
.gs-info {
  position: relative;
  width: 10px;
  height: 10px;
}
.gs-info-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  fill: var(--gs-color-green);
  cursor: pointer;
}

.gs-info-tooltip {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 250px;
  height: auto;
  background-color: var(--gs-color-white);
  color: var(--gs-color-black);
  border-radius: 4px;
  z-index: 100;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all var(--gs-duration-m);
}

.gs-info:hover .gs-info-tooltip {
  opacity: 1;
  pointer-events: auto;
}

.gs-info-link {
  color: var(--gs-color-green);
  text-decoration: none;
}

.gs-info-link:hover {
  text-decoration: underline;
}
</style>
