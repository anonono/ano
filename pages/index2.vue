<template>
	<section class="container">
		<Header></Header>
		<div>
      index2
      <nuxt-link to="/">index1</nuxt-link>
      <ul>
        <li v-for="repo in repos" :key="repo.id">
          {{repo.name}}
        </li>
      </ul>
		</div>
	</section>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
export default {
  components: {
    Header
  },
  data() {
    return {
      repos: []
    };
  },
  created() {
    axios
      .get("https://api.github.com/users/WillyLi/repos")
      .then(response => {
        this.repos = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>

</style>
