<script setup>

  import {todosFactory} from '../todosSetup';

  const {todosIncompleted, todosCompleted, toggle, deleteTodo} = todosFactory();

</script>

<template>
  <main>
    <div class="container__child my-6 flex flex-col gap-6">
      <h2 class="font-mono text-xl border-b-2 border-slate-800">Task</h2>
      <p v-if = "todosIncompleted.length === 0" class=" font-mono">Nothing todo</p>
      <ul id="incomplete-tasks" class="flex flex-col gap-6">
        <li v-for="todo in todosIncompleted" :key="todo.id" @click="toggle(todo.id)" class="flex flex-row justify-between gap-8 place-items-center w-full">
          <input type="checkbox">
          <label class="font-mono text-left">{{ todo.name }}</label>
          <button class="delete font-mono bg-rose-400 rounded-md py-1 px-2 shadow-orange-400 shadow-md hover:scale-105 transition ease-in-out" @click= "deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
      <h2 class="font-mono text-xl border-b-2 border-slate-800">Completed</h2>
      <ul id="completed-tasks" class="flex flex-col gap-6">
        <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)" class="flex flex-row justify-between gap-8 place-items-center w-full">
          <input type="checkbox" checked @click="toggle(todo.id)">
          <label class="font-mono text-left line-through">{{ todo.name }}</label>
          <button class="delete delete font-mono bg-rose-400 rounded-md py-1 px-2 shadow-orange-400 shadow-md hover:scale-105" @click= "deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  </main>
</template>

<style>
</style>
