<template>
    <div class="boiler-plate">
        <h1 class="title">
            {{$t("about.message.title")}}
        </h1>
        <h3 class="sub-title">Template version: {{this.app_version}}</h3>
        <h3 class="sub-title">Author: {{this.author_name}}</h3>
    </div>
</template>

<script>
import { version as app_version, author as author_name}  from '../../package.json';

    export default {
        data(){
            return{
                app_version,
                author_name
            };
        }
    };
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Questrial');

    .boiler-plate{
        color: #3c8c74;
        font-family: Questrial;
        text-align: center;
        .title{
           font-size: 2em;
        }
        .sub-title{
            font-size: 1em;
        }
    }
</style>