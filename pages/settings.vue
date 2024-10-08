<template>
  <div>
    <h1>Настройки</h1>
    <input v-model="newCardText" placeholder="Текст новой карточки" />
    <button @click="addNewCard">Добавить карточку</button>
    <div v-for="card in cardsStore.cards" :key="card.id" class="card-item">
      <input v-model="card.text" @blur="updateCard(card.id, card.text)" />
      <button @click="deleteCard(card.id)">Удалить</button>
    </div>
    <nuxt-link to="/">На главную</nuxt-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCardsStore } from '~/store/cardsStore';
const cardsStore = useCardsStore();
const newCardText = ref('');

const addNewCard = () => {
  if (newCardText.value) {
    cardsStore.addCard(newCardText.value);
    newCardText.value = '';
  }
};

const updateCard = (id, text) => {
  cardsStore.editCard(id, text);
};

const deleteCard = (id) => {
  cardsStore.deleteCard(id);
};
</script>

<style scoped>
.card-item {
  margin-bottom: 10px;
}
</style>