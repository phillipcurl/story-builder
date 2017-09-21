<template>
  <section class="container" :class="{'sidebar-opened ': showMenu}">
    <component-explorer/>
    <div class="story-preview navbar-pad-top w-100 mx-auto">
      <article class="athelas pa4">
        <p class="f6 f4-ns lh-copy measure center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis!
        </p>
        <blockquote class="ph0 pv4 f4 f1-ns measure-narrow center">
          <p class="fw9 lh-copy lh-title-ns">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo.
          </p>
        </blockquote>
        <p class="f6 f4-ns lh-copy measure center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eos molestiae doloribus aut, neque, ad illum velit voluptas laboriosam, voluptates illo. Accusamus excepturi aliquam architecto recusandae quidem ut veniam omnis!
        </p>
      </article>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ComponentExplorer from '~/components/ComponentExplorer.vue';

export default {
  computed: {
    ...mapGetters({
      showMenu: 'menuOpen'
    })
  },
  methods: {
    openMenu: function() {
      setTimeout(() => {
        this.$store.dispatch('openMenu');
      }, 25);
    },
    closeMenu: function() {
      this.$store.dispatch('closeMenu');
    }
  },
  components: {
    ComponentExplorer
  }
}
</script>

<style>

</style>
