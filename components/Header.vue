<template>
  <header class="header">
    <div class="header__logo">
      <nuxt-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.69 15.91">
          <path id="infinity" d="M159,63c-3.05-.09-12.32,3.06-14,4s-9,4-11.22,5a8.17,8.17,0,0,1-8.92-3,6.59,6.59,0,0,1,0-7.43C126,60,130,59,132.3,60.12,135,61,144,66,144,66s5.24,3,7.62,4.52a19.38,19.38,0,0,0,7.43,3c2.95.5,5.68-2.57,5.95-3C166,69,165,66,164,65S162.05,63.09,159,63Z" transform="translate(-122.72 -58.64)" :style="dashOffset" />
        </svg>
      </nuxt-link>
    </div>
    <div class="wrap">
      <div class="header__about" :style="scale" v-if="!about">
        <nuxt-link to="/about">
          <span :style="rotate">
            <i class="aboutImg"></i>
          </span>
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
  props: {
    progress: { default: 1 },
    about: { default: false },
    project: { default: false }
  },
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
      if (this.project) {
        ratio = 1;
      }
      return { transform: "scale(" + ratio + ")" };
    },
    rotate() {
      let ratio;
      if (this.progress < this.startPoint) {
        ratio = 0;
      } else if (this.progress > this.endPoint) {
        ratio = 360;
      } else {
        ratio =
          (this.progress - this.startPoint) /
          (this.endPoint - this.startPoint) *
          360;
      }
      return { transform: "rotate(" + ratio + "deg)" };
    },
    dashOffset() {
      let ratio;
      if (this.progress < this.startPoint) {
        ratio = 120;
      } else if (this.progress > this.endPoint) {
        ratio = 0;
      } else {
        ratio =
          120 -
          (this.progress - this.startPoint) /
            (this.endPoint - this.startPoint) *
            120;
      }
      return { "stroke-dashoffset": ratio };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/common";

.header {
  height: 130px;
  z-index: 1000;

  .wrap {
    height: 100%;
  }
  &__logo {
    width: 60px;
    position: absolute;
    top: 25px;
    left: 120px;
    transform: rotate(330deg);
    z-index: 1000;
    backface-visibility: hidden;

    svg {
      width: 100%;
    }
  }
  &__about {
    position: relative;
    float: right;
    width: 60px;
    right: -30px;
    top: 25px;
    z-index: 100000;
    transform-origin: top right;
    backface-visibility: hidden;

    a {
      display: block;
      transition: transform 0.1s linear;
      transform-origin: top right;
      backface-visibility: hidden;
    }
    .aboutImg {
      transition: transform 1000000000000s linear;
      transform: rotate(0deg);
    }
    span {
      display: block;
      line-height: 0;
      backface-visibility: hidden;
    }
    &:hover {
      a {
        transform: scale(1.2);
      }
      .aboutImg {
        transform: rotate(36000deg);
        transition: transform 400s linear;
      }
    }
  }
}
#infinity {
  fill: none;
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  stroke-dasharray: 120;
}
.aboutImg {
  display: block;
  line-height: 0;
  width: 60px;
  height: 60px;
  backface-visibility: hidden;
  background-image: url("/images/header_about.png");
  background-size: cover;
  background-repeat: no-repeat;
}
@media only screen and (max-width: 1200px) {
  .header {
    height: 50px;
    &__logo {
      left: 0;
    }
    &__about {
      right: 0;
    }
  }
}
@media only screen and (max-width: 768px) {
  .header {
    &__about {
      width: 45px;
      right: -20px;
      top: 0;
    }
  }
  .aboutImg {
    width: 45px;
    height: 45px;
    background-image: url("/images/header_about--m.png");
  }
}
</style>
