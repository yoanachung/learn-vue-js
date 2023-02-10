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

    <TodoList 
      v-bind:propsdata="tasks"
      v-on:deleteTask="deleteTask"></TodoList>

    <div
      v-if="!tasks.length" 
      class="no-tasks absolute-center">
      <div class="text-h5 text-center">
        No tasks
      </div>
    </div>
  </q-page>
</template>

<script>
import TodoList from '../components/todo/TodoList.vue'

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
  },
  components: {
    TodoList
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
.no-tasks {
  opacity: 0.5;
}
</style>