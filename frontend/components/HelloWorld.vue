<template>
  <div class="hello">
    <h2>Hallo aus Vue 👋</h2>
    <p>Ich bin eine einfache Komponente, die in Nuxt lebt.</p>
    <button @click="count++">Geklickt: {{ count }}x</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<style scoped>
.hello {
  padding: 1rem;
  background-color: #eef;
  border-radius: 8px;
  text-align: center;
}
</style>
