<template>
    <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <div class="content-logo">
                LOGO
            </div>
        </div>
    </el-col>
</template>
<script>
    export default {
        name: 'topBar',
        methods: {

        }
    }
</script>
<style>
    .grid-content.bg-purple-dark{
        background-color: #99a9bf;
        border-radius: 4px;
        transition: .2s;
        padding: 10px;
    }
    .grid-content .content-logo{
        font-weight: 700;
        color: #eff1f7;
    }
</style>