<template>
  <section>
    <h1 class="items-center text-lg font-bold text-gray-900 sm:text-xl p-2">Posts</h1>
    <div class="rounded-md shadow-m px-5 py-2 mx-auto">
      <div class="flex flex-wrap gap-4 items-center">
        <div v-if="cargando" class="w-full h-full flex items-center justify-center">
          <div class="text-center p-4">
            <p>Cargando artículos...</p>
            <Loading />
          </div>
        </div>
        <div v-else class="w-full">
          <div>
            <input
              v-model="tiendaArticulos.busqueda"
              placeholder="Buscar artículo"
              class="px-4 py-2 w-full rounded-md border focus:ring focus:ring-blue-300"
            />
          </div>

          <div class="flex gap-4 flex-wrap justify-center my-4">
            <ArticuloItem
              v-for="articulo in articulosFiltradosPaginados"
              :key="articulo.id"
              :articulo="articulo"
            />
          </div>

          <div>
            <PaginacionItems class="mt-4" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useTiendaArticulos } from '@/stores/tiendaArticulos'
import PaginacionItems from './PaginacionItems.vue'
import ArticuloItem from './ArticuloItem.vue'
import Loading from '../commons/LoadingItems.vue'

const tiendaArticulos = useTiendaArticulos()
const cargando = ref(true)

onMounted(async () => {
  await tiendaArticulos.obtenerArticulos()
  cargando.value = false
})

const articulosFiltradosPaginados = computed(() => tiendaArticulos.articulosFiltradosPaginados)
</script>
