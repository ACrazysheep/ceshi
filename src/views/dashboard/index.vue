<template>
  <div>
    <line-echart  :class-name="lineechartClass"  :chart-data='lineChartData'></line-echart>
  </div>
</template>

<script>
import { LineEchart } from "./echarts";

export default {
  components: {
    LineEchart
  },
  data() {
    return {
      lineechartClass: "lineechart",
      lineChartData: {
        title: "年度报表",
        Abscissa: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        name: ["2018", "2019"],
        Data1: [1100, 500, 121, 300, 105, 90, 500],
        Data2: [120, 90, 100, 400, 142, 400, 130]
      }
    };
  },
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.lineechart {
  width: 50%;
  height: 300px;
}
</style>