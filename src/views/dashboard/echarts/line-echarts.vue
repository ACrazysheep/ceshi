<template>
   <div :class="className"></div>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    // width: {
    //   type: String,
    //   default: "100%"
    // },
    // height: {
    //   type: String,
    //   default: "450px"
    // },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object
    }
  },
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.initChart();
    if (this.autoResize) {
      this.__resizeHanlder = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHanlder);
    }

    // 监听侧边栏的变化
    const sidebarElm = document.getElementsByClassName("sidebar-container")[0];
    sidebarElm.addEventListener("transitionend", this.__resizeHanlder);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.__resizeHanlder);
    }

    const sidebarElm = document.getElementsByClassName("sidebar-container")[0];
    sidebarElm.removeEventListener("transitionend", this.__resizeHanlder);

    this.chart.dispose();
    this.chart = null;
  },
  // watch: {
  //   chartData: {
  //     deep: true,
  //     handler(val) {
  //       this.setOptions(val);
  //     }
  //   }
  // },
  methods: {
    setOptions({ title, Abscissa, name, Data1, Data2 } = {}) {
      this.chart.setOption({
        title: {
          //标题
          text: title
        },

        legend: {
          //图例组件
          bottom: 0,
          data: name
        },
        tooltip: {
          //提示框
          trigger: "axis"
        },
        toolbox: {
          //工具栏组件
          right: 20,
          feature: {
            magicType: {
              type:  ['line', 'bar']
            },
            saveAsImage: {}
          }
        },
        grid: {
          //表格
          left: "20",
          right: "20",
          bottom: "30px",
          containLabel: true
        },
        xAxis: {
          //x坐标
          type: "category",
          boundaryGap: false,
          data: Abscissa
        },
        yAxis: {
          //y坐标
          type: "value"
        },
        series: [
          {
            name: "2018",
            type: "line",
            data: Data1
          },
          {
            name: "2019",
            type: "line",
            data: Data2
          }
        ]
      });
    },
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      this.setOptions(this.chartData);
    }
  }
};
</script>
