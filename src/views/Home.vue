<template>
  <b-container fluid class="home-container">
    <b-row>
      <b-col class="home m-auto">
        <img class="overlay" src="/images/home/overlay.png">
        <img class="bgimg" src="/images/home/home-bg.png">
        <b-col class="fudge-logo">
          <img src="/images/home/fudge.svg">
        </b-col>  
        <img class="down-arrow" src="/images/home/arrow-down-24.svg" @click="showTitle()" v-if="!show && !loadingDash">
        <transition name="slide-fade">
          <b-col class="title" v-if="show && !loadingDash">
            <h1>All your finances in one place.</h1>
            <p class="sub-title">Find out how our team of highly qualified financial consultants can help you achieve your financial goals.</p>
            <b-button class="btn view-dash-btn" @click="loadDashboard()">View Dashboard</b-button>
            <!-- <router-link class="btn view-dash-btn"  to="/dashboard">View Dashboard</router-link> -->
          </b-col>
        </transition>
        <div class="transitionLine" v-if="loadingDash"></div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
  data () {
    return {
      show: false,
      loadingDash: false
    }
  },
  methods: {
    showTitle () {
      this.show = !this.show
    },
    loadDashboard () {
      this.loadingDash = true
      setTimeout(()=>{
       this.$router.push({path: '/dashboard'});
      },1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: center;
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden;

    .bgimg {
      width:100%;
    }
    .overlay {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .fudge-logo {
      position: absolute;
      z-index: 99;
      top:45%;
    }
    .down-arrow {
      position: absolute;
      bottom: 30px;
    }
    .title {
      position: absolute;
      bottom: 20%;
      color:#fff;
      h1 {
        font-size: 50px;
        font-weight: 900;
      }
      p {
        color: #cfcfcf;
        width: 70%;
        margin: auto;
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
    .view-dash-btn {
      padding: 10px 15px;
      background-color: transparent;
      font-size: 18px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 5px;
    }
    .transitionLine {
      height:0px;
      width:1px;
      border:5px solid #fff;
      position: absolute;
      bottom: 45%;
      padding-left: 10%;

      
      -webkit-animation: increase 2s;
      -moz-animation:    increase 2s; 
      -o-animation:      increase 2s; 
      animation:         increase 2s; 
      animation-fill-mode: forwards;
    }

		@keyframes increase {
      10% {
        width: 100px;
      }
			100% {
				border-radius: 3px;
				width: 1500px;
			}
		}
  }
}
.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(130%);
  transition-timing-function: ease-in;
  transition: 0.2s;
  opacity: 0;
}



</style>
