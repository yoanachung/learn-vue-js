<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
        <span v-on:click="toggleComplete(todoItem)" class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}">
          <i class="fas fa-check"></i>
        </span>

        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>

        <span v-on:click="removeTodo(todoItem, index)" class="removeBtn">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    };
  },
  created: function() {
    if (localStorage.length < 1) {
      return;
    }

    for (var i = 0; i < localStorage.length; i++) {
      var obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
      this.todoItems.push(obj);
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  height: 50px;
  line-height: 45px;
  color: rgb(95, 151, 223);
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>