<template>
  <nav>
    <router-link to="/discord">discord</router-link>
    <router-link to="/twitter" class="disabled">twitter</router-link>
    <router-link
      to="/"
      style="font-size: 2em;line-height:1.3em"
      v-on:click="playhonk"
    >
      🦢
    </router-link>
    <router-link to="/messenger" class="disabled">messenger</router-link>
    <router-link to="/github">github</router-link>
  </nav>
  <router-view />
</template>

<script>
  export default {
    methods: {
      playhonk() {
        let audio = new Audio(require('@/assets/honk1.wav'));
        audio.play();
      },
    },
  };
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap')
  :root
    --primary: #F7630C
  *
    margin: 0
  body
    font-family: 'Gloria Hallelujah', sans-serif
    font-size: 20px
    nav
      // background-color: #c0c0c0
      padding: .2em 8em
      display: flex
      align-items: center
      justify-content: center
      a
        font-size: 1.4em
        margin: 0 1em
        color: inherit
        text-decoration: inherit
        transition: .2s all ease
        text-rendering: geometricPrecision
        &:first-of-type
          // margin-right: 3em
        &.disabled
          opacity: .5
        &:hover,&:focus
          transform: scale(1.1)
</style>
