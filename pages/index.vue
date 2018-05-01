<template>
  <section class="container">
    <div class="inner">
      <Header></Header>
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

import axios from "axios";

export default {
  components: {
    Header,
    Kv,
    Portfolio
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
  }
};
</script>

<style lang="scss">
@import "../assets/common";

.wrap {
  max-width: 960px;
  margin: auto;
}

.container {
  height: 100vh * 5;
}
.inner {
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>