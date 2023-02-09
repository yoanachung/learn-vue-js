<template>
  <div class="inputBox shadow">
    <input v-model="newTodoItem" v-on:keyup.enter="addTodo" type="text">
    <span v-on:click="addTodo" class="addContainer">
      <i class="fas fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function() {
      if (this.newTodoItem === "") {
        return;
      }

      this.$emit("addTodoItem", this.newTodoItem);
      this.clearInput();
    },
    clearInput: function() {
      this.newTodoItem = "";
    }
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
</style>