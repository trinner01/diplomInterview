<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <Header />
    <RouterView /> <!-- Основной контент -->
    <Footer />
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.main-content {
  flex: 1;
  padding: 20px;
}
</style>