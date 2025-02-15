<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <div class="app-container">
    <Header />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  background: #c5ecff;
  border: 1px solid #6bb8ff;
}
</style>