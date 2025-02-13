<script setup>
console.log('Main.vue загружен!')
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

document.querySelector('main').style.display = 'block'
</script>

<template>
  <main class="main-content">
    <h2>Готов к собеседованию</h2>
    <p>Все права на страницах<br>У 7</p>
  </main>
</template>

<style scoped>
.main-content {
  padding: 2rem;
  text-align: center;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2rem;
}

p {
  color: #666;
  line-height: 1.6;
  font-size: 1.2rem;
}
</style>