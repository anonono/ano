<template>
  <div class="single">
    <img :src="image" alt="">
  </div>
</template>

<script>
export default {
  components: {},
  props: ["image"]
};
</script>
<style lang="scss" scoped>
.single {
  img {
    width: 100%;
  }
}
</style>
