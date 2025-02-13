import { ref } from 'vue';
import bcrypt from 'bcryptjs';

const STORAGE_KEY = 'app_users';
export const currentUser = ref(null);

// Инициализация хранилища
const initializeStorage = () => {
    if (!localStorage.getItem(STORAGE_KEY)) {
        const dummyUser = {
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10)
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify([dummyUser]));
    }
};
initializeStorage();

export const registerUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (users.some(u => u.username === username)) {
    throw new Error('Пользователь уже существует');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const loginUser = (username, password) => {
    const users = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const user = users.find(u => u.username === username);

    if (!user) throw new Error('Пользователь не найден');
    if (!bcrypt.compareSync(password, user.password)) {
    throw new Error('Неверный пароль');
    }

    currentUser.value = user;
    localStorage.setItem('current_user', JSON.stringify(user));
return user;
};

export const logoutUser = () => {
    currentUser.value = null;
    localStorage.removeItem('current_user');
};