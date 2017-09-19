<template>
    <div class="layout">
        <el-row :gutter="20">
            <top-bar></top-bar>
            <side-bar></side-bar>
            <el-col :span="20">
                <div class="main-content">
                    <router-view>

                    </router-view>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import sideBar from 'components/common/sideBar';
    import topBar from 'components/common/topBar';
    export default {
        components: {
            sideBar,
            topBar
        },
        methods: {

        }
    }
</script>

<style>
    body{
        margin: 0;
        box-sizing: content-box;
    }
    .layout{
        padding: 10px;
    }
    .el-row .el-col{
        margin-bottom: 10px;
    }
    .el-col .main-content{
        background-color: #eff1f7;
        min-height: 170px;
        padding: 10px 20px;
    }
</style>