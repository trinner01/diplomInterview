<script setup>
import { currentUser } from '../utils/auth'
</script>

<template>
  <main class="cabinet">
    <h2>Личный кабинет</h2>
    <div v-if="currentUser" class="user-info">
      <p>Имя пользователя: {{ currentUser.username }}</p>
      <p>Дата регистрации: {{ new Date().toLocaleDateString() }}</p>
    </div>
  </main>
</template>

<style scoped>
.cabinet {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.user-info {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}
</style>