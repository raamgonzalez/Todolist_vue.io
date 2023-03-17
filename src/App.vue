<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { ref } from 'vue';
  import { todosFactory } from "./todosSetup";
  import todosService from "./services/todosService";



const {update} = todosFactory();

const isLoading = ref(true);
async function prefetch(){
  update(await todosService.getTodos());
  isLoading.value = false;
  }
  prefetch();

</script>

<template>
  <div class="container bg-yellow-300 rounded-xl p-8 flex flex-col flex-start shadow-xl shadow-slate-900">
    <h2 v-if = "isLoading" class="font-mono">Loading To-Do Lists</h2>
    <template v-if = "!isLoading">
      <ul class="nav flex flex-row justify-between">
        <RouterLink to="/"><li class="links text-xl font-mono text-center w-28 px-2 py-3 border rounded-lg border-yellow-700 mb-2 shadow-sm shadow-slate-200 hover:scale-105 transition ease-in-out">Todos</li></RouterLink>
        <RouterLink to="/new"><li class="links text-xl font-mono text-center w-28 px-2 py-3 border rounded-lg border-yellow-700 mb-2 shadow-sm shadow-slate-200 hover:scale-105 transition ease-in-out">New Task</li></RouterLink>
      </ul>
      <router-view />
    </template>
  </div>
</template>

<style>
</style>