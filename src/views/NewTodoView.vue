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
    <div class="container__child">
        <label for="new-task">New Tarea</label>
        <input id="new-task" type="text" v-model="name">
        <button class="button__add" type="add" @click="addAndNavigate(name)">Add</button>
    </div>
</template>

<style>
</style>