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
  padding-top: 60px;
  padding-bottom: 100px;
  padding-left: 35%;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 60px;
  &__header {
    margin-bottom: 20px;
  }
}
</style>
