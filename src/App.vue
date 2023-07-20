<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header-footer/Header.vue'
import Footer from './components/Header-footer/Footer.vue'

</script>

<template>
  <Header />

  <RouterView />
  <Footer />
</template>


