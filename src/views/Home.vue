<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <main>
    <h1 style="font-size: 8rem">🦢</h1>
    <h1>Hjönk, World!</h1>
    <p>
      hjönkbot is a silly goose with the ability to enter your Voice Chat or
      slide into your DMs and hjönk away.
    </p>
    <div class="btn">
      <router-link to="/discord">Invite to your Discord Server</router-link>
    </div>
  </main>
  <p
    style="
      color: #c0c0c0;
      font-family: sans-serif
    "
  >
    This is a work-in-progress.
  </p>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

  export default defineComponent({
    name: 'Home',
    // components: {
    //   HelloWorld,
    // },
  });
</script>

<style lang="sass" scoped>
  main
    font-family: 'Architects Daughter', sans-serif
    padding: 1em 14em
    h1
      font-family: 'Gloria Hallelujah', sans-serif
    .btn
      a
        margin: .5em
        display: inline-block
        background-color: var(--primary)
        padding: 1em
        border-radius: 6px
        color: white
        text-decoration: inherit
</style>
