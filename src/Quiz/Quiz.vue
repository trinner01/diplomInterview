<template>
  <div class="quiz-container">
    <h2>Тест по {{ quizCategory }}</h2>
    <div v-if="currentQuestion" class="question">
      <p>{{ currentQuestion.question }}</p>
      <button
        v-for="(option, index) in currentQuestion.options"
        :key="index"
        @click="answerQuestion(option)"
      >
        {{ option }}
      </button>
    </div>
    <div v-else>
      <p>Тест завершен!</p>
      <p>Правильных ответов: {{ correctAnswers }} из 20</p>
      <button @click="restartQuiz">Повторить тест</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const quizCategory = ref('');
const questions = ref([]);
const selectedQuestions = ref([]);
const currentQuestionIndex = ref(0);
const correctAnswers = ref(0);

const currentQuestion = ref(null);

onMounted(async () => {
  quizCategory.value = route.params.category;
  questions.value = await loadQuestions(quizCategory.value);
  selectRandomQuestions();
  startQuiz();
});

const loadQuestions = async (category) => {
  try {
    const response = await fetch(`/path/to/questions/${category}_quest.json`);
    if (!response.ok) {
      throw new Error('Не удалось загрузить вопросы');
    }
    return response.json();
  } catch (error) {
    console.error('Ошибка загрузки вопросов:', error);
    return [];
  }
};

const selectRandomQuestions = () => {
  const shuffledQuestions = [...questions.value].sort(() => Math.random() - 0.5);
  selectedQuestions.value = shuffledQuestions.slice(0, 20);
};

const startQuiz = () => {
  currentQuestionIndex.value = 0;
  correctAnswers.value = 0;
  showNextQuestion();
};

const showNextQuestion = () => {
  if (currentQuestionIndex.value < selectedQuestions.value.length) {
    currentQuestion.value = selectedQuestions.value[currentQuestionIndex.value];
  } else {
    currentQuestion.value = null;
  }
};

const answerQuestion = (selectedOption) => {
  if (selectedOption === currentQuestion.value.answer) {
    correctAnswers.value++;
  }
  currentQuestionIndex.value++;
  showNextQuestion();
};

const restartQuiz = () => {
  selectRandomQuestions();
  startQuiz();
};
</script>

<style scoped>
.quiz-container {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.question {
  margin-bottom: 2rem;
}

button {
  display: block;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;
  cursor: pointer;
}
</style>
