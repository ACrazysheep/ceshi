<template>
  <div class="copyright" >
       广州众玩版权所有  © 版权所有
      <span class="copyright_split">|</span>
       增值电信业务经营许可证: 粤XXXXXXXXXXX  粤ICP备XXXXXXXX号
       <span class="copyright_split">|</span>
        网络文化经营许可证：文网文 [XXXX] XXX号
 </div>
</template>
<script>
export default {
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.copyright {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 10px;
  z-index: 3;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  border-radius: 0px !important;
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
  .copyright_split {
    margin: 0 10px;
    color: #ccc;
  }
}
</style>