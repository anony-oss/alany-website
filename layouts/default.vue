<template>
    <div>
        <NavBar />
        <div class="right-block">
            <LeftList />
            <Nuxt />        
        </div>

    </div>
</template>
<style>
.right-block{
    width: 100%;
    height: 100vh;
    display: flex;
    padding-top: 3.5em;
}
@media screen and (max-width: 768px){
    .right-block{
        flex-direction: column;
    }
}
</style>