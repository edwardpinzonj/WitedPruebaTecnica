<template>
  <header class="bg-gray-800 text-gray-200 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">
      <div class="flex flex-wrap justify-between md:flex-col">
        <router-link to="/" class="flex title-font font-medium text-white mb-4 md:mb-0">
          <span class="ml-3 text-xl font-bold">Prueba</span>
        </router-link>
        <button
          class="md:hidden ml-4 p-2 rounded text-gray-300 hover:text-white focus:outline-none"
          @click="toggleMobileMenu"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <nav class="md:flex md:flex-row md:items-center hidden space-x-4">
        <router-link to="/nosotros" class="hover:text-gray-400">Nosotros</router-link>
        <router-link to="/documentos" class="hover:text-gray-400">Documentación</router-link>
      </nav>
    </div>
    <div
      v-if="mobileMenuOpen"
      class="md:hidden absolute top-0 left-0 right-0 bg-gray-700 transition-transform transform duration-300 ease-in-out"
    >
      <nav class="flex flex-col py-6 space-y-2">
        <router-link
          to="/nosotros"
          class="px-6 py-3 text-gray-300 hover:bg-gray-600 hover:text-white"
          @click="closeMobileMenu"
        >
          Nosotros
        </router-link>
        <router-link
          to="/documentos"
          class="px-6 py-3 text-gray-300 hover:bg-gray-600 hover:text-white"
          @click="closeMobileMenu"
        >
          Documentación
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
