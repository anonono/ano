<template>
  <div class="portfolio" :style="translateY">
    <div class="portfolio__col" v-for="(group, index) in projects" :key="index" :style="colStyle[index]">
      <div v-for="(project, index) in group" :key="index" class="portfolio__link" :style="skewAngle">
        <nuxt-link :to="'/'+project.name"><img :src="project.img" alt=""></nuxt-link>
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
      endPoint: 1,
      next: 0,
      ticking: false
    };
  },
  watch: {
    prev: _.debounce(function() {
      this.next = this.prev;
    }, 30)
  },
  computed: {
    prev() {
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
      return ratio;
    },
    translateY() {
      return { transform: "translateY(-" + this.prev + "%)" };
    },
    colStyle() {
      return [
        { transform: "translateY(" + this.prev * 0.8 + "px)" },
        { transform: "translateY(" + this.prev * 2.5 + "px)" },
        { transform: "translateY(" + this.prev * 1.5 + "px)" }
      ];
    },
    skewAngle() {
      let diff = this.next - this.prev,
        angle;
      if (diff >= 3) {
        angle = 5;
        // blur = 3;
      } else if (diff <= -3) {
        angle = -5;
        // blur = 3;
      } else {
        angle = 0;
        // blur = 0;
      }
      return {
        transform: "skewY(" + angle + "deg)"
        // "-webkit-filter": " blur(" + blur + "px)",
        // filter: " blur(" + blur + "px)"
      };
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
  z-index: 999;
  padding-bottom: 300px;
  @include clearfix;
  &__col {
    float: left;
    width: 30%;
    margin-left: 5%;
    &:first-child {
      margin-left: 0;
    }
    img {
      width: 100%;
    }
  }
  &__link {
    margin-bottom: 40px;
    transition: transform 0.15s ease;
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
@media only screen and (max-width: 767px) {
  .portfolio {
    &__col {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
