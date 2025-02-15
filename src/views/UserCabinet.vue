<script setup>
import { ref } from 'vue';

const cards = [
  { id: 'QA-Test', label: 'QA - Тестирование' },
  { id: 'FrontEnd-Dev', label: 'Front End разработчик' },
  { id: 'mobile-Dev', label: 'Мобильный разработчик' },
  // Добавьте больше карточек по мере необходимости
];

const currentCard = ref(0); // Начинаем с первой карточки

const nextCard = () => {
  if (currentCard.value < cards.length - 1) {
    currentCard.value += 1;
  }
};

const prevCard = () => {
  if (currentCard.value > 0) {
    currentCard.value -= 1;
  }
};
</script>


<template>
  <main class="cabinet">
    <div class="profile-header">
      <h2>Личный кабинет</h2>
    </div>
    <div class="details">
      <section class="interviews-section">
        <h3>Пройденные собеседования</h3>
        <div class="carousel">
          <div class="interview-cards" :style="{ transform: `translateX(${-currentCard * 370}px)` }">
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="card-container"
            >
              <div class="card" :id="card.id"></div>
              <div class="card-label">{{ card.label }}</div>
            </div>
          </div>
          <button class="carousel-button prev" @click="prevCard">&#10094;</button>
          <button class="carousel-button next" @click="nextCard">&#10095;</button>
        </div>
      </section>

      <section class="department-results">
        <h3>Результаты отдела</h3>
      </section>
    </div>
  </main>
</template>

<style scoped>
.cabinet {
  max-width: 100%;
}

.profile-header {
  text-align: left;
  margin-bottom: 3rem;
}

h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  margin-top: 0;
}

.interviews-section,
.department-results {
  margin: 2rem 0;
  padding: 2rem;
  background: #c5ecff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  text-align: center;
}

.carousel {
  position: relative;
  overflow: hidden; /* Скрываем всё, что выходит за пределы */
  width: 100%; /* Ширина контейнера */
}

.interview-cards {
  display: flex;
  transition: transform 0.5s ease; /* Плавный переход */
  gap: 1rem; /* Расстояние между карточками */
  width: max-content; /* Ширина контейнера равна сумме ширины всех карточек */
}

.card-container {
  flex: 0 0 500px; /* Фиксированная ширина карточки */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.card {
  width: 500px; /* Ширина карточки */
  height: 500px; /* Высота карточки */
  background: #f8f9fa;
  border: solid #6BB8FF 1px;
  border-radius: 60px;
  background-size: cover;
  background-position: center;
}

.card-label {
  text-align: center;
  font-size: 16px;
  color: #2c3e50;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #2c3e50;
  z-index: 10; /* Стрелки поверх карточек */
}

.carousel-button.prev {
  left: 10px; /* Расположение левой стрелки */
}

.carousel-button.next {
  right: 10px; /* Расположение правой стрелки */
}

.carousel-button:hover {
  color: #4CAF50;
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