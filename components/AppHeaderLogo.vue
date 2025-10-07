<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <UColorModeImage
    v-if="appConfig.header?.logo?.dark || appConfig.header?.logo?.light"
    :light="appConfig.header?.logo?.light || appConfig.header?.logo?.dark"
    :dark="appConfig.header?.logo?.dark || appConfig.header?.logo?.light"
    :alt="appConfig.header?.logo?.alt || appConfig.header?.title"
    class="h-6 w-auto shrink-0"
  />
  <span v-else>
    <NuxtImg alt="logo" :width="1676" :height="276" format="webp" quality="60" class="w-40 h-fit dark:invert brightness-0" src="/logo/long-light.png" />
  </span>
</template>
