<template>
  <section class="container">
    <div class="inner">
      <div class="wrap">
        <Header></Header>

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
    return {};
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
  background: url(/images/noise.png) repeat;
  background-attachment: fixed;
}
.inner {
  height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>