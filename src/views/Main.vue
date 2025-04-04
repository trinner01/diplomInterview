<template>
  <main class="main-page">
    <div class="header">
      <h1>Выберите специальность для подготовки</h1>
    </div>
    <div class="content">
      <section class="interviews-section">
        <div class="card-grid">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="card-container"
          >
            <div class="card" :id="card.id"></div>
            <div class="card-label">{{ card.label }}</div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const cards = [
  { id: 'QA-Test', label: 'QA - Тестирование' },
  { id: 'FrontEnd-Dev', label: 'Front End разработчик' },
  { id: 'mobile-Dev', label: 'Мобильный разработчик' },
  // Добавьте больше карточек по мере необходимости
];
</script>

<style scoped>
.main-page {
  max-width: 100%;
}

.header {
  text-align: left;
  margin-bottom: 3rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 5rem;
  margin-top: 1rem;
  margin-left: 2rem;
}

h3 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  text-align: center;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card-container {
  width: 300px; /* Фиксированная ширина карточки */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.card {
  width: 100%;
  height: 200px; /* Высота карточки */
  background: #f8f9fa;
  border: solid #6BB8FF 1px;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
}

.card-label {
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
}

#QA-Test {
  background: url(/public/img/QA-Test.png) no-repeat center center/cover;
  opacity: 50%;
}

#FrontEnd-Dev {
  background: url(/public/img/FrontEnd-Dev.png) no-repeat center center/cover;
}

#mobile-Dev {
  background: url(/public/img/mobile-Dev.png) no-repeat center center/cover;
}
</style>