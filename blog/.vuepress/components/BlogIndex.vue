<template>
  <div>
    <div v-for="post in posts" class="preview-container">
      <h3 class="preview-title"><router-link :to="post.path">{{ post.frontmatter.title }}</router-link></h3>
      <small class="preview-info">👤 {{ post.frontmatter.author }} | 🗓 {{formatDate(post.frontmatter.date)}}</small>
      <p>{{ post.frontmatter.description }}</p>
      <p>
        <Btn :href="post.path">Читать далее {{post.frontmatter.emoji}}</Btn>
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
    }
  },
  methods: {
    formatDate(dateString) {
      let date = new Date(dateString);
      console.log(this.data);
      let day = date.getDate()<10 ? '0' : '';
      day += date.getDate();
      let month = date.getMonth()<10 ? '0' : '';
      month += date.getMonth();
      return `${day}.${month}.${date.getFullYear()}`;
    }
  }
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
  
  .preview-info {
    margin: 15px 0 0;
    display: block;
  }
</style>