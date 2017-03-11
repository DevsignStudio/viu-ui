import components from "./components.js";
import directives from "./directives.js";
import confirmation from "./confirmation.js";
import snackbar from "./snackbar.js";

export default {
    install(Vue) {
        require("./css/materialdesignicons.css");
        require("./css/viu.css");
        components.install(Vue);
        directives.install(Vue);
        Vue.prototype.$snackbar = snackbar;
        Vue.prototype.$confirmation = confirmation;
    }
}
