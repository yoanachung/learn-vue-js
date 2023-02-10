<template>
<div>
  <q-list class="bg-white" separator border>
    <q-item
      v-for="(task, index) in propsdata"
      :key="task.title"
      @click="task.done = !task.done"
      :class="{ 'done bg-blue-1': task.done }"
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
      <q-item-section v-if="task.done" side>
        <q-btn
          @click.stop="deleteTask(index)"
          flat
          round
          dense
          color="primary"
          icon="delete"
        />
      </q-item-section>
    </q-item>
  </q-list>

  <div
    v-if="!propsdata.length" 
    class="no-tasks absolute-center">
    <div class="text-h5 text-center">
      No tasks
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    deleteTask(index) {
      this.$emit("deleteTask", index)
    }
  }
};
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