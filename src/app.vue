<template>
    <div id="app">
        <h1>Home,hello Vue!</h1>
        <p>
            <router-link to="/">go to home</router-link>
            <router-link to="/products">go to products</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<style>
    #app{
        /* display: flex; */
        color: blueviolet
    }
</style>