import Toolbar from './components/Toolbar.vue';
import Scrollbar from './components/Scrollbar.vue';

export default {
    install(Vue) {
        Vue.component("toolbar", Toolbar);
        Vue.component("scrollbar", Scrollbar);
    }
};
