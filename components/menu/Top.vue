<script setup lang="ts"></script>

<template>
  <nav class="menu-top">
    <div class="container">
      <div class="menu-top__vn">
        <NuxtLink to="/" class="logo">Блок статей</NuxtLink>

        <ul class="menu-top__links">
          <li>
            <NuxtLink to="/">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/categories">Категории</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.menu-top {
  background-color: black;
}

.menu-top a {
  color: white;
}

.logo {
  letter-spacing: 3px;
}

.menu-top__vn {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-top__links {
  display: flex;
  column-gap: 20px;
}

.menu-top__links a.active {
  color: aqua;
}
</style>
