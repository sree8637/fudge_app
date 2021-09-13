<template>
  <b-col lg="3" class="user-list">
    <b-col class="title">
      <p>Users</p>
    </b-col> 
    <b-col class="user-item" v-for="user in users" :key="user.id">
      <b-row>
        <b-col lg="3" class="avatar-col">
          <img src="/images/dashboard/avatar@2x.png">
        </b-col>
        <b-col lg="9" class="name-col"> 
          <p class="d-block">{{user.name}}</p> 
          <p><span class="dot"></span><small>Online</small></p>
        </b-col>
      </b-row>
    </b-col>
  </b-col>    
</template>
<script>
export default {
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>
<style lang="scss" scoped>
.user-list {
  padding: 15px;
  border: 1px solid #D9D9D9;
  border-radius: 12px;
  margin: 0 5px;
  max-height: 600px;
  overflow: scroll;
  max-width: 300px;
  .title p {
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }
  .user-item {
    margin-bottom: 30px;
    .avatar-col {
      img {
        max-width: 36px;
        margin-right: 15px;
      }
    }
    .name-col {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      p {
        margin: 0;
        font-size: 14px;
        font-weight: 600;
      }
      .dot {
        height: 10px;
        width: 10px;
        background-color: green;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        top: 1px;
        right: 3px;
      }
    }
  }
}
</style>