<template>
  <b-row class="user-stats">
    <b-col lg="6" class="quick-stats">
        <p class="stat-title">Quick Stats</p>
        <b-col lg="5" class="num-col today-worth">
          <span>&pound; 563,350</span>
          <p>Your net worth as of today</p>
        </b-col>
        <b-col lg="3" class="num-col monthly-flow">
          <span>&pound; 563,350</span>
          <p>Monthy Cashflow</p>
        </b-col>
        <b-col lg="3" class="num-col  overall-worth">
          <span>&pound; 563,350</span>
          <p>Overall Liabilities</p>
        </b-col>
    </b-col>
    <b-col lg="6" class="fin-health">
      <p class="stat-title">My financial health</p>
      <b-col lg="12" class="num-col health-info">
        <b-col class="p-bar-wrapper">
          <b-col class="progress">
            <b-col class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
            </b-col>
          </b-col>
        </b-col>
        <hr>
        <p>Your financial health status is <strong>GOOD</strong>. However there’s still room for improvement. <a href="#">See how you can improve</a></p>
      </b-col>
    </b-col>
  </b-row>
</template>
<style lang="scss" scoped>
  .user-stats {
    .quick-stats {
      display: flex;
      align-items: center;
      padding:60px 15px ;
    }
    .fin-health {
      display: flex;
      align-items: center;
      padding: 60px 15px;
      hr {
        margin:0px;
      }
      p{
        margin:0px;
        margin-top:5px;
      }
    }

    .num-col {
      box-shadow: 2px 5px 10px 0px #888888;
      margin: auto 10px;
      text-align: left;
      padding: 15px 10px;
      border:5px;
      border-radius: 10px;
      min-height: 105px;
      span {
        font-size: 26px;
        font-weight: 500;
      }
      p {
        font-size: 12px;
      }
    }
    .p-bar-wrapper {
      padding: 20px;
    }
    .stat-title {
      position: absolute;
      top: 20px;
      left: 30px;
      font-size: 20px;
      font-weight: 500;
    }
  }
  // progress-bar need to add animation
  .progress {
    height: 5px;
    padding: 0px;
  }
  .progress-bar {
     background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,237,0,1) 35%, rgba(0,204,77,1) 100%) !important;
  }
</style>