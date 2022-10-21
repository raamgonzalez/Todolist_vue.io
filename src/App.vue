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
  <div class="container">
    <h2 v-if = "isLoading">Loading To-Do Lists</h2>
    <template v-if = "!isLoading">
      <ul class="nav">
        <RouterLink to="/"><li class="links">Todo List</li></RouterLink>
        <RouterLink to="/new"><li class="links">New Todo</li></RouterLink>
      </ul>
      <router-view />
    </template>
  </div>
</template>

<style>
  @import './assets/base.css';
</style>
