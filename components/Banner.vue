<template>
  <div class="banner">
    <div class="banner__text" :style="sticky">
      <div>
        <div class="banner__chinese">{{chinese}}</div>
        <div class="banner__english">{{english}}</div>
      </div>
    </div>
    <div class="banner__image"><img :src="banner__image" alt=""></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [
    "chinese",
    "english",
    "image_pc",
    "image_mobile",
    "window_width",
    "sticky"
  ],
  data() {
    return {
      banner__image: this.image_pc
    };
  },
  computed: {
    banner__image() {
      if (this.window_width > 768) {
        return this.image_pc;
      } else {
        return this.image_mobile;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  &__text {
    width: 100%;
    font-weight: 600;
    line-height: 1.2;
    position: fixed;
    top: 125px;
    left: 0;
    & > div {
      max-width: 958px;
      margin: 0 auto;
    }
  }
  &__chinese {
    font-size: 50px;
    margin-bottom: 20px;
    line-height: 1.2;
    width: 30%;
  }
  &__english {
    font-size: 24px;
    width: 30%;
  }
  &__image {
    line-height: 0;
    img {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 768px) {
  .banner {
    padding-top: 100px;
    &__text {
      position: static !important;
    }
    &__chinese {
      padding-right: 60px;
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: solid 1px #e2e2e2;
      width: 100%;
    }
    &__english {
      width: 100%;
    }
  }
}
</style>
