<template>
    <div class="boiler-plate">
        <ul class="nav-menu">
            <li>
                <router-link to="/" active-class="active" exact>Home</router-link>
            </li>
            <li>
                <router-link to="/about" active-class="active" exact>About</router-link>
            </li>
            <li>
                <router-link to="/example" active-class="active" exact>Example</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            };
        }
    };
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Questrial');
    $green: #3c8c74;

    .boiler-plate{
        .title{
            color: $green;
            font-family: Questrial;
            text-align: center;
        }
    }
    .nav-menu{
        li{
            display: inline;
            a{
                text-decoration: none;
                font-family: Questrial;
                display: inline-block;
                width: 100px;
                height: 30px;
                font-size: 20px;
                text-align: center;
                color: $green;
            }
        }
    }
    .active{
        border-bottom: 1px solid $green;
    }
</style>