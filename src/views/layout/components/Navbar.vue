<template>
    <div class="navbar-fixed">
        <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      欢迎你！小白
    </div>
  </el-menu>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar-fixed{
    // position: fixed;
  top: 50px;
}
.navbar {
  padding-right: 18px;
  height: 40px;
  line-height: 40px;
  border-radius: 0px !important;
  border-bottom: none;
  border-top: solid 1px #e6e6e6;
  .hamburger-container {
    line-height: 50px;
    height: 40px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container {
    float: left;
  }
  .app-breadcrumb.el-breadcrumb[data-v-84806d6e] {
    line-height: 40px;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus {
      outline: none;
    }
  }
}
</style>