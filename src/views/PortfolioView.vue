<script setup>
import CardTemplate from "../components/CardTemplate.vue";
</script>

<template>
  <section class="portfolio portfolio-section">
    <h2 class="category-heading">Projects</h2>

    <div class="portfolio-grid" v-motion-pop>
      <CardTemplate />
    </div>
  </section>
</template>
