<template>
  <header class="header">
    <div class="wrap">
      <div class="header__logo">
      </div>
      <div class="header__about" :style="scale">
        <nuxt-link to="/about">
          <img src="/images/header_about.png" alt="">
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      startPoint: 0,
      endPoint: 0.5
    };
  },
  props: ["progress"],
  computed: {
    scale() {
      let ratio;
      if (this.progress < this.startPoint) {
        ratio = 2.5;
      } else if (this.progress > this.endPoint) {
        ratio = 1;
      } else {
        ratio =
          (1 -
            (this.progress - this.startPoint) /
              (this.endPoint - this.startPoint)) *
            1.5 +
          1;
      }
      return { transform: "scale(" + ratio + ")" };
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  height: 130px;
  &__about {
    position: relative;
    float: right;
    width: 60px;
    right: -30px;
    top: 40px;
    z-index: 100000;
    transform-origin: top right;
    a {
      display: block;
      transition: transform 0.1s linear;
      transform-origin: top right;
    }
    img {
      width: 100%;
      transition: transform 1000000000000s linear;
      transform: rotate(0deg);
    }
    &:hover {
      a {
        transform: scale(1.2);
      }
      img {
        transform: rotate(36000deg);
        transition: transform 400s linear;
      }
    }
  }
}
</style>
