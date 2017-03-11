import Vue from 'vue';
import ViuUI from '../src/index';
import App from './App.vue';

Vue.use(ViuUI);

new Vue({
	el: 'app',
	render: h => h(App)
});
