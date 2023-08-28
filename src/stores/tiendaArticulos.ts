import { defineStore } from 'pinia'
import clienteAxios from '@/config/clienteAxios'
import type { Articulo } from '@/types/Articulo'

export const useTiendaArticulos = defineStore({
  id: 'articulo',
  state: () => ({
    articulos: [] as Articulo[],
    totalPosts: 0,
    currentPage: 1,
    itemsPerPage: 6,
    busqueda: ''
  }),
  actions: {
    async obtenerArticulos() {
      try {
        const response = await clienteAxios.get('/posts')
        this.articulos = response.data
        this.totalPosts = response.data.length
      } catch (error) {
        console.error('Error al obtener los artículos:', error)
      }
    },
    buscarArticulos(titulo: string): Articulo[] {
      const buscar = this.busqueda.toLowerCase()
      return this.articulos.filter((articulo) => articulo.title.toLowerCase().includes(buscar))
    },
    obtenerArticulosPaginados(articulos: Articulo[], pagina: number): Articulo[] {
      const startIndex = (pagina - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return articulos.slice(startIndex, endIndex)
    }
  },
  getters: {
    totalPages(): number {
      if (this.busqueda) {
        const articulosFiltrados = this.buscarArticulos(this.busqueda)
        return Math.ceil(articulosFiltrados.length / this.itemsPerPage)
      } else {
        return Math.ceil(this.totalPosts / this.itemsPerPage)
      }
    },
    articulosFiltradosPaginados(): Articulo[] {
      if (this.busqueda.trim) {
        const articulosFiltrados = this.buscarArticulos(this.busqueda)
        this.totalPosts = articulosFiltrados.length
        return this.obtenerArticulosPaginados(articulosFiltrados, this.currentPage)
      } else {
        return this.obtenerArticulosPaginados(this.articulos, this.currentPage)
      }
    }
  }
})
