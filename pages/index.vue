<script setup lang="ts">
import { IPost } from 'types/posts.types';

//
const { getPosts } = useWpApi();

const { data: posts, pending } = await getPosts<IPost[]>();
</script>

<template>
  <div v-if="pending">Загрузка...</div>

  <div v-else-if="!posts?.length">Данные не получены</div>

  <section v-else class="articles">
    <BlogCard
      v-for="post in posts"
      :key="post.id"
      :image="post._embedded['wp:featuredmedia'][0]?.source_url"
      :title="post.title.rendered"
      :excerpt="post.excerpt.rendered"
      :slug="post.slug"
    />
  </section>
</template>

<style lang="css" scoped></style>
