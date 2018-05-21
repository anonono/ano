<template>
  <div class="video">
    <div class="video__inner">
      <video muted loop autoplay playsinline :src="video"></video>
    </div>
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
  padding-bottom: 50px;

  &__inner {
    padding-bottom: 40%;
    position: relative;
    overflow: hidden;
    width: 60%;
    margin: 0 auto;
  }
  video {
    width: 160%;
    position: absolute;
    top: 0;
    left: -30%;
  }
}
@media only screen and (min-width: 769px) and (max-width: 960px) {
  .video {
    &__inner {
      padding-bottom: 60%;
      width: 80%;
    }
    video {
      width: 150%;
      left: -25%;
    }
  }
}
@media only screen and (max-width: 768px) {
  .video {
    padding-bottom: 30px;

    &__inner {
      padding-bottom: 60%;
      width: 100%;
    }
    video {
      width: 150%;
      left: -25%;
    }
  }
}
</style>
