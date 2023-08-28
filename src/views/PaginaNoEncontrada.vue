<template>
  <div class="container flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
      <p class="text-lg text-gray-600 mb-2">
        Parece que la página que estás buscando no existe. ¡No te preocupes, aquí tienes un enlace
        para volver a la página principal!
      </p>
      <router-link to="/" class="text-blue-500 hover:underline"
        >Volver a la página principal</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply mx-auto p-8 bg-white rounded shadow-md;
  max-width: 600px;
}
</style>
