<template>
  <div class="double">
    <div class="double__left">
      <img :src="left" alt="">
    </div>
    <div class="double__right">
      <img :src="right" alt="">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["left", "right"]
};
</script>
<style lang="scss" scoped>
@import "../assets/common";
.double {
  padding: 100px 0;
  @include clearfix;
  &__left,
  &__right {
    float: left;
    width: 50%;
    img {
      width: 100%;
    }
  }
  &__right {
    padding-top: 100px;
  }
}
</style>
