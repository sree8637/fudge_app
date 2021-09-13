<template>
  <!-- <b-col class="row d-flex justify-content-center mt-100"> -->
  <b-col lg="7">
    <b-row>
      <b-col class="spent-info-title d-flex">
        <b-col lg="6"><p>My Goals</p></b-col>
        <b-col lg="6" class="text-right"><a href="#">View all Goals</a></b-col>
      </b-col>
    </b-row>
    <b-row class="mt-3">
    <b-col class="progress-wrapper">
      <b-col class="spent-cat"><p><strong>Retirement</strong></p></b-col>
      <b-col class="progress one"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
          <b-col class="progress-value">90%</b-col>
      </b-col>
      <b-col class="spent-balance"><p class="text-left">&pound; 536,350</p><p class="text-right">&pound; 200,000</p></b-col>
    </b-col>
    <b-col class="progress-wrapper">
      <b-col class="spent-cat"><p><strong>Vacation Home</strong></p></b-col>
      <b-col class="progress two"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
          <b-col class="progress-value">37.5%</b-col>
      </b-col>
      <b-col class="spent-balance"><p class="text-left">&pound; 101,342</p><p class="text-right">&pound; 150,000</p></b-col>
    </b-col>
    <b-col class="progress-wrapper">
      <b-col class="spent-cat"><p><strong>Travel</strong></p></b-col>
      <b-col class="progress three"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
          <b-col class="progress-value">77.5%</b-col>
      </b-col>
      <b-col class="spent-balance"><p class="text-left">&pound; 46,350</p><p class="text-right">&pound; 100,000</p></b-col>
    </b-col>
    </b-row> 
  </b-col>
  
<!-- </b-col> -->
</template>
<style lang="scss" scoped>
.spent-info-title {
  p{
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    margin: 0px;
  }
  a {
    padding: 10px;
    background: #c4c4c4;
    color:#000;
    border-radius: 20px;
  }
}
.spent-cat{
  margin-top: 15px;
}
.spent-balance {
  
  p {
    border-top: 1px solid #c4c4c4;
    display: inline-block;
    width: 50%;
  }
}
.progress-wrapper {
  display: inline-block;
  width: auto;
  padding: 0;
  margin: 15px;
  border-radius: 12px;
  box-shadow: 2px 5px 10px 0px #888888;
}
.progress {
  width: 150px;
  height: 150px !important;
  float: left;
  line-height: 150px;
  background: none;
  margin: 20px;
  box-shadow: none;
  position: relative
}

.progress:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #fff;
  position: absolute;
  top: 0;
  left: 0
}

.progress>span {
  width: 50%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 1
}

.progress .progress-left {
  left: 0
}

.progress .progress-bar {
  width: 100%;
  height: 100%;
  background: none;
  border-width: 2px;
  border-style: solid;
  position: absolute;
  top: 0
}

.progress .progress-left .progress-bar {
  left: 100%;
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  border-left: 0;
  -webkit-transform-origin: center left;
  transform-origin: center left
}

.progress .progress-right {
  right: 0
}

.progress .progress-right .progress-bar {
  left: -100%;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  border-right: 0;
  -webkit-transform-origin: center right;
  transform-origin: center right;
  animation: loading-1 1.8s linear forwards
}

.progress .progress-value {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: #fff;
  font-size: 24px;
  color: #000;
  line-height: 135px;
  text-align: center;
  position: absolute;
  top: 5%;
  left: 5%
}
.progress.one .progress-bar {
  border-color: green
}
.progress.one .progress-left .progress-bar {
  animation: loading-2 1.5s linear forwards 1.8s
}
.progress.two .progress-bar {
  border-color: green
}
.progress.two .progress-right .progress-bar {
  animation: loading-3 1.8s linear forwards
}
.progress.two .progress-left .progress-bar {
  animation: none
}
.progress.three .progress-bar {
  border-color: green
}
.progress.three .progress-right .progress-bar {
  animation: loading-1 1.5s linear forwards
}
.progress.three .progress-left .progress-bar {
  animation: loading-4 1.5s linear forwards 1.8s
}

@keyframes loading-1 {
  0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
  }
  100% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg)
  }
}
@keyframes loading-2 {
  0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
  }
  100% {
      -webkit-transform: rotate(144deg);
      transform: rotate(144deg)
  }
}
@keyframes loading-3 {
  0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
  }
  100% {
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg)
  }
}
@keyframes loading-4 {
  0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
  }
  100% {
      -webkit-transform: rotate(70deg);
      transform: rotate(70deg)
  }
}
</style>