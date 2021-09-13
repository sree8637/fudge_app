<template>
  <b-col lg="3" class="side-bar">
    <b-col class="sidebar-wrapper">
    <!-- <img class="overlay" src="/images/home/overlay.png"> -->
    <b-col>
      <img class="logo" src="/images/home/fudge.svg" @click="goToHome()">
    </b-col>  <span class="material-icons-outlined"></span>
    <b-list-group class="side-menu-items">
      <b-list-group-item href="#some-link"><i class="material-icons-outlined">dashboard</i>Dashboard</b-list-group-item>
      <b-list-group-item href="#" active><i class="material-icons-outlined">manage_accounts</i>Advisors<i class="material-icons-outlined active-caret">arrow_right</i></b-list-group-item>
      <b-list-group-item href="#"><i class="material-icons-outlined">description</i>My Documents</b-list-group-item>
      <b-list-group-item href="#"><i class="material-icons-outlined">rss_feed</i>Newsfeed</b-list-group-item>
      <b-list-group-item href="#"><i class="material-icons-outlined">call</i>Support</b-list-group-item>
    </b-list-group>
    </b-col>
  </b-col>
</template>
<script>
export default {
  name: 'SideBarCol',
  methods: {
    goToHome () {
      this.$router.push({path: '/'});
    }
  }
}
</script>
<style lang="scss" scoped>
.side-bar {
  height: 100vh;
  background-image: url('/images/home/home-bg.png');
  background-position: left;
  background-repeat: no-repeat;
  padding: 0;
  position: fixed;
  max-width: 350px;
  .sidebar-wrapper {
    height: 100vh;
    background-image: url('/images/home/overlay.png');
    background-position: left;
    background-repeat: no-repeat;
    padding-top: 30px;
    .logo {
      max-width: 125px;
      cursor: pointer;
    }
    .overlay {
      position: fixed;
      width: 420px;
      left: 0;
      height: 100vh;
    }
    .side-menu-items {
      background-color: transparent;
      margin: 60px 30px;
      a {
        background-color: transparent;
        color: #fff;
        padding: 16px;
        font-size: 18px;
        text-align: left;
        margin: 5px;
        &:hover {
          background-color: #c7c7c735;
          border: none;
          border-radius: 17px;
        }
      }
      
      .active {
        background-color: #c7c7c735;
        border: none;
        border-radius: 17px;
      }
      i {
        position: relative;
        top: 5px;
        right: 15px;
        margin-left: 30px;
      }
      .active-caret {
        position: absolute;
        top: 20px;
        right: 20px;
        margin: auto;
      }
    }
  }
}
</style>