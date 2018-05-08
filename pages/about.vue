<template>
  <section class="section">
    <Noise></Noise>
    <div class="wrap">
      <Header :progress="progress" :about="true"></Header>
      <div class="about">
        <div class="about__top">
          <div>HI,</div>
          <span>I AM </span>
          <span>JOU HSUAN</span>
        </div>
        <div class="about__left">
          <div class="about__desc">
            <p>
              吳柔萱，出生與工作於台北，是一名UI/ UX設計師。接觸UIUX領域大約2年的時間，和多個不同領域的廠商合作過，喜歡咀嚼、吸收再吐出的循環過程，希望能不斷地變得更好。
            </p>
            <p>
              近期的座右銘是<br/>It always seems impossible until it's done.
            </p>
          </div>
        </div>
        <div class="about__right">
          <div>
            <div class="about__links">
              <div class="title">{ About }</div>
              <a href="#">Resume</a>
              <a href="mailto:anono1155@gmail.com">Email</a>
              <a href="https://www.behance.net/anono115508b4">Behance</a>
              <a href="www.linkedin.com/in/annwu1155">LinkedIn</a>
            </div>
            <div class="about__img">
              <img src="/images/about.gif" alt="">
            </div>
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
import Noise from "~/components/Noise.vue";

import axios from "axios";

export default {
  components: {
    Header,
    Noise
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

.header {
  position: fixed;
  left: 0;
  width: 100%;
}
.about {
  padding-top: 130px;
  @include clearfix;
  &__top {
    font-size: 105px;
    font-weight: 600;
    line-height: 1;
    color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px #1c1c1c;
    margin-bottom: 60px;
  }
  &__left,
  &__right {
    float: left;
    width: 50%;
  }
  &__right {
    & > div {
      display: table;
      width: 100%;
    }
  }
  &__desc {
    max-width: 300px;
    padding-bottom: 30px;
    text-align: justify;
  }
  &__links {
    display: table-cell;
    vertical-align: top;
    padding-right: 40px;
    a {
      color: #d58b8b;
      text-decoration: none;
      display: block;
      font-size: 20px;
      padding: 10px;
      font-weight: 600;
      text-align: right;
    }
  }
  &__img {
    display: table-cell;
    vertical-align: top;
    padding-bottom: 50px;
    img {
      width: 100%;
    }
  }
  &__partners {
    clear: left;
    padding-top: 50px;
    padding-bottom: 80px;
    border-top: 1px solid #e0e0e0;
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
      width: 30%;
      margin-left: 5%;
      margin-bottom: 10px;
      &:nth-child(3n + 1) {
        clear: left;
        margin-left: 0;
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
@media only screen and (max-width: 850px) {
  .about {
    &__top {
      span {
        display: block;
      }
    }
  }
}
@media only screen and (max-width: 767px) {
  .about {
    padding-top: 100px;
    &__top {
      font-size: 70px;
    }
    &__left,
    &__right {
      width: 100%;
    }
    &__desc {
      max-width: none;
      padding-bottom: 50px;
    }
    &__right {
      & > div {
        display: block;
      }
    }
    &__links {
      display: block;
      margin-bottom: 20px;
      a {
        display: inline-block;
        width: 50%;
        text-align: left;
        padding: 10px 0;
      }
      .title {
        margin-bottom: 10px;
      }
    }
    &__img {
      display: block;
      padding-right: 40px;
    }
    &__partners {
      li {
        width: 50%;
        margin-left: 0;
        text-align: right;

        &:nth-child(3n + 1) {
          clear: none;
        }
        &:nth-child(2n + 1) {
          clear: left;
          text-align: left;
        }
      }
    }
  }
}
</style>