<template>
  <div>
    <div v-for="post in posts" class="preview-container">
      <h3 class="preview-title"><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></h3>
      <p>{{ post.frontmatter.description }}</p>
      <p>
        <Btn :href="post.path">Читать далее 📖</Btn>
      </p>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn.vue";
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(
          (x) =>
            x.path.startsWith("/posts/") && x.frontmatter.blog_index != true
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
  },
};
</script>

<style scoped>
  .preview-container{
    margin-bottom: 50px;
  }

  .preview-title{
    margin-bottom: -7px;
  }

  .preview-title a {
    color: #2c3e50 !important;
  }
</style>