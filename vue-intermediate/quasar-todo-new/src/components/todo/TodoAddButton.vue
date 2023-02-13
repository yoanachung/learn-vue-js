<template>
  <div class="row q-pa-sm bg-white">
    <q-btn
      @click="prompt = true"
      class="addBtn"
      color="primary"
      icon="add"
      round
    />
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">New task</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="newTitle"
            autofocus
            placeholder="What's your new task?"
            @keypress.enter="addTask"
          />
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Add task" @click="addTask" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { TodoTask } from 'components/models';
import { useTodoStore } from '../../stores/todo-store';
import { ref } from 'vue';

let prompt = ref(false);
const newTitle = ref('');

function addTask() {
  const todoStore = useTodoStore();

  const newTask: TodoTask = {
    id: todoStore.nextId,
    title: newTitle.value,
    done: false,
  };

  todoStore.addTask(newTask);
  newTitle.value = '';
  prompt.value = false;
}
</script>

<style scoped lang="scss">
.addBtn {
  margin: 6px 5px auto auto;
}
</style>
