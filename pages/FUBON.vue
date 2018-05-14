<template>
  <section class="section">
    <Noise></Noise>
    <Header :project="true"></Header>
    <div class="wrap">
      <Banner :image_pc='image_pc' :image_mobile='image_mobile' :chinese="chinese" :english="english" :window_width="window_width" :sticky="sticky"></Banner>
      <Info :year=" year " :category="category " :status="status " :desc="desc " :goals="goals"></Info>
      <Slider :plan="plan" :slider="slider"></Slider>
      <Single :image=" '/images/fbi-single.png' "></Single>
      <Double :left=" '/images/fbi-left.png' " :right=" '/images/fbi-right.png' "></Double>
    </div>
    <Highlight :highlights="highlights " :color1="color1 " :color2="color2 "></Highlight>
    <Navigator :next=" 'UDESIGN' " :name=" 'Udesign官方網站' "></Navigator>
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
import Slider from "~/components/Slider.vue";
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
    Slider
  },
  data() {
    return {
      window_width: 0,
      sticky: "125px",
      highlights: [
        {
          image: "/images/fbi-highlight1.png",
          desc: "新增會員中心首頁，為使用者統整個人化的資訊"
        },
        {
          image: "/images/fbi-highlight2.png",
          desc:
            "改變舊網條列保單的形式，現以1個產物為單位整合多張保單，可以清楚了解保險現況"
        }
      ],
      plan:
        "本次改版加入了許多新內容，並包含會員登入功能，並有設置非會員也能瀏覽的頁面。企劃從SiteMap梳理架構開始；Functional Map確認各部分功能；重點功能的Flow Chart規劃；到最後的UI Flow盤點出須產出頁面",
      slider: [
        "/images/fbi-slider1.png",
        "/images/fbi-slider2.png",
        "/images/fbi-slider3.png",
        "/images/fbi-slider4.png"
      ],
      ...project[4].data
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
      if (top >= $info.offsetTop + 50) {
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