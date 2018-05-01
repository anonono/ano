<template>
  <div class="portfolio" :style="translateY">
    <div class="portfolio__col" v-for="(group, index) in projects" :key="index">
      <div v-for="(project, index) in group" :key="index" class="portfolio__link">
        <nuxt-link to="/"><img :src="project.img" alt=""></nuxt-link>
      </div>
      <div v-if="index == projects.length -1">
        <a href="mailto:anono1155@gmail.com" class="contactBox">
          <div class="contactBox__desc">Interested in my works?</div>
          <div class="contactBox__button">
            Contact Me : )
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "~/assets/project";

export default {
  components: {},
  props: ["progress"],
  data() {
    return {
      startPoint: 0.4,
      endPoint: 1
    };
  },
  computed: {
    translateY() {
      let ratio;
      if (this.progress < this.startPoint) {
        ratio = 0;
      } else if (this.progress > this.endPoint) {
        ratio = 100;
      } else {
        ratio =
          (this.progress - this.startPoint) /
          (this.endPoint - this.startPoint) *
          100;
      }
      return { transform: "translateY(-" + ratio + "%)" };
    },
    projects() {
      return [
        _.slice(Projects, 0, 4),
        _.slice(Projects, 4, 7),
        _.slice(Projects, 7, 10)
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/common";

.portfolio {
  position: relative;
  z-index: 99999;
  @include clearfix;
  &__col {
    float: left;
    width: 30%;
    margin-left: 5%;
    &:first-child {
      margin-left: 0;
    }
    &:nth-child(2n + 1) {
      padding-top: 50px;
    }

    img {
      width: 100%;
    }
  }
  &__link {
    margin-bottom: 40px;
    & > a {
      display: block;
      line-height: 0;
    }
  }
}
.contactBox {
  border: 1px solid #000;
  padding-bottom: 100%;
  display: block;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  position: relative;
  &__desc {
    color: #303030;
    position: absolute;
    top: 45px;
    left: 45px;
    right: 45px;
    letter-spacing: 1px;
  }
  &__button {
    color: #d58b8b;
    border: solid 1px #000000;
    line-height: 55px;
    text-align: center;
    position: absolute;
    bottom: 45px;
    left: 45px;
    right: 45px;
  }
}
</style>
