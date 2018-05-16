<template>
  <div class="portfolio" :style="translateY">
    <div class="portfolio__col" v-for="(group, index) in projects" :key="index" :style="colStyle[index]">
      <div v-for="(project, index) in group" :key="index" class="portfolio__link" :style="skewAngle">
        <nuxt-link :to="'/'+project.name"><img :src="project.img" alt="">
          <div class="portfolio__desc">
            <div class="portfolio__year">{{project.data.year}}</div>
            <div class="portfolio__name">{{project.data.chinese}}</div>
            <div class="portfolio__tags">{{project.data.tags}}</div>
          </div>
        </nuxt-link>
      </div>
      <div v-if="index == projects.length -1" class="contactBox">
        <a href="mailto:anono1155@gmail.com">
          <div class="contactBox__desc">Interested in my works?<br/>:)</div>
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
  perspective: 1000px;
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
    & > a {
      display: block;
      line-height: 0;
      overflow: hidden;
      position: relative;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 200%;
        height: 200%;
        left: -50%;
        top: -50%;
        border-radius: 50%;
        transform: scale(0);
        background: rgba(57, 57, 57, 0.6);
        transition: transform 0.3s ease;
      }
    }
  }
  &__desc {
    color: #fff;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 40px;
    padding-left: 20px;
    transition: opacity 0.3s ease;
    line-height: 1.7;
    z-index: 1;
  }
  &__year {
    font-size: 14px;
  }
  &__name {
    font-size: 20px;
    max-width: 165px;
    font-weight: 600;
  }
  &__tags {
    position: absolute;
    left: 20px;
    bottom: 40px;
  }
}
.contactBox {
  a {
    font-size: 45px;
    font-weight: bold;
    position: relative;
    display: block;
    text-decoration: none;
    padding-bottom: 99%;
    border: 1px solid #000;
  }
  &__desc {
    line-height: 1;
    letter-spacing: 1px;
    -webkit-text-stroke: 1px #000;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 55px 45px;
    transition: color 0.2s ease;
  }
  a:hover &__desc {
    color: #b8f47b;
  }
}
@media only screen and (max-width: 767px) {
  .portfolio {
    &__col {
      width: 100%;
      margin-left: 0;
      transform: translateY(0) !important;
    }
  }
  .contactBox__desc {
    color: #b8f47b;
    background: rgba(255, 255, 255, 0.6);
  }
}
@media only screen and (min-width: 768px) {
  .portfolio {
    &__link {
      &:hover {
        a:after {
          transform: scale(1);
        }
        .portfolio__desc {
          opacity: 1;
        }
      }
    }
  }
}
</style>
