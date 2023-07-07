<script setup lang="ts">
import { ICategory } from 'types/category.types';

//
const { getCategories } = useWpApi();
const { data: categories, pending } = await getCategories<ICategory[]>();
</script>

<template>
  <div v-if="pending">Загрузка...</div>

  <div v-else-if="!categories?.length">Данные не получены</div>

  <section v-else class="categories">
    <h1 class="categories__title">Категории</h1>

    <div class="breadcrumbs">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="`/categories/${category.slug}`"
      >
        #{{ category.name }}
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="css" scoped>
.categories__title {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
}

.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.breadcrumbs a {
  color: black;
  background-color: rgb(226, 226, 226);
  border-radius: 8px;
  padding: 10px;
  transition: background-color 0.3s;
}

.breadcrumbs a:hover {
  background-color: rgb(197, 197, 197);
}
</style>
