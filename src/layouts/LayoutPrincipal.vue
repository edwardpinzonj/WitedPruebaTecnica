<template>
  <div class="relative">
    <HeaderPrincipal />
    <div class="container bg-gray-100 mx-auto p-2 flex flex-wrap">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderPrincipal from './HeaderPrincipal.vue'
import FooterComponent from './FooterPrincipal.vue'
</script>
