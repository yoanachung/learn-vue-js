<template>
  <div>
    <q-list class="bg-white" separator border>
      <q-item
        v-for="task in tasksInFolder"
        :key="task.id"
        :class="{ 'done bg-blue-1': task.done }"
        @click="taskStore.toggleTask(task.id)"
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
            @click.stop="taskStore.deleteTask(task.id)"
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

<script setup lang="ts">
import { computed } from 'vue';
import { useTaskStore } from 'src/stores/todo-task-store';
import { useFolderStore } from 'src/stores/todo-folder-store';

const taskStore = useTaskStore();
const folderStore = useFolderStore();

const tasksInFolder = computed(() =>
  taskStore.tasks.filter((t) => t.folderId == folderStore.currentFolderId)
);
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
