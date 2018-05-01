<template>
  <div class="kv">
    <div class="kv__left" :style="'opacity:'+opacity">
      <div class="slogan">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 440">
          <defs>
            <text id="text" font-size="105" stroke="#1c1c1c" stroke-width="1">
              <tspan x="0" dy="1em">JOU</tspan>
              <tspan x="0" dy="1em">HSUAN</tspan>
              <tspan x="0" dy="1em">WU</tspan>
              <tspan x="0" dy="1em">Portfolio</tspan>
            </text>
            <mask id="text_mask">
              <use x="0" y="0" xlink:href="#text" opacity="1" fill="#ffffff" />
            </mask>
          </defs>
          <use x="0" y="0" xlink:href="#text" fill="#1c1c1c" />
          <rect mask="url(#text_mask)" fill="#fff" x="0" :y="sloganMask" width="500" height="440" />
        </svg>
      </div>
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
      sloganStart: 0,
      sloganEnd: 0.25,
      videoStart: 0.2,
      videoEnd: 0.5,
      opacityStart: 0.15,
      opacityEnd: 0.3,
      opacityMax: 1,
      opacityMin: 0.2
    };
  },
  computed: {
    opacity() {
      let ratio;
      if (this.progress < this.opacityStart) {
        ratio = this.opacityMax;
      } else if (this.progress > this.opacityEnd) {
        ratio = this.opacityMin;
      } else {
        ratio =
          (this.opacityMax -
            (this.progress - this.opacityStart) /
              (this.opacityEnd - this.opacityStart)) *
            (this.opacityMax - this.opacityMin) +
          this.opacityMin;
      }
      return ratio;
    },
    sloganMask() {
      let ratio;
      if (this.progress < this.sloganStart) {
        ratio = 0;
      } else if (this.progress > this.sloganEnd) {
        ratio = 1;
      } else {
        ratio =
          (this.progress - this.sloganStart) /
          (this.sloganEnd - this.sloganStart) *
          1;
      }
      return -ratio * 440;
      return;
    },
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
  svg {
    width: 50%;
  }
}

.menu {
  position: absolute;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  li {
    font-size: 20px;
    display: inline-block;
    margin-right: 20px;
  }
}
.kv {
  position: relative;
  height: 90vh;
  @include clearfix;
  &__left {
    position: relative;
    z-index: 1;
  }

  &__right {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    overflow: hidden;
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
