<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HeaderPage from './components/Header.vue'
import FooterPage from './components/Footer.vue'
</script>
<template>
  <HeaderPage/>
  <body class="bg-Black">
    <RouterView/>
  </body>
  <FooterPage/>
</template>