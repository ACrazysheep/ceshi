<template>
  <div class="app-container">
    <label class="radio-label" style="padding-left:0;">导出文件名: </label>
    <el-input style='width:340px;' placeholder="请输入文件名" prefix-icon="el-icon-document" v-model="filename"></el-input>
    <label class="radio-label">自动宽度 </label>
    <el-radio-group v-model="autoWidth">
      <el-radio :label="true" border>True</el-radio>
      <el-radio :label="false" border>False</el-radio>
    </el-radio-group>
    <el-button style='margin:0 0 20px 20px;' type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">导出excel</el-button>

    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='Id' width="95">
        <template slot-scope="scope">
          {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column label="Title" align="center"  width="95">
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </el-table-column>
      <el-table-column label="Author"  align="center"  width="95">
        <template slot-scope="scope">
          <el-tag>{{scope.row.author}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings"  align="center"  width="95">
        <template slot-scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Date"  width="95">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.timestamp}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'exportExcel',
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.list =[{id:1,title:111,author:'我我我我我我我我我我我我我我我我我我我我我我我我我我我',pageviews:1000,display_time:'2018'},{id:2,title:111,author:'我',pageviews:1000,display_time:'2018'},{id:3,title:111,author:'我',pageviews:1000,display_time:'2018'},{id:4,title:111,author:'我',pageviews:1000,display_time:'2018'}]
      setTimeout(() => {
        this.listLoading = false
      }, 2000);
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        // const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        const list = this.list
        // const data = this.formatJson(filterVal, list)
        const data = list
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth
        })
        this.downloadLoading = false
      })
    },
    // formatJson(filterVal, jsonData) {
    //   return jsonData.map(v => filterVal.map(j => {
    //     if (j === 'timestamp') {
    //       return parseTime(v[j])
    //     } else {
    //       return v[j]
    //     }
    //   }))
    // }
  }
}
</script>

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>

