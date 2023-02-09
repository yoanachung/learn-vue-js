<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleDrawer"
      />

      <q-toolbar-title> Quasar App </q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
    <div class="q-px-lg q-pt-xl">
      <div class="text-h3">TODO</div>
      <div class="text-subtitle1">{{ todaysDate }}</div>
    </div>
    <q-img
      src="../../statics/mountains.jpeg"
      class="header-image absolute-top"
    />
  </q-header>
</template>

<script>
import { date } from "quasar";

export default {
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "ddd MMM D, YYYY");
    },
  },
  methods: {
    toggleDrawer() {
      this.$emit("toggleDrawer");
    },
  },
};
</script>

<style scoped>
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>