<script setup>
import { ref, onMounted } from 'vue';
import { 
  registerUser, 
  loginUser, 
  logoutUser, 
  currentUser 
} from '../utils/auth';

// Состояния для модалок
const showRegister = ref(false);
const showLogin = ref(false);
const regUsername = ref('');
const regPassword = ref('');
const loginUsername = ref('');
const loginPassword = ref('');

// Загрузка состояния при монтировании
onMounted(() => {
  const savedUser = localStorage.getItem('current_user');
  if (savedUser) {
    currentUser.value = JSON.parse(savedUser);
  }
});

// Обработчики
const handleRegister = () => {
  try {
    if (!regUsername.value || !regPassword.value) {
      alert('Заполните все поля!');
      return;
    }
    
    registerUser(regUsername.value, regPassword.value);
    alert('Регистрация успешна!');
    showRegister.value = false;
    regUsername.value = '';
    regPassword.value = '';
  } catch (e) {
    alert(e.message);
  }
};

const handleLogin = () => {
  try {
    if (!loginUsername.value || !loginPassword.value) {
      alert('Заполните все поля!');
      return;
    }
    
    loginUser(loginUsername.value, loginPassword.value);
    alert(`Добро пожаловать, ${currentUser.value.username}!`);
    showLogin.value = false;
    loginUsername.value = '';
    loginPassword.value = '';
  } catch (e) {
    alert(e.message);
  }
};

const handleLogout = () => {
  logoutUser();
  alert('Вы вышли из системы');
};
</script>

<template>
  <header>
    <h1 class="title">My App</h1>
    <div class="auth-section">
      <span v-if="currentUser" class="user-info">
        Привет, {{ currentUser.username }}!
        <button @click="handleLogout" class="logout-btn">Выйти</button>
      </span>
      <div v-else class="auth-buttons">
        <button @click="showRegister = true">Регистрация</button>
        <button @click="showLogin = true">Вход</button>
      </div>
    </div>

    <!-- Модалка регистрации -->
    <div v-if="showRegister" class="modal">
      <div class="modal-content">
        <h3>Регистрация</h3>
        <input v-model="regUsername" placeholder="Имя пользователя">
        <input v-model="regPassword" type="password" placeholder="Пароль">
        <div class="modal-actions">
          <button @click="handleRegister">Зарегистрироваться</button>
          <button @click="showRegister = false">Отмена</button>
        </div>
      </div>
    </div>

    <!-- Модалка входа -->
    <div v-if="showLogin" class="modal">
      <div class="modal-content">
        <h3>Вход</h3>
        <input v-model="loginUsername" placeholder="Имя пользователя">
        <input v-model="loginPassword" type="password" placeholder="Пароль">
        <div class="modal-actions">
          <button @click="handleLogin">Войти</button>
          <button @click="showLogin = false">Отмена</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #292c31;
  color: white;
}

.auth-buttons button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 300px;
  color: #333;
}

.modal-content input {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
}

.modal-actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.logout-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>