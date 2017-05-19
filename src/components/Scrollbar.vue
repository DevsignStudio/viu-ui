<template>
    <div style="height:100%">
        <slot></slot>
    </div>
</template>

<script>
    import "simplebar/dist/simplebar.css";
    import SimpleBar from 'simplebar';
    export default {
        mounted() {
            this.$nextTick(()=> {
                this.simplebar = new SimpleBar(this.$el);
            })
        }
    }
</script>