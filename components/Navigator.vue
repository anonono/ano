<template>
  <div class="navigator">
    <div class="wrap">
      <div class="navigator__inner">
        <div class="navigator__prev">
          <nuxt-link to="/">
            <div class="navigator__link">
              <div class="navigator__title">Back to Projects</div>
            </div>
          </nuxt-link>
        </div>
        <div class="navigator__next">
          <nuxt-link :to="'/'+next">
            <div class="navigator__link">
              <div class="navigator__title">Next Project</div>
              <div class="navigator__name">{{name}}</div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["next", "name"]
};
</script>
<style lang="scss" scoped>
@import "../assets/common";

.navigator {
  .wrap {
    padding-top: 100px;
    padding-bottom: 30px;
    &:after {
      content: none;
    }
  }
  &__inner {
    border-top: solid 1px #e2e2e2;
    border-bottom: solid 1px #e2e2e2;
    @include clearfix;
  }
  &__prev {
    width: 30%;
    float: left;
  }
  &__next {
    width: 65%;
    float: right;
  }
  a {
    text-decoration: none;
    min-height: 225px;
    display: block;
  }
  &__link {
    padding-top: 30px;
    padding-left: 10px;
  }
  &__title {
    color: #d58b8b;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 25px;
  }
  &__name {
    font-size: 64px;
    font-weight: 600;
    line-height: 1;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #1c1c1c;
  }
}
</style>
