<template>
  <div class="highlight" :style="{'--tooltip-color1':color1,'--tooltip-color2':color2}">
    <div class="wrap">
      <div class="highlight__inner">
        <div class="highlight__title">Highlight</div>
        <div class=" highlight__desc ">{{highlight}}</div>
        <div class="highlight__image ">
          <img :src="image " alt=" ">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["image", "highlight", "color1", "color2"]
};
</script>
<style lang="scss" scoped>
@import "../assets/common";
.highlight {
  color: #fff;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: 0.8;
    background-image: linear-gradient(
      142deg,
      var(--tooltip-color1),
      var(--tooltip-color2)
    );
  }
  .wrap {
    padding-top: 100px;
    padding-bottom: 100px;
    &:after {
      content: none;
    }
  }
  &__inner {
    position: relative;
    z-index: 1;
  }
  &__title {
    position: absolute;
    top: -123px;
    font-weight: 600;
    font-size: 50px;
  }
  &__desc {
    margin-bottom: 30px;
    text-decoration: underline;
  }
  &__image {
    img {
      width: 100%;
    }
  }
}
</style>
