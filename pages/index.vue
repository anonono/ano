<template>
  <section class="container">
    <Noise></Noise>
    <div class="inner">
      <Header :progress="progress"></Header>
      <div class="wrap">
        <Kv :progress="progress"></Kv>
        <Portfolio :progress="progress"></Portfolio>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "~/components/Header.vue";
import Kv from "~/components/Kv.vue";
import Portfolio from "~/components/Portfolio.vue";
import Noise from "~/components/Noise.vue";
import axios from "axios";

export default {
  components: {
    Header,
    Kv,
    Portfolio,
    Noise
  },
  data() {
    return {
      progress: 0
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
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/common";

.container {
  height: 100vh * 5;
  background-attachment: fixed;
}
.inner {
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>

