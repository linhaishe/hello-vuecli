<template>
  <div class="home">
    <button @click="goAbout">去about</button>
    <button @click="getTableData">getTableData</button>
    <h1>This is a Home page</h1>
    <h1>{{ test }}</h1>
    <button @click="exportPDF">exportPDF</button>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <el-table :data="tableDatafromServe" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import '../assets/fonts/weiruanyahei2-normal';

export default {
  name: 'Home',
  components: {
    //HelloWorld,
  },
  data: function() {
    return {
      test: '111',
      tableDatafromServe: [],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.query);
  },
  created() {
    this.getTableData();
  },
  methods: {
    goAbout() {
      this.$router.push({
        path: '/about',
        name: 'About',
        params: { name: 'heather' },
      });
    },
    exportPDF() {
      console.log(1);
      const columns = [];
      const body = this.tableDatafromServe;
      console.log('data', body);
      for (let key in body[0]) {
        columns.push({ header: key, dataKey: key });
      }
      console.log('columns', columns);
      const doc = new jsPDF('p', 'pt');
      doc.setFont('weiruanyahei2');
      doc.autoTable({
        columns,
        body,
        styles: {
          font: 'weiruanyahei2', //字体，如果不配置，表格中的中文仍会乱码
          textColor: [0, 0, 0],
        },
      });
      doc.save('tableDatafromServe.pdf');
    },
    getTableData() {
      this.$axios({
        url: '/getTableData',
        method: 'post',
        data: {
          pwd: '1',
        },
      }).then((res) => {
        this.tableDatafromServe = res.data.data;
        console.log(res.data.data);

        return res.data.data;
        //总页面数据修改
        // this.page_total = res.data.count;
      });
    },
  },
};
</script>
