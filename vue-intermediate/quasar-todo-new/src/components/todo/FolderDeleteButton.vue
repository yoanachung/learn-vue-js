<template>
  <div>
    <q-btn
      @click.stop="deleteDialog = true"
      flat
      round
      dense
      color="grey-4"
      icon="delete"
      size="sm"
    />
    <q-dialog v-model="deleteDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Confirm</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          Are you sure you want to delete this folder?
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn
            flat
            label="Delete"
            @click.stop="deleteFolder($attrs.folderId as number)"
          />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFolderStore } from 'src/stores/todo-folder-store';

const folderStore = useFolderStore();
const deleteDialog = ref(false);

function deleteFolder(folderId: number) {
  folderStore.deleteFolder(folderId);
  deleteDialog.value = false;
}
</script>

<style lang="scss" scoped></style>
