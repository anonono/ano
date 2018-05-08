<template>
  <section class="section">
    <Noise></Noise>
    <Header :project="true"></Header>
    <div class="wrap">
      <Banner :image_pc='image_pc' :image_mobile='image_mobile' :chinese="chinese" :english="english" :window_width="window_width"></Banner>
      <Info :year=" year " :category="category " :status="status " :desc="desc "></Info>
      <Single :image=" '/images/scb-single.png' "></Single>
      <Double :left=" '/images/scb-left.png' " :right=" '/images/scb-right.png' "></Double>
    </div>
    <Highlight :image=" '/images/scb-highlight.png' " :highlight="highlight " :color1="color1 " :color2="color2 "></Highlight>
    <Navigator :next=" 'yuting' " :name=" '鍾宇婷個人網站' "></Navigator>
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

export default {
  components: {
    Noise,
    Header,
    Banner,
    Info,
    Single,
    Double,
    Highlight,
    Navigator
  },
  data() {
    return {
      window_width: 0,
      image_pc: "/images/scb-banner.png",
      image_mobile: "/images/scb-banner--m.png",
      chinese: "渣打銀行信用卡行銷網",
      english: "Standard Chartered Bank Credit Card Marketing Page",
      year: 2017,
      category: "Designer",
      status: "Delivery",
      desc:
        "這是為渣打銀行御璽卡製作的單頁式行銷網站，由客戶提供產品主視覺與形象影片，網站設計則是納入這兩項元素，利用顏色的對比與暈染達到霓虹效果，彷彿捕捉夜晚生活中的浮光掠影。除此之外，另外加入了許多不規則幾何圖形配合視差效果，企圖利用網站創造穿梭城市般的空間感。",
      highlight:
        "畫面兩側有設計不隨頁面下滑而移動的固定元件，除了視覺上的效果外，也可以讓使用者隨時知道所處頁面狀態與功能",
      color1: "#002687",
      color2: "#233362"
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.window_width = window.innerWidth;
    }
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