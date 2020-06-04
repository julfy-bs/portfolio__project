import Vue from 'vue';
import $axios from "../admin/helpers/apiSettings";
import { getAbsoluteImgPath } from '../admin/helpers/pictures';
import Flickity from 'vue-flickity';

new Vue({
  el: '#reviews-section',
  components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true,
        setGallerySize: false
      },
      reviews: []
    }
  },
  async created() {
    const { data } = await $axios.get("reviews/349");
    this.reviews = data;
    this.$nextTick(function () { this.$refs.flickity.rerender(); });

  },

  methods: {
    next() {
      this.$refs.flickity.next();
      this.checkArrows();
    },

    previous() {
      this.$refs.flickity.previous();
      this.checkArrows();
    },
    checkArrows() {
      if (this.$refs.flickity.selectedIndex() == 0) {
        this.$el.querySelector('.reviews-slider__control--left').disabled = true;
      } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1) {
        this.$el.querySelector('.reviews-slider__control--right').disabled = true;
      } else {
        this.$el.querySelector('.reviews-slider__control--left').disabled = false;
        this.$el.querySelector('.reviews-slider__control--right').disabled = false;
      }
    },
    photoUrl(path) {
      return getAbsoluteImgPath(path);
    }
  }
});