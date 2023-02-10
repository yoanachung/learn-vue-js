<template>
  <div class="row q-pa-sm bg-white">
    <q-btn
      @click="prompt = true"
      class="addBtn"
      round
      color="primary"
      icon="add"
    />
    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">New task</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input
            dense
            v-model="newTask"
            autofocus
            placeholder="What's your new task?"
            @keyup.enter="addTask"
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

<script>
export default {
  data() {
    return {
      newTask: "",
      prompt: false
    }
  },
  methods: {
    addTask() {
      this.$emit("addTask", this.newTask)
      this.newTask = ""
      this.prompt = false
    }
  }
};
</script>

<style scoped>
.addBtn {
  margin: 6px 5px auto auto;
}
</style>