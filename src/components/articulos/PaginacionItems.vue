<template>
  <div>
    <ol class="flex justify-center gap-2 text-xs font-medium mb-4">
      <li>
        <button
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          @click.prevent="navigatePage('prev')"
        >
          <span class="sr-only">Página anterior</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </li>

      <li v-for="pageNumber in displayedPages" :key="pageNumber">
        <button
          :class="[
            'block h-8 w-8 rounded border',
            pageNumber === currentPage
              ? 'border-blue-600 bg-blue-600 text-white'
              : 'border-gray-100 bg-white text-gray-900',
            'text-center leading-8'
          ]"
          @click.prevent="navigatePage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </li>

      <li>
        <button
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          @click.prevent="navigatePage('next')"
        >
          <span class="sr-only">Página siguiente</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ol>

    <div class="flex items-center justify-end text-xs text-gray-600">
      <div class="mr-4">
        Mostrando
        {{ (currentPage - 1) * itemsPerPage + 1 }} -
        {{ Math.min(currentPage * itemsPerPage, totalItems) }} de {{ totalItems }} ítems
      </div>
      <div class="mr-4">
        Ítems por página:
        <select
          v-model="itemsPerPage"
          @change="updateItemsPerPage"
          class="px-2 py-1 border rounded bg-white text-gray-900"
        >
          <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div>Página {{ currentPage }} de {{ totalPages }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTiendaArticulos } from '@/stores/tiendaArticulos'
import { ref, computed } from 'vue'

const tiendaArticulos = useTiendaArticulos()
const currentPage = ref(1)
const itemsPerPage = ref(6)
const itemsPerPageOptions = [6, 12, 24]

function navigatePage(page: string | number) {
  if (page === 'prev' && currentPage.value > 1) {
    currentPage.value--
  } else if (page === 'next' && currentPage.value < totalPages.value) {
    currentPage.value++
  } else if (typeof page === 'number') {
    currentPage.value = page
  }
  tiendaArticulos.currentPage = currentPage.value
}

function updateItemsPerPage() {
  currentPage.value = 1
  tiendaArticulos.currentPage = currentPage.value
  tiendaArticulos.itemsPerPage = itemsPerPage.value
}
const totalPages = computed(() => tiendaArticulos.totalPages)
const totalItems = computed(() => tiendaArticulos.totalPosts)

const displayedPages = computed(() => {
  const totalDisplayedPages = 6
  const middlePage = Math.floor(totalDisplayedPages / 2)
  const startPage = Math.max(1, currentPage.value - middlePage)
  const endPage = Math.min(startPage + totalDisplayedPages - 1, totalPages.value)

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index)
})
</script>
