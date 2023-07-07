<script setup lang="ts">
import { IPost } from 'types/posts.types';

//
const { params } = useRoute();
const { getPost } = useWpApi();
const { data: posts, pending } = await getPost<IPost[]>(<string>params.slug);
</script>

<template>
  <div v-if="pending">Загрузка...</div>

  <div v-else-if="!posts?.length">Данные не получены</div>

  <div v-else class="article">
    <h1 class="article__title">{{ posts?.[0].title.rendered }}</h1>

    <div class="article__data">
      <div>Автор: {{ posts?.[0]._embedded.author[0].name }}</div>
      <div>Опубликовано: {{ posts?.[0].date }}</div>
    </div>

    <div class="article__img">
      <img :src="posts?.[0]._embedded['wp:featuredmedia'][0].source_url" alt="" />
    </div>

    <div class="article__content" v-html="posts?.[0].content.rendered"></div>
  </div>
</template>

<style lang="css" scoped>
.article {
  text-align: center;
}

.article__title {
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 20px;
}

.article__data {
  margin-bottom: 30px;
}

.article__img {
  margin-bottom: 30px;
}

.article__content {
  line-height: 30px;
}
</style>
