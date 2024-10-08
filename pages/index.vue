<template>
  <div>
    <h1>Главная страница</h1>
    <div class="card-container">
      <div v-for="card in cards" :key="card.id" class="card">
        {{ card.text }}
      </div>
    </div>
    <nuxt-link to="/settings">Настройки</nuxt-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCardsStore } from '~/store/cardsStore';

const cardsStore = useCardsStore();
const cards = ref([]);

onMounted(() => {
  cards.value = cardsStore.cards;
});
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  width: 150px;
  height: 150px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  border-radius: 8px;
}
</style>
