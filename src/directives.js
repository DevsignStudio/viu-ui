import ripple from "./directives/v-ripple.js";
import depth from "./directives/v-depth.js";
import reveal from "./directives/v-reveal.js";
import unreveal from "./directives/v-unreveal.js";
import open from "./directives/v-open.js";
import wheight from "./directives/v-wheight.js";
import wordClamp from "./directives/v-word-clamp.js";

export default {
    install(Vue) {
        require("./jQueryFunction.js");
        
        Vue.directive("ripple", ripple);
        Vue.directive("depth", depth);
        Vue.directive("reveal", reveal);
        Vue.directive("unreveal", unreveal);
        Vue.directive("open", open);
        Vue.directive("wheight", wheight);
        Vue.directive("word-clamp", wordClamp);
    }
}
