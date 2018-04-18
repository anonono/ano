<template>
    <div class="carousel">
        <ul>
            <li v-for="(item, index) in gallery" :key="index">
                <a href="" v-if="item.href">
                    <img v-bind:src="item.image" v-bind:alt="item.alt" />
                </a>
                <img v-bind:src="item.image" v-bind:alt="item.alt" v-else />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["gallery"]
};
</script>

<style lang="scss" scoped>
.carousel {
  padding: 30px 0;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    clear: both;
  }
  img {
    width: 100%;
  }
  li {
    width: 25%;
    float: left;
  }
}
</style>
