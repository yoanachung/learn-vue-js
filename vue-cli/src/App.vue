<template>
  <div> <!-- 루트 엘리먼트는 하나만 존재해야 한다. -->
    <app-header></app-header>
    {{ str }}
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'hiii'
    }
  },
  components: {
    'app-header': AppHeader,
  }
}
</script>

<style>

</style>