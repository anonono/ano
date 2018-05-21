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
  padding-bottom: 50px;
  img {
    width: 100%;
  }
}
@media only screen and (max-width: 768px) {
  .single {
    padding-bottom: 30px;
  }
}
</style>
