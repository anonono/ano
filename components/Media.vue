<template>
  <div class="video">
    <!-- <video muted loop autoplay> -->
    <video muted loop autoplay :src="video"></video>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["video"]
};
</script>
<style lang="scss" scoped>
.video {
  padding: 100px 0;
  video {
    width: 100%;
  }
}
</style>
