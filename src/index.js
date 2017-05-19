import components from "./components.js"

export default {
    install(Vue) {
        // require("./css/materialdesignicons.css");
        // require("./css/viu.css");
        components.install(Vue);
        // directives.install(Vue);
        // Vue.prototype.$snackbar = snackbar;
        // Vue.prototype.$confirmation = confirmation;
    }
}
