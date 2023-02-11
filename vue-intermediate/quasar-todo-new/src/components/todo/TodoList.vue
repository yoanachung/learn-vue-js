<template>
  <div>
    <q-list class="bg-white" separator border>
      <q-item
        v-for="task in todoTasks"
        :key="task.id"
        :class="{ 'done bg-blue-1': task.done }"
        @click="todoStore.toggleTask(task.id)"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            class="no-pointer-events"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            @click.stop="todoStore.deleteTask(task.id)"
            flat
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import { TodoTask } from 'components/models';
import { defineComponent, ref } from 'vue';
import { useTodoStore } from '../../stores/todo-store';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();
    const todoTasks = ref<TodoTask[]>(todoStore.tasks);
    return { todoStore, todoTasks };
  },
});
</script>

<style scoped lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-tasks {
  opacity: 0.5;
}
</style>
