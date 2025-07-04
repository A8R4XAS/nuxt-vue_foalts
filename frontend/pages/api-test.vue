// File: frontend/pages/api-test.vue
// This file is part of the Nuxt.js application.
<template>
  <div>
    <h1>🔗 Backend-Test</h1>
    <p v-if="data">Antwort vom Server: {{ data.message }}</p>
    <p v-else>Lade Daten…</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const data = ref<any>(null);

onMounted(async () => {
  const res = await fetch('http://localhost:3001/api');
  data.value = await res.json();
});
</script>
