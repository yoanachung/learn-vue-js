<template>
  <q-page class="bg-grey-3 column">

    <div class="row q-pa-sm bg-white">
      <q-btn 
        @click="prompt = true"
        class="addBtn"
        round
        color="primary" 
        icon="add"/>
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
              @keyup.enter="addTask"/>
          </q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add task" @click="addTask"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>

    <q-list 
      class="bg-white"
      separator
      border>
      <q-item 
        v-for="(task, index) in tasks" 
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-blue-1' : task.done }"
        clickable
        v-ripple>
        <q-item-section avatar>
          <q-checkbox 
            v-model="task.done" 
            class="no-pointer-events"
            color="primary" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
          v-if="task.done"
          side>
          <q-btn 
            @click.stop="deleteTask(index)"
            flat 
            round 
            dense 
            color="primary" 
            icon="delete" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      newTask: "",
      prompt: false
    }
  },
  methods: {
    deleteTask(index) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete the task?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.tasks.splice(index, 1)
        this.$q.notify({
          message: 'Task deleted',
          timeout: 600
        })
      })
    },
    addTask() {
      this.prompt = false
      this.tasks.push({
        title: this.newTask,
        done: false
      })
      this.newTask = ""
    }
  }
}
</script>

<style scoped lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.addBtn {
  margin: 6px 5px auto auto;
}
</style>