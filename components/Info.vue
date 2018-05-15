<template>
  <div class="info">
    <div class="general">
      <div class="general__header">
        <div>{{year}}</div>
        <div>{{category}}</div>
        <div>{{status}}</div>
      </div>
      <div class="general__body" v-html="desc"></div>
    </div>
    <div class="goal" v-if="goals">
      <div class="goal__left goal__title">{ Goal }</div>
      <div class="goal__right">
        <div v-for="(goal,index) in goals" :key="index">{{goal}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  props: ["year", "category", "status", "desc", "goals"]
};
</script>
<style lang="scss" scoped>
@import "../assets/common";
.info {
  padding: 50px 0;
  margin-bottom: 50px;
  border-bottom: 1px solid #e2e2e2;
}
.general {
  padding-left: 35%;
  &__header {
    margin-bottom: 20px;
  }
  &__body {
    text-align: justify;
    position: relative;
    z-index: 1;
  }
}
.goal {
  margin-top: 100px;
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
}

@media only screen and (max-width: 768px) {
  .info {
    padding: 30px 0;
  }
  .general {
    padding-left: 0;
  }
  .goal {
    margin-top: 50px;
    &__title {
      margin-bottom: 20px;
    }
    &__left,
    &__right {
      width: 100%;
    }
    &__right {
      margin: 0;
    }
  }
}
</style>
