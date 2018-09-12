<template>
    <div>
        <h1>Helo World</h1>
        <Hello />
        <HelloData />
    </div>
</template>

<script>
    import Hello from './HelloWorld.vue';
    import HelloData from './Test/Hello.vue';
    export default {
        name: "App",
        components: ['Hello', 'HelloData']
    }
</script>

<style scoped>

</style>