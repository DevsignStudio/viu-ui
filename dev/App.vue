<template>
    <!--<toolbar></toolbar>-->
    <div style="max-height: 300px">
        <scrollbar>
            <div style="height:1500px"></div>
        </scrollbar>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        nextAction() {
            this.$snackbar.run("You can redirect to other page here");
        }
    }
}
</script>
