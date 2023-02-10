<template>
  <q-page class="bg-grey-3 column">

    <TodoAdd
      v-on:addTask="addTask"></TodoAdd>    

    <TodoList 
      v-bind:propsdata="tasks"
      v-on:deleteTask="deleteTask"
      v-on:toggleTask="toggleTask"></TodoList>

  </q-page>
</template>

<script>
import TodoList from '../components/todo/TodoList.vue'
import TodoAdd from '../components/todo/TodoAdd.vue'

export default {
  data() {
    return {
      tasks: [],
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
    toggleTask(index) {
      this.tasks[index].done = !this.tasks[index].done
    },
    addTask(newTask) {
      this.tasks.push({
        title: newTask,
        done: false
      })
    }
  },
  components: {
    TodoList,
    TodoAdd
  }
}
</script>

<style>

</style>