<template>
  <b-container fluid>
    <b-row>
      <side-bar />
      <b-col lg="9" class="dashboard">     
        <b-row>
          <b-col lg="12" class="dash-header">
            <b-col lg="1" class="avatar">
              <img src="/images/dashboard/avatar@2x.png">
            </b-col>
            <b-col lg="8" class="welcome-msg">
              <p class="m-auto">Welcome, <strong>Alex Martin.</strong> Here’s your personalized financial dashboard</p>
            </b-col>
            <b-col lg="3" class="actions">
                <b-dropdown id="dropdown-1" text="Currency: GBP" class="m-md-2 currency-dd">
                  <b-dropdown-item>AED</b-dropdown-item>
                  <b-dropdown-item>USD</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-1" text="My Account" class="m-md-2 account-dd">
                  <b-dropdown-item>Profile</b-dropdown-item>
                  <b-dropdown-item>Logout</b-dropdown-item>
                </b-dropdown>
            </b-col>        
            </b-col>
        </b-row>
        <b-row>
          <b-col class="dash-title">
            <h1>Dashboard Home</h1>
            <hr>
          </b-col>
        </b-row>
        <user-stats />
        <b-row>
          <performance-chart/>
          <rounded-progress />  
        </b-row>
        <b-row class="news-comments-users">
          <news-list />
          <comment-list />
          <user-list />
        </b-row>
      </b-col>
    </b-row>   
  </b-container>  
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import UserStats from '@/components/UserStats.vue'
import UserList from '@/components/UserList.vue'
import CommentList from '@/components/TopComments.vue'
import NewsList from '@/components/NewsList.vue'
import RoundedProgress from '@/components/RoundedProgress.vue'
// import ChartInfo from '@/components/ChartInfo.vue'
import PerformanceChart from '@/components/PerformanceChart.vue'
export default {
  name: 'Dashboard',
  data() {
    return {
      
    }
  },
  components: {
    SideBar,
    UserStats,
    UserList,
    CommentList,
    NewsList,
    RoundedProgress,
    // ChartInfo,
    PerformanceChart,
  },
  mounted () {
    this.$store.dispatch('getUsers')
    this.$store.dispatch('getTopComments');
    this.$store.dispatch('getNews');
  },
  methods: {
  }
  
}
</script>
<style lang="scss" scoped>
.small {
    max-width: 600px;
    margin:  150px auto;
  }
.dashboard {
  margin-left: 22%;
  .dash-header {
    display: flex;
    align-items: center;
    padding:30px 15px ;
    .avatar {
      text-align: left;
      img {
        width: 62px;
      }
    }
    .welcome-msg {
      text-align: left;
    }
    .actions {
      display: inline-flex;
      button {
        
        background: #fff;
        border: none;
        color: #000;
      
      } 
    }
  }
  .dash-title {
    display: flex;
    h1 {
      font-size: 30px;
      text-align: left;
      display: inline;
    }
    hr {
      width:75%;
      border-top:2px solid #c4c4c4;
    }
  }
  .news-comments-users {
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
}
</style>