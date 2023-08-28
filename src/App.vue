<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LayoutPrincipal from '@/layouts/LayoutPrincipal.vue'
const route = useRoute()
const layout = computed(() => {
  const meta = route.meta
  if (meta.layout === 'default') {
    return LayoutPrincipal
  }
  return LayoutPrincipal
})
</script>
