<template>
  <div>
    <div v-for="post in posts">
      <h3>{{ post.frontmatter.title }}</h3>
      <p>{{ post.frontmatter.description }}</p>
      <p>
        <router-link :to="post.path">Read more</router-link>
      </p>
    </div>
  </div>
</template>

<script>
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