<template>
  <header class="cf bg-black-90 fixed w-100 ph3 pv3 navbar">
    <div class="fl f6 fw6 ttu tracked">
      <a @click="toggleMenu()" class="link dim white dib mr3" title="Home">Toggle</a>
    </div>
    <nav class="fr f6 fw6 ttu tracked">
      <a class="link dim white dib mr3" href="#" title="About">Link</a>
      <a class="link dim white dib mr3" href="#" title="About">Link</a>
      <a class="link dim white dib mr3" href="#" title="Store">Link</a>
      <a class="link dim white dib" href="#" title="Contact">Link</a>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      showMenu: 'menuOpen'
    })
  },
  methods: {
    toggleMenu: function() {
      if (this.showMenu) {
        this.$store.dispatch('closeMenu');
      } else {
        setTimeout(() => {
          this.$store.dispatch('openMenu');
        }, 25);
      }
    }
  }
}
</script>

<style>

</style>
