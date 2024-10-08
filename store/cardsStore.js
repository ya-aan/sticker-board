import { defineStore } from 'pinia';

export const useCardsStore = defineStore('cards', {
  state: () => ({
    cards: typeof window !== 'undefined' && localStorage.getItem('cards')
      ? JSON.parse(localStorage.getItem('cards'))
      : []
  }),
  actions: {
    addCard(text) {
      this.cards.push({ id: Date.now(), text });
      this.saveCards();
    },
    editCard(id, newText) {
      const card = this.cards.find(card => card.id === id);
      if (card) {
        card.text = newText;
        this.saveCards();
      }
    },
    deleteCard(id) {
      this.cards = this.cards.filter(card => card.id !== id);
      this.saveCards();
    },
    saveCards() {
      if (typeof window !== 'undefined') {
        localStorage.setItem('cards', JSON.stringify(this.cards));
      }
    }
  }
});
