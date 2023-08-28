<template>
  <div
    class="p-4 relative block overflow-hidden rounded-lg border border-gray-100 sm:p-6 lg:p-8 lg:w-96 bg-white"
  >
    <span
      class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
    ></span>
    <div class="sm:flex sm:justify-between sm:gap-2">
      <div>
        <h3 class="text-lg font-bold text-gray-900 sm:text-xl capitalize">
          {{ articulo.title }}
        </h3>
        <p class="mt-1 text-xs font-medium text-gray-600">Por {{ articulo.userId }}</p>
      </div>
    </div>
    <div class="mt-4">
      <p class="text-sm text-gray-500 normal-case text-justify">{{ contenidoMostrado }}</p>
      <button
        v-if="debeMostrarBotonLeerMas"
        class="mt-2 text-blue-500 underline"
        @click="alternarContenido"
      >
        {{ textoBotonLeerMas }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Articulo } from '@/types/Articulo'

const props = defineProps<{
  articulo: Articulo
}>()

const maxLongitudContenido = 150
const contenido = ref(props.articulo.body)
const contenidoExpandido = ref(false)

const debeMostrarBotonLeerMas = computed(() => {
  return contenido.value.length > maxLongitudContenido
})

const contenidoMostrado = computed(() => {
  const contenidoRecortado = contenido.value.substring(0, maxLongitudContenido)
  return capitalizeFirstLetter(
    contenidoExpandido.value
      ? contenido.value
      : contenidoRecortado + (contenido.value.length > maxLongitudContenido ? '...' : '')
  )
})

const textoBotonLeerMas = computed(() => (contenidoExpandido.value ? 'Ver menos' : 'Ver más'))

const alternarContenido = () => {
  contenidoExpandido.value = !contenidoExpandido.value
}

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
</script>
