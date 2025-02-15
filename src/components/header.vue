<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser, loginUser, logoutUser, currentUser } from '../utils/auth'

const router = useRouter()

const showRegister = ref(false)
const showLogin = ref(false)
const regUsername = ref('')
const regPassword = ref('')
const loginUsername = ref('')
const loginPassword = ref('')

onMounted(() => {
  const savedUser = localStorage.getItem('current_user')
  if (savedUser) currentUser.value = JSON.parse(savedUser)
})

const handleRegister = () => {
  try {
    if (!regUsername.value || !regPassword.value) {
      alert('Заполните все поля!')
      return
    }
    
    registerUser(regUsername.value, regPassword.value)
    alert('Регистрация успешна!')
    showRegister.value = false
    regUsername.value = ''
    regPassword.value = ''
  } catch (e) {
    alert(e.message)
  }
}

const handleLogin = () => {
  try {
    if (!loginUsername.value || !loginPassword.value) {
      alert('Заполните все поля!')
      return
    }
    
    loginUser(loginUsername.value, loginPassword.value)
    alert(`Добро пожаловать, ${currentUser.value.username}!`)
    showLogin.value = false
    loginUsername.value = ''
    loginPassword.value = ''
  } catch (e) {
    alert(e.message)
  }
}
const handleLogout = () => {
  logoutUser()
  // Используем именованный маршрут с учетом basePath
  router.push({ name: 'Home' }).catch(() => {})
}

</script>

<template>
  <header>
    <h1 class="title">Готов к собеседованию</h1>
    <div class="auth-section">
      <span v-if="currentUser" class="user-info">
        <router-link to="/cabinet" class="cabinet-link">Личный кабинет</router-link>
        <button @click="handleLogout" class="logout-btn">Выйти</button>
      </span>
      <div v-else class="auth-buttons">
        <button @click="showRegister = true">Регистрация</button>
        <button @click="showLogin = true">Вход</button>
      </div>
    </div>

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
  background: #c5ecff;
  color: white;
  height: 52px;
}

.auth-buttons button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
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
  border: 1px solid #ddd;
  border-radius: 4px;
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
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.cabinet-link {
  color: white;
  text-decoration: none;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid white;
  border-radius: 4px;
  transition: background 0.3s;
}

.cabinet-link:hover {
  background: rgba(255,255,255,0.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.title {
  color: black;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
}

.auth-buttons button {
  transition: all 0.3s ease;
}

.auth-buttons button:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.modal-content {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>