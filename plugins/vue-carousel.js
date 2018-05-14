import Vue from 'vue'
import {
    Carousel,
    Slide
} from 'vue-carousel';
const VueCarousel = {
    install(Vue, options) {
        Vue.component('Carousel', Carousel)
        Vue.component('Slide', Slide)
    }
};
Vue.use(Carousel);
Vue.use(Slide);
export default VueCarousel;