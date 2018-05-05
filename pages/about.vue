<template>
  <section class="section">
    <div class="wrap">
      <Header :progress="progress" :about="true"></Header>
      <div class="about">
        <div class="about__top">
          <div class="slogan">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 440">
              <defs>
                <text id="text" font-size="105" stroke="#1c1c1c" stroke-width="1">
                  <tspan x="0" dy="1em">HI,</tspan>
                  <tspan x="0" dy="1em">I AM</tspan>
                  <tspan x="0" dy="1em">JOU</tspan>
                  <tspan x="0" dy="1em">HSUAN</tspan>
                </text>
                <mask id="text_mask">
                  <use x="0" y="0" xlink:href="#text" opacity="1" fill="#ffffff" />
                </mask>
              </defs>
              <use x="0" y="0" xlink:href="#text" fill="#ffffff" />
            </svg>
          </div>
          <div class="about__desc">
            <p>
              吳柔萱，出生與工作於台北，是一名UI/ UX設計師。接觸UIUX領域大約2年的時間，和多個不同領域的廠商合作過，喜歡咀嚼、吸收再吐出的循環過程，希望能不斷地變得更好。
            </p>
            <p>
              近期的座右銘是<br/>It always seems impossible until it's done.
            </p>
          </div>
          <div class="about__links">
            <div class="title">{ More about me }</div>
            <a href="#">Resume</a>
            <a href="mailto:anono1155@gmail.com">Email</a>
            <a href="https://www.behance.net/anono115508b4">Behance</a>
            <a href="www.linkedin.com/in/annwu1155">LinkedIn</a>
          </div>
        </div>
        <div class="about__partners">
          <div class="title">合作廠商</div>
          <ul>
            <li v-for="(partner,index) in partners">
              <img :src="'/images/'+partner+'.png'" alt="">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "~/components/Header.vue";

import axios from "axios";

export default {
  components: {
    Header
  },
  data() {
    return {
      progress: 0,
      partners: [
        "ctbc",
        "yuanta",
        "scb",
        "fbi",
        "cai",
        "udesign",
        "fetnet",
        "cal",
        "payeasy"
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      const scrollY = window.scrollY;
      const totalY =
        document.querySelector("body").offsetHeight - window.innerHeight;
      this.progress = scrollY / totalY;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/common";

@include slogan;
.header {
  position: fixed;
  left: 0;
  width: 100%;
}
.section {
  background: url(/images/noise.png) repeat;
}
.about {
  padding-top: 130px;
  &__top {
    max-width: 440px;
  }
  &__desc {
    margin-top: -30px;
    padding-right: 50px;
    padding-bottom: 30px;
    text-align: justify;
    border-bottom: 1px solid #e0e0e0;
  }
  &__links {
    padding: 30px 0;
    border-bottom: 1px solid #e0e0e0;
    a {
      color: #d58b8b;
      text-decoration: none;
      display: inline-block;
      font-size: 20px;
      padding: 10px 0;
      margin-right: 20px;
      font-weight: 600;
    }
  }
  &__partners {
    padding-top: 30px;
    padding-bottom: 80px;
    border-bottom: 1px solid #e0e0e0;
    @include clearfix;
    .title {
      margin-bottom: 30px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      float: left;
      width: 33.33%;
      margin-bottom: 10px;
      &:nth-child(3n + 1) {
        clear: left;
      }
    }
    img {
      width: 100%;
      max-width: 150px;
    }
  }
}
.title {
  font-size: 20px;
  font-weight: 600;
}
p {
  & + & {
    margin-top: 20px;
  }
}
</style>