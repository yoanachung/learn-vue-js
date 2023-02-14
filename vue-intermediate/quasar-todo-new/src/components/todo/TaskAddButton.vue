<template>
  <div class="addBtn">
    <q-btn @click="prompt = true" color="primary" icon="add" round />
    <q-dialog v-model="prompt" @hide="closeDialog">
      <q-card class="full-width">
        <q-form @submit="addTask">
          <q-card-section>
            <div class="text-h6">New task</div>
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-input
              filled
              autofocus
              v-model="newTitle"
              label="What's your new task?"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type something',
              ]"
            />
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" @click="closeDialog" />
            <q-btn flat label="Add task" type="submit" color="primary" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { TodoTask } from 'components/models';
import { useTaskStore } from 'src/stores/todo-task-store';
import { ref } from 'vue';

let prompt = ref(false);
const newTitle = ref('');
const taskStore = useTaskStore();

function addTask() {
  const newTask: TodoTask = {
    id: taskStore.nextId,
    title: newTitle.value,
    done: false,
  };

  taskStore.addTask(newTask);
  closeDialog();
}

function closeDialog() {
  newTitle.value = '';
  prompt.value = false;
}
</script>

<style scoped lang="scss"></style>
