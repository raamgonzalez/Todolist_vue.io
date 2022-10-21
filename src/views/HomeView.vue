<script setup>

  import {todosFactory} from '../todosSetup';

  const {todosIncompleted, todosCompleted, toggle, deleteTodo} = todosFactory();

</script>

<template>
  <main>
    <div class="container__child">
      <h2>Todo list</h2>
      <p v-if = "todosIncompleted.length === 0">Nothing todo</p>
      <ul id="incomplete-tasks">
        <li v-for="todo in todosIncompleted" :key="todo.id" @click="toggle(todo.id)">
          <input type="checkbox">
          <label>{{ todo.name }}</label>
          <button class="delete" @click= "deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
      <h2>Completed</h2>
      <ul id="completed-tasks">
        <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)">
          <input type="checkbox" checked @click="toggle(todo.id)">
          <label>{{ todo.name }}</label>
          <button class="delete" @click= "deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
</style>
