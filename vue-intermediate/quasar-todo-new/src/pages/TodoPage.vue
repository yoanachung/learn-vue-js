<template>
  <q-page class="row items-center justify-evenly">
    <TodoAdd></TodoAdd>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoAdd from '../components/todo/TodoAdd.vue';

export default defineComponent({
  components: { TodoAdd },
});
</script>
