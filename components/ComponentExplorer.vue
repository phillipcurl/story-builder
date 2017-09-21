<template>
  <nav class="component-explorer br b--black-10" :aria-hidden="isOpen" id="component-explorer">
    <div class="component-explorer--menu">
      <div class="bb b--black-10 pa3 cf">
        <a class="f4 fw6 dib fl black link hover-gray" role="menuitem">Menu</a>
        <a @click="closeMenu()" class="f4 fw6 dib fr black link hover-gray">Close</a>
      </div>
      <div class="pa3" role="menu">
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing.">
          <div class="pa2 ph3-ns pb3-ns">
            <div class="dt w-100 mt1">
              <div class="dtc">
                <h1 class="f5 f4-ns mv0">Cat</h1>
              </div>
              <div class="dtc tr">
                <h2 class="f5 mv0">$1,000</h2>
              </div>
            </div>
            <p class="f6 lh-copy measure mt2 mid-gray">
              If it fits, i sits burrow under covers.
            </p>
          </div>
        </article>
        <a class="f4 fw6 db black link hover-near-black" role="menuitem" href="#0">near-black on hover</a>
        <a class="f4 fw6 db black link hover-dark-gray" role="menuitem" href="#0">dark-gray on hover</a>
        <a class="f4 fw6 db black link hover-mid-gray" role="menuitem" href="#0">mid-gray on hover</a>
        <a class="f4 fw6 db black link hover-gray" role="menuitem" href="#0">gray on hover</a>
        <a class="f4 fw6 db black link hover-dark-red" role="menuitem" href="#0">dark-red on hover</a>
        <a class="f4 fw6 db black link hover-red" role="menuitem" href="#0">red on hover</a>
        <a class="f4 fw6 db black link hover-purple" role="menuitem" href="#0">purple on hover</a>
        <a class="f4 fw6 db black link hover-light-purple" role="menuitem" href="#0">light-purple on hover</a>
        <a class="f4 fw6 db black link hover-dark-pink" role="menuitem" href="#0">dark-pink on hover</a>
        <a class="f4 fw6 db black link hover-hot-pink" role="menuitem" href="#0">hot-pink on hover</a>
        <a class="f4 fw6 db black link hover-light-pink" role="menuitem" href="#0">light-pink on hover</a>
        <a class="f4 fw6 db black link hover-dark-green" role="menuitem" href="#0">dark-green on hover</a>
        <a class="f4 fw6 db black link hover-green" role="menuitem" href="#0">green on hover</a>
        <a class="f4 fw6 db black link hover-navy" role="menuitem" href="#0">navy on hover</a>
        <a class="f4 fw6 db black link hover-dark-blue" role="menuitem" href="#0">dark-blue on hover</a>
        <a class="f4 fw6 db black link hover-blue" role="menuitem" href="#0">blue on hover</a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isOpen: 'menuOpen'
    })
  },
  methods: {
    closeMenu: function() {
      setTimeout(() => {
        this.$store.dispatch('closeMenu');
        // this.$store.commit('OPEN_MENU');
      }, 25);
    }
  }
}
</script>

<style scoped>
.component-explorer {
  will-change: top, left;
  bottom: 0;
  left: 0;
  overflow: visible;
  position: fixed;
  width: 250px;
  top: 48px;
  z-index: 1;
  transform: translateX(-250px);
  transition: transform .15s ease-in-out;
}

.component-explorer--menu {
  bottom: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  top: 0;
}
</style>
