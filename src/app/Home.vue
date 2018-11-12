<template>
    <div class="boiler-plate">
        <h1 class="title">
            {{$t("home.message.title")}}
        </h1>
    </div>
</template>

<script>
    import Http from 'Services/Utilities/Http'
    export default {
        data(){
            return{

            }
        },
        mounted() {
            new Http().get('/api/users', {}, {})
        }
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Questrial');

    .boiler-plate{
        .title{
            color: #3c8c74;
            font-family: Questrial;
            text-align: center;
        }
    }
</style>
