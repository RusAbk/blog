<template>
  <div>
    <h1>Последние публикации</h1>
    <div>
      <div>
        <label class="tag" :class="selectedTags.indexOf(tag) != -1 ? 'selected':''" v-for="tag in tags">
          <input type="checkbox" v-model="selectedTags" :value="tag"> {{tag}}
        </label>
      </div>
    </div>
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
  data(){
    return {
      selectedTags: []
    }
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(
          (post) => {
            let hasTag = this.selectedTags.length == 0 ? true : false;
            if(!hasTag && post.path.startsWith("/posts/") && !post.frontmatter.blog_index)
              for(let tag of post.frontmatter.tags){
                if(this.selectedTags.indexOf(tag) != -1){
                  hasTag = true;
                  break;
                }
              }
            console.log(post.frontmatter.title + ' ' + hasTag);

            return post.path.startsWith("/posts/") && !post.frontmatter.blog_index && hasTag;
          }
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    },
    tags(){
      let posts = this.$site.pages
        .filter(
          (x) =>
            x.path.startsWith("/posts/") && x.frontmatter.blog_index != true
        );

      let tagsList = [];
      for(let page of posts){
        for(let tag of page.frontmatter.tags){
          if(tagsList.indexOf(tag) == -1) tagsList.push(tag);
        }
      }
      return tagsList;
    }
  },
  methods: {
    formatDate(dateString) {
      let date = new Date(dateString);
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

  .tag {
    display: inline-block;
    margin: 0 10px 10px 0;
    padding: 2px 6px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid #3eaf7c;
    color: #3eaf7c;
  }
  .tag.selected{
    background: #3eaf7c;
    color: #fff;
  }
  .tag input{
    display: none;
  }
</style>