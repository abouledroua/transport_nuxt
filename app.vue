<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <Header></Header>
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useAppConfig()
useSeoMeta({ title: config.title })
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>