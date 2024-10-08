<template>
  <div>
    <h1>Страница не найдена</h1>
    <p>Запрашиваемая страница не существует: {{ $route.path }}</p>
    <nuxt-link to="/">Вернуться на главную</nuxt-link>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  margin-top: 50px;
}
</style>
