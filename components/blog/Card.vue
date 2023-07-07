<script setup lang="ts">
defineProps<{
  image?: string;
  title: string;
  excerpt?: string;
  slug: string;
}>();
</script>

<template>
  <article class="article">
    <!-- Изображение -->
    <div v-if="image" class="article__img">
      <img :src="image" />
    </div>

    <!-- Контент -->
    <div class="article__content">
      <h3 class="article__title">{{ title }}</h3>
      <p v-if="excerpt" class="article__desc">{{ excerpt }}</p>
      <NuxtLink :to="`/${slug}`" class="article__btn">Подробнее</NuxtLink>
    </div>
  </article>
</template>

<style lang="css" scoped>
.article {
  background-color: antiquewhite;
  line-height: 24px;
}

.article__img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.article__img img {
  position: absolute;
  object-fit: cover;
}

.article__content {
  padding: 20px;
}

.article__title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.article__desc {
  margin-bottom: 30px;
}

.article__btn {
  color: white;
  background-color: black;
  padding: 10px 20px;
}
</style>
