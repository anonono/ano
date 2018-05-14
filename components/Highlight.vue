<template>
  <div class="highlight" :style="{'--tooltip-color1':color1,'--tooltip-color2':color2}">
    <div class="wrap">
      <div class="highlight__inner">
        <div class="highlight__title">Highlight</div>
        <div class="highlight__content" v-for="highlight in highlights">
          <div class=" highlight__desc ">{{highlight.desc}}</div>
          <div class="highlight__image ">
            <img :src="highlight.image " v-if="highlight.image">
            <video :src="highlight.media" v-if="highlight.media" muted loop autoplay></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["highlights", "color1", "color2"]
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
    padding-top: 70px;
    padding-bottom: 50px;
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
    top: -92px;
    font-weight: 600;
    font-size: 50px;
  }
  &__desc {
    margin-bottom: 30px;
    text-decoration: underline;
  }
  &__image {
    line-height: 0;
    img {
      width: 100%;
    }
  }
  &__content {
    & + & {
      margin-top: 100px;
    }
  }
}
@media only screen and (max-width: 768px) {
  .highlight {
    &__desc {
      font-weight: 600;
    }
  }
}
</style>
