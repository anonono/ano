<template>
  <div class="kv">
    <div class="kv__left">
      <div class="slogan">JOU<br/>HSUAN<br/>WU<br/>Portfolio</div>
      <ul class="menu">
        <li>#design</li>
        <li>#plan</li>
        <li>#code</li>
      </ul>
    </div>
    <div class="kv__right">
      <div class="kv__video" :style="'transform:translateX('+rightStyle+'%)'">
        <iframe type="text/html" :style="'transform:translateX('+ -1*rightStyle+'%)'" width="640" height="360" src="https://www.youtube.com/embed/TUfN2z6IIMA?&autoplay=1&loop=1&rel=0&showinfo=0&controls=0&iv_load_policy=3&playlist=TUfN2z6IIMA&mute=1" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["progress"],
  data() {
    return {
      videoStart: 0.2,
      videoEnd: 0.5
    };
  },
  computed: {
    rightStyle() {
      let ratio;
      if (this.progress < this.videoStart) {
        ratio = 0;
      } else if (this.progress > this.videoEnd) {
        ratio = 100;
      } else {
        ratio =
          (this.progress - this.videoStart) /
          (this.videoEnd - this.videoStart) *
          100;
      }
      return ratio;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/common";

.slogan {
  font-size: 105px;
  font-weight: bold;
  line-height: 1;
}

.menu {
  margin-top: 60px;
  margin-bottom: 0;
  padding: 0;
  li {
    font-size: 20px;
    display: inline-block;
    margin-right: 20px;
  }
}
.kv {
  position: relative;
  @include clearfix;
  &__left {
    position: relative;
    z-index: 1;
  }

  &__right {
    position: absolute;
    top: 0;
    right: 0;
    width: 65%;
  }

  &__video {
    position: relative;
    pointer-events: none;
    padding-bottom: 56.25%;
    overflow: hidden;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
.videoContainer {
  overflow: hidden;
}
</style>
