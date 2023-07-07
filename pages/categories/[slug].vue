<script setup lang="ts">
import { IPost } from 'types/posts.types';
import { ICategory } from 'types/category.types';

//
const { params } = useRoute();
const { getPosts, getCategory } = useWpApi();

const { data: categories } = await getCategory<ICategory[]>(params.slug as string);
const { data: posts, pending } = await getPosts<IPost[]>(categories.value?.[0].id);
</script>

<template>
  <div v-if="pending">Загрузка...</div>

  <div v-else-if="!posts?.length">Данные не получены</div>

  <section v-else>
    <h1 class="category__title">Статьи категории</h1>

    <div class="articles">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :image="post._embedded['wp:featuredmedia'][0]?.source_url"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug"
      />
    </div>
  </section>
</template>

<style lang="css" scoped>
.category__title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
}
</style>
