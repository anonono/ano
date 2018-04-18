<template>
	<section class="container">
    <Header></Header>
    <div>
      index1    
      <nuxt-link to="/index2">index2</nuxt-link>
    </div>
    <div>
      <Carousel :gallery="gallery"></Carousel>
    </div>
    {{url}}
	</section>
</template>

<script>
import Header from "~/components/Header.vue";
import Carousel from "~/components/Carousel.vue";
import axios from "axios";

var gallery = [
  {
    id: 0,
    href: "https://www.google.com",
    image: "http://lorempixel.com/400/200/sports?0",
    alt: "image0"
  },
  {
    id: 1,
    href: "https://www.google.com",
    image: "http://lorempixel.com/400/200/sports?1",
    alt: "image1"
  },
  {
    id: 2,
    href: "https://www.google.com",
    image: "http://lorempixel.com/400/200/sports?2",
    alt: "image2"
  },
  {
    id: 3,
    href: "https://www.google.com",
    image: "http://lorempixel.com/400/200/sports?3",
    alt: "image3"
  }
];
console.log(
  JSON.stringify({
    longUrl: "http://www.google.com/"
  })
);
export default {
  created: () => {
    axios({
      url: "https://www.googleapis.com/urlshortener/v1/url",
      type: "POST",
      data: JSON.stringify({
        longUrl: "http://www.google.com/"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        // this.url = response;
      })
      .catch(error => {
        console.log(error);
      });
  },
  data: () => {
    return {
      gallery: gallery,
      url: "123"
    };
  },
  components: {
    Header,
    Carousel
  }
};
</script>

<style>
.container {
}
</style>
