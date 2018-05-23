<template>
  <div class="header" >
    <div class="left-logo">
      LOGO  某某某某公司
    </div>
    <span class="mid-title">
      开放平台
    </span>
    <div class="right-menu">
      <el-tooltip effect="dark"  content="全屏"  placement="bottom">
          <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip>

      <el-tooltip effect="dark"  content="退出"  placement="bottom">
          <div  @click="logout" class="right-menu-item screenfull">
            <svg-icon  icon-class="loginout"  class="screenfull-svg"/>
          </div>
      </el-tooltip>
    </div>
 </div>
</template>
<script>
import Screenfull from "@/components/Screenfull";

export default {
  components: {
    Screenfull
  },
  methods: {
    logout() {
      this.$store.dispatch("FedLogOut").then(() => {
        location.reload(); // 为了重新实例化vue-router对象 避免bug
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  z-index: 3;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  border-radius: 0px !important;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  .left-logo {
    float: left;
  }
  .mid-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    font-weight: 800;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
    .screenfull-svg {
      display: inline-block;
      cursor: pointer;
      width: 24px;
      height: 24px;
      vertical-align: 10px;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      margin-top: 13px;
      height: 24px;
    }
  }
}
</style>