<template>
    <div class="bellows">
        <slot></slot>
    </div>
</template>

<script>
    import $ from 'jquery';
    import plugin from 'mobify-plugin/dist/plugin.min';
    import velocity from 'velocity-animate/velocity';
    import bellows from 'bellows-ui/dist/bellows.min';
    import 'bellows-ui/dist/bellows.css';

    export default {
        props: {
            collapsible: {
                type: Boolean,
                default: false,
            }
        },
        mounted() {
            var self= this;
            this.$nextTick(function() {
                define(
                    ['$', 'bellows'],
                    function($) {
                        $(self.$el).bellows({
                            singleItemOpen: this.collapsible,
                        });
                    }
                );

            })

        }
    }
</script>
