<template>
  <main class="main-page">
    <div class="header">
      <router-link to="/" class="title-link">
        <h1 class="title">Выберите специальность для подготовки</h1>
      </router-link>
    </div>
    <div class="content">
      <section class="interviews-section">
        <div class="card-grid">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="card-container"
            @click="startQuiz(card.id)"
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
import { useRouter } from 'vue-router';

const router = useRouter();

const cards = [
  { id: 'QA', label: 'QA - Тестирование' },
  { id: 'FrontEnd', label: 'Front End разработчик' },
  { id: 'Mobile', label: 'Мобильный разработчик' },
  { id: 'BackEnd', label: 'BackEnd разработчик' },
  { id: 'FullStack', label: 'FullStack разработчик' },
  { id: 'JS', label: 'JavaScript разработчик' },
  { id: 'SysAdm', label: 'Системный администратор' },
  { id: 'Game', label: 'Разработчик игр' },
];

const startQuiz = (category) => {
  router.push({ name: 'Quiz', params: { category } });
};
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
  transition: transform 0.3s ease; /* Плавное увеличение */
}

.card-container:hover {
  transform: scale(1.05); /* Увеличение при наведении */
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

#QA_img {
  background: url(/public/img/QA-Test.png) no-repeat center center/cover;
  opacity: 80%;
}

#FrontEnd_img {
  background: url(/public/img/FrontEnd-Dev.png) no-repeat center center/cover;
  opacity: 80%;
}

#Mobile_img {
  background: url(/public/img/mobile-Dev.png) no-repeat center center/cover;
  opacity: 80%;
}
</style>
