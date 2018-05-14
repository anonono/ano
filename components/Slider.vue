<template>
  <div class="plan">
    <div class="plan__left">
      <div class="plan__title">{ Planning Process }</div>
      <div class="plan__desc">{{plan}}</div>
    </div>
    <div class="plan__right">
      <no-ssr>
        <Carousel :per-page="1" :paginationEnabled="false">
          <Slide v-for="(image,index) in slider" :key="index">
            <img :src="image" alt="">
          </Slide>
        </Carousel>
      </no-ssr>
    </div>
  </div>
</template>

<script>
let VueCarousel;
VueCarousel = require("vue-carousel");
export default {
  components: {
    Carousel: VueCarousel.Carousel,
    Slide: VueCarousel.Slide
  },
  props: ["slider", "plan"]
};
</script>
<style lang="scss" scoped>
@import "../assets/common";

.plan {
  margin-top: -50px;
  margin-bottom: 100px;
  position: relative;
  border-bottom: 1px solid #e2e2e2;
  @include clearfix;

  &__left {
    width: 30%;
    float: left;
  }
  &__right {
    width: 60%;
    float: left;
    margin-left: 5%;
  }
  &__title {
    font-size: 20px;
    font-weight: 600;
  }
  &__desc {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30%;
  }
}

.VueCarousel-slide {
  line-height: 0;
  img {
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .plan {
    margin-top: 50px;

    &__left,
    &__right {
      width: 100%;
    }
    &__right {
      margin-left: 0;
      margin-top: 20px;
    }
    &__title {
      margin-bottom: 20px;
    }
    &__desc {
      position: static;
      width: 100%;
    }
  }
}
</style>
