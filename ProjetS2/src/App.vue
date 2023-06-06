<script setup lang="ts">
import { RouterLink } from 'vue-router'
import PocketBase from 'pocketbase';
import HeaderPage from './components/Header.vue'
import FooterPage from './components/Footer.vue'

var pocketbase_ip = ''
// @ts-ignore
if (import.meta.env.MODE === 'production')
  pocketbase_ip = 'http://45.155.171.231:80'
else
  pocketbase_ip = 'http://127.0.0.1:8090'

const pb = new PocketBase(pocketbase_ip)
</script>
<template>
   <HeaderPage /> 
  <body class="bg-Black mt-32">
    <Suspense>
      <RouterView/>
    </Suspense>
  </body>
    <FooterPage/> 
</template>