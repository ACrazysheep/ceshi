<template>
  <div>
    <top-logo></top-logo>
    <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
     <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
      <app-main></app-main>
    </div>
  </div>
  <copy-right></copy-right>
  </div>
</template>

<script>
import { TopLogo, Navbar, Sidebar, AppMain, TagsView,CopyRight } from "./components";

export default {
  name: "layout",
  components: {
    TopLogo,
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    CopyRight
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  top: 50px;
  height: 100%;
  width: 100%;
}
</style>