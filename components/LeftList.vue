<template>
    <ul class="main-block bg-light">
        <li class="headline">{{ $t("leftList.getting_started") }}</li>
        <li>{{ $t("leftList.install") }}</li>
        <li>{{ $t("leftList.hello_world") }}</li>
    </ul>
</template>
<script>
export default {
    name: 'LeftList'
}
</script>
<style scoped>
.main-block{
    min-width: 16em;
    height: 100vh;
    background-color: black;
    overflow-y: scroll;
}
ul{
    padding-top: 1em;
    list-style-type: none;
    color: gray;
}
ul li{
    margin-left: 1em;
    color: gray;
}
ul li:hover{
    color: black;
    cursor: pointer;
}
.headline{
    text-decoration: none;
    font-weight: 600;
    margin-left: 0;
    color: black;
}
@media screen and (max-width: 768px){
    .main-block{
        width: 100%;
        height: 50vh;
    }
}
</style>