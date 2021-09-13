<template>
  <b-col lg="6" class="news-list text-left">
    <b-col class="title">
      <p>Industry News</p>
    </b-col>
    <template v-for="newsItem in paginate">
      <b-col class="news-item" :key="newsItem.id"
      >
        <b-col class="date-col">
          <span>21 May 2021</span>
        </b-col>
        <b-col class="title-col">
          <p>{{newsItem.title}}</p>
        </b-col>
        <b-col class="body-col">
          <p>{{newsItem.body}}</p> 
        </b-col>
        <b-col class="read-more-col">
          <a href="#">Read full article</a>
        </b-col>
      </b-col>
    </template>
    <b-pagination
      v-model="currentPage"
      :total-rows="newsCount"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </b-col>   
</template>
<script>
export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1
    }
  },
  computed: {
    news () {
      return this.$store.state.news
    },
    newsCount () {
      return this.$store.state.news.length
    },
    paginate() {
      return this.news.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);
    }    
  },
}
</script>
<style lang="scss" scoped>
.news-list {
  padding: 15px;
  border: 1px solid #D9D9D9;
  border-radius: 12px;
  margin: 0 5px;
  max-height: 600px;
  overflow: scroll;
  max-width: 600px;
  .title p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 15px;
  }
  .news-item {
    margin-bottom: 30px;
    .title-col p{
      font-size: 18px;
      font-weight: 600;
    }
  }
  
}
</style>