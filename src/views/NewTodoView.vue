<script setup>
import {todosFactory} from '../todosSetup';
import router from '../router';


const {add} = todosFactory();
const addAndNavigate = (name) => {
    add(name);
    router.push('/');
};
</script>

<template>
    <div class="container__child flex flex-row justify-between place-items-center mt-4">
        <input id="new-task" type="text" v-model="name" placeholder="New Tarea" class="rounded-sm py-1 px-2 w-44">
        <button class="button__add font-mono bg-green-400 rounded-md py-1 px-2 shadow-orange-400 shadow-md hover:scale-105" type="add" @click="addAndNavigate(name)">Add</button>
    </div>
</template>

<style>
</style>