<script setup>
import { currentUser } from '../utils/auth'
</script>

<template>
  <main class="cabinet">
    <div class="profile-header">
      <h2>Личный кабинет</h2>
    </div>
    <div class="details">
      <section class="interviews-section">
        <h3>Пройденные собеседования</h3>
        <div class="interview-cards">
          <!-- Карточка 1 -->
          <div class="card-container">
            <div class="card" id="QA-Test"></div>
            <div class="card-label">QA - Тестирование</div>
          </div>
          <!-- Карточка 2 -->
          <div class="card-container">
            <div class="card" id="FrontEnd-Dev"></div>
            <div class="card-label">Front End разработчик</div>
          </div>
          <!-- Карточка 3 -->
          <div class="card-container">
            <div class="card" id="mobile-Dev"></div>
            <div class="card-label">Мобильный разработчик</div>
          </div>
          <!-- Добавьте больше карточек по мере необходимости -->
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

.username {
  font-size: 1.4rem;
  color: #4CAF50;
  font-weight: 500;
}

.interviews-section,
.department-results {
  margin: 2rem 0;
  padding: 2rem;
  background: #c5ecff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

h3 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  text-align: center;
}

.interview-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Карточки по 150px в ширину */
  gap: 1.5rem;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* Расстояние между карточкой и текстом */
}

.card {
  width: 270px;
  height: 270px;
  background: #f8f9fa;
  border: solid #6BB8FF 1px;
  border-radius: 60px;
  background-size: cover; /* Чтобы изображение заполняло карточку */
  background-position: center; /* Центрируем изображение */
}

.card-label {
  text-align: center;
  font-size: 16px; /* Размер текста */
  color: #2c3e50;
}

#QA-Test {
  background: url(/public/img/QA-Test.png) no-repeat center center/cover;;
}

#FrontEnd-Dev {
  background: url(/public/img/FrontEnd-Dev.png) no-repeat center center/cover;;
}

#mobile-Dev {
  background: url(/public/img/mobile-Dev.png) no-repeat center center/cover;;
}

.stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  flex: 1;
}

.stat-value {
  font-size: 2.2rem;
  color: #4CAF50;
  font-weight: 600;
}

.stat-label {
  color: #7f8c8d;
  margin-top: 0.5rem;
}
</style>