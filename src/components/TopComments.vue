<template>
  <b-col lg="3" class="comments-list">
    <b-col class="title">
      <p>Top Comments</p>
    </b-col>
    <b-col class="comment-item" v-for="comment in topComments" :key="comment.id">
      <b-col class="name-col">
        <img src="/images/dashboard/avatar@2x.png">
        <p class="text-left">{{comment.name}}</p>
      </b-col>
      <p class="comment-time"><small>2 hours ago</small></p>
      <b-col class="comment-col">
        <p>{{comment.body}}</p>
      </b-col>  
    </b-col>
  </b-col>
</template>
<script>
export default {
  computed: {
    topComments () {
      return this.$store.state.topComments
    }
  }
}
</script>
<style lang="scss" scoped>
.comments-list {
  padding: 15px;
  border: 1px solid #D9D9D9;
  border-radius: 12px;
  margin: 0 5px;
  max-height: 600px;
  overflow: scroll;
  max-width: 300px;
  .title p{
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }
  .comment-item {
    margin-bottom: 30px;
    .name-col {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        max-width: 36px;
        margin-right: 15px;
      }
      p {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
      }
    }
    .comment-time {
      text-align: left;
      display: block;
      width: 45%;
      margin: auto;
    }
    .comment-col {
      text-align: left;
      margin-top: 15px;
    }
  }
}
</style>