<script setup>
console.log('Main.vue загружен!')
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

document.querySelector('main').style.display = 'block'
</script>

<template>
  <main class="main-content">
    <div class="hero-section">
      <h1>Готов к собеседованию</h1>
      <div class="divider"></div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  padding: 4rem 2rem;
  min-height: calc(100vh - 160px);
  background: #f8f9fa;
}

.hero-section {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.divider {
  width: 60px;
  height: 4px;
  background: #4CAF50;
  margin: 2rem auto;
}
</style>