<template>
  <div class="info">
    <div class="info__header">
      <div>{{year}}</div>
      <div>{{category}}</div>
      <div>{{status}}</div>
    </div>
    <div class="info__body">{{desc}}</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["year", "category", "status", "desc"]
};
</script>
<style lang="scss" scoped>
.info {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 35%;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 50px;
  &__header {
    margin-bottom: 20px;
  }
  &__body {
    text-align: justify;
  }
}
@media only screen and (max-width: 768px) {
  .info {
    padding: 30px 0;
  }
}
</style>
