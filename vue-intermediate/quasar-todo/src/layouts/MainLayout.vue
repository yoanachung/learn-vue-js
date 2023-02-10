<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader v-on:toggleDrawer="toggleDrawer"></AppHeader>
    <AppNav v-bind:propsdata="leftDrawerOpen"></AppNav>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from '../components/common/AppHeader.vue'
import AppNav from '../components/common/AppNav.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppNav
  },
  data () {
    return {
      leftDrawerOpen: true
    }
  },
  methods: {
    toggleDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  }
}
</script>

<style>

</style>