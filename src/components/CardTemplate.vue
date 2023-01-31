<script setup>
import { cardStore } from "../stores/cards";
const getCards = cardStore();
</script>

<template>
  <div
    v-for="card in getCards.cards"
    :key="card"
    class="portfolio-card"
    v-motion-pop
  >
    <h2 class="portfolio-card-heading">{{ card.name }}</h2>

    <div class="my-5">
      <img
        :src="card.preview"
        :title="`${card.name} preview`"
        :alt="`${card.name} preview`"
      />

      <p class="my-3 tracking-wide">{{ card.description }}</p>

      <a
        :href="`${card.prefix}${card.appLink}`"
        class="app-link font-mono my-3"
      >
        <font-awesome-icon
          v-if="card.appLink"
          icon="fa-solid fa-link"
        ></font-awesome-icon>
        {{ card.appLink }}
      </a>
    </div>

    <a :href="card.repo" class="cta-btn font-mono">
      <font-awesome-icon icon="fa-solid fa-code-branch"></font-awesome-icon>
      Github Repository
    </a>
  </div>
</template>
