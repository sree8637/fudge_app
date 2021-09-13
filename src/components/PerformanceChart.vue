<template>
  <b-col lg="5">
    <b-row>
      <b-col class="chart-info-title d-flex text-left">
        <p>My Performance</p>
      </b-col>
    </b-row>
    <b-row>
    <b-col><line-chart></line-chart></b-col>
    </b-row>
  </b-col>
</template>
<script>
import LineChart from '@/components//LineChart.vue'
export default {
  name: 'Dashboard',
  data() {
    return {
      
    }
  },
  components: {
    LineChart
  }
}
</script>
<style lang="scss" scoped>
.chart-info-title {
  p{
    font-size: 20px;
    font-weight: 500;
    text-align: left;
    margin: 0px;
  }
}
</style>