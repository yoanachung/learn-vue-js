<template>
  <div class="inputBox shadow">
    <input v-model="newTodoItem" v-on:keypress.enter="addTodo" type="text">
    <span v-on:click="addTodo" class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <span @click="showModal = false"><i class="closeModalBtn fas fa-times"></i></span>
        <h3>경고!</h3>
      </template>
      <template #body>
        내용을 입력하세요.
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem === "") {
        this.showModal = true;
        return;
      }

      this.$emit("addTodoItem", this.newTodoItem);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    'Modal': Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
  height: 90%;
  width: 80%;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #64adfb, #7096ff);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
  float: right;
}
</style>