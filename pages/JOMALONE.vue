<template>
  <section class="section">
    <Noise></Noise>
    <Header :project="true"></Header>
    <div class="wrap">
      <Banner :image_pc='image_pc' :image_mobile='image_mobile' :chinese="chinese" :english="english" :window_width="window_width" :sticky="sticky"></Banner>
      <Info :year=" year " :category="category " :status="status " :desc="desc "></Info>
      <Media :video=" '/media/jomalone-video1.mov' "></Media>
      <Single :image=" '/images/jomalone-single1.png' "></Single>
      <Media :video=" '/media/jomalone-video2.mov' "></Media>
      <Single :image=" '/images/jomalone-single2.png' "></Single>
      <Media :video=" '/media/jomalone-video3.mov' "></Media>
    </div>
    <Highlight :image=" '/images/jomalone-highlight.png' " :highlight="highlight " :color1="color1 " :color2="color2 "></Highlight>
    <Navigator :next=" 'COR' " :name=" '遠山呼喚Logo設計' "></Navigator>
  </section>
</template>

<script>
import Noise from "~/components/Noise.vue";
import Header from "~/components/Header.vue";
import Banner from "~/components/Banner.vue";
import Info from "~/components/Info.vue";
import Single from "~/components/Single.vue";
import Double from "~/components/Double.vue";
import Highlight from "~/components/Highlight.vue";
import Navigator from "~/components/Navigator.vue";
import Media from "~/components/Media.vue";
import project from "~/assets/project.js";

export default {
  components: {
    Noise,
    Header,
    Banner,
    Info,
    Single,
    Double,
    Highlight,
    Navigator,
    Media
  },
  data() {
    return {
      window_width: 0,
      sticky: "125px",
      ...project[2].data
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      let top;
      top = window.scrollY + 125;
      const $info = document.querySelectorAll(".info")[0];
      if (top > $info.offsetTop + 50) {
        this.sticky = {
          top: $info.offsetTop + 50 + "px",
          position: "absolute"
        };
      } else {
        this.sticky = { top: 125 + "px", position: "fixed" };
      }
    },
    handleResize() {
      this.window_width = window.innerWidth;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/common";
.header {
  height: 0 !important;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.wrap {
  &:after {
    content: none;
  }
}
</style>