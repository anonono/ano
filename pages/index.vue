<template>
	<section class="container">
    <Header></Header>
	</section>
</template>

<script>
import Header from "~/components/Header.vue";
import axios from "axios";

export default {
  components: {
    Header
  }
};
</script>

<style>
.container {
}
</style>
