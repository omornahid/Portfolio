<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <section class="fixed-nav">
      <nav id="nav" class="navbar">
        <RouterLink to="/" class="nav-link" title="Home">
          <font-awesome-icon
            icon="fa-solid fa-house"
            class="-text-gradient"
          ></font-awesome-icon>
          <span class="nav-link-extension">Home</span>
        </RouterLink>

        <RouterLink to="/about" class="nav-link" title="About me">
          <font-awesome-icon icon="fa-solid fa-user" />
          <span class="nav-link-extension">About</span>
        </RouterLink>

        <RouterLink to="/portfolio" class="nav-link" title="My portfolio">
          <font-awesome-icon icon="fa-solid fa-film"></font-awesome-icon>
          <span class="nav-link-extension">Portfolio</span>
        </RouterLink>

        <RouterLink to="/education" class="nav-link" title="Education">
          <font-awesome-icon icon="fa-solid  fa-school"></font-awesome-icon>
          <span class="nav-link-extension">Education</span>
        </RouterLink>

        <RouterLink to="/contact" class="nav-link" title="Contact me">
          <font-awesome-icon icon="fa-solid fa-address-book" />
          <span class="nav-link-extension">Contact</span>
        </RouterLink>
      </nav>
    </section>
  </header>

  <RouterView />
</template>
<style scoped>
#nav a.router-link-exact-active {
  /* color: #706fd3; */
  color: #cd84f1;
  font-weight: bold;
}
</style>
