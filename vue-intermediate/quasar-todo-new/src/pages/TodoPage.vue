<template>
  <q-page class="bg-grey-3 column">
    <TodoAdd></TodoAdd>
    <TodoList></TodoList>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '../components/todo/TodoList.vue';
import TodoAdd from '../components/todo/TodoAdd.vue';

export default defineComponent({
  components: { TodoList, TodoAdd },
});
</script>
