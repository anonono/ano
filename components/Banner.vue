<template>
  <div class="banner">
    <div class="banner__text">
      <div class="banner__chinese">{{chinese}}</div>
      <div class="banner__english">{{english}}</div>
    </div>
    <div class="banner__image"><img :src="image" alt=""></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["chinese", "english", "image"]
};
</script>
<style lang="scss" scoped>
.banner {
  &__text {
    width: 30%;
    font-weight: 600;
    line-height: 1.2;
    position: absolute;
    top: 125px;
    left: 0;
  }
  &__chinese {
    font-size: 50px;
    margin-bottom: 20px;
  }
  &__english {
    font-size: 24px;
  }
}
</style>
