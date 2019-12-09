<template>
  <div class="contain">
	<div class="header">
	  <i class="el-icon-s-platform"></i>
	  <span>合同状态:</span>
	  <el-select v-model="contractStatusValue" placeholder="请选择">
	    <el-option
	      v-for="item in contractStatusOptions"
	      :key="item.contractStatusValue"
	      :label="item.label"
	      :value="item.contractStatusValue">
	    </el-option>
	  </el-select>
	  <span>合同编号:</span>
	  <el-input v-model="inputOne"></el-input>
	  <span>申请人:</span>
	  <el-input class="proposer" v-model="inputTwo"></el-input>
	  <span>身份证号:</span>
	  <el-input v-model="inputThree"></el-input>
	  <span>产权证号:</span>
	  <el-input class="propRegCode" v-model="inputFour"></el-input>
	  <div class="button">
	  	<router-link to="/newIncreased">
	  	  <el-button type="success">新增<i class="el-icon-plus el-icon--right"></i></el-button>
	  	</router-link>
	  	<el-button type="primary" @click="search">查询<i class="el-icon-search el-icon--right"></i></el-button>
	  </div>
	</div>
	<div class="section">
	  <el-table
	    :data="tableDataTwo"
	    :row-class-name="tableRowClassName"
	    style="width: 100%"
	    height="660">
	    <el-table-column
	      prop="serialNum"
	      label="序号"
	      type="index"
	      width="50"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="contractNum"
	      label="合同编号"
	      width="200"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="zoneCode"
	      label="行政区"
	      width="80"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="propRegCode"
	      label="产权证号"
	      width="200"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="houseMsg"
	      label="房屋信息"
	      width="220"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="seller"
	      label="出卖人"
	      width="100"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="buyer"
	      label="买受人"
	      width="100"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="signDate"
	      label="签约日期"
	      width="120"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="status"
	      label="状态"
	      width="80"
	      align="center">
	    </el-table-column>
	    <el-table-column
	      prop="operate"
	      label="操作"
	      align="center"
	      width="350">
	      <template slot-scope="scope">
	      	<router-link to="/contractAmend">
	          <el-button class="operate" type="success" icon="el-icon-edit">修改</el-button>
	        </router-link>
			<el-button class="operate" type="danger" @click="del" icon="el-icon-delete">删除</el-button>
			<el-button class="operate" type="primary" icon="el-icon-upload">提交</el-button>
			<el-button class="operate" type="info" icon="el-icon-close">撤销</el-button>
	        <router-link to="/contractCheck">
	          <el-button class="operate" type="warning" icon="el-icon-view">查看</el-button>
	    	</router-link>
	      </template>
	    </el-table-column>
	  </el-table>
	</div>
	<div class="footer">
	  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pagesSize"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalNum"
      align="center">
      </el-pagination>
	</div>
  </div>
</template>

<script>
export default {
  name: 'contractList',
  data() {
      return {
        contractStatusOptions: [{
          contractStatusValue: '1',
          label: '全部'
        }, {
          contractStatusValue: '2',
          label: '初始'
        }, {
          contractStatusValue: '3',
          label: '正在审批'
        }, {
          contractStatusValue: '4',
          label: '已审批'
        }, {
          contractStatusValue: '5',
          label: '备案'
        }, {
          contractStatusValue: '6',
          label: '撤销'
        }, {
          contractStatusValue: '7',
          label: '审批不通过'
        }],
        contractStatusValue: '1',
        inputOne: '',
        inputTwo: '',
        inputThree: '',
        inputFour: '',
        tableData: [{
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',         
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',         
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',         
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '初始',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '撤销',
          operate: ''
        }, {
          contractNum: '201803080016',
          zoneCode: '滨州市',
          propRegCode: '2011110794',
          houseMsg: '滨州市黄河六路566号',        
          seller: '孙建波',
          buyer: '12e1',
          signDate: '2018-03-08',
          status: '撤销',
          operate: ''
        }],
        pagesSize: [12, 24, 36, 48],    //选择几条为一组
        pageSize: 12,    //每页多少条
        totalNum: 0,    //总条数
        currentPage: 1,    //默认显示页数
        tableDataTwo: []   
      }
    },
  mounted() {
  	console.log(this.tableData);
  	console.log(this.tableData.length);
  	this.tableDataTwo = this.tableData;
  	this.totalNum = this.tableData.length;
  	this.tableDataTwo = this.tableData.slice(this.pageSize * (this.currentPage - 1), this.currentPage * this.pageSize);
  },
  methods: {
    handleSizeChange(val) {    //参数值表示每页多少条
      console.log(`每页 ${val} 条`);
      console.log(this.tableDataTwo);
      this.pageSize = val;
      this.tableDataTwo = this.tableData.slice(this.pageSize * (this.currentPage - 1), this.currentPage * val);
    },
    handleCurrentChange(val) {    //参数值表示当前页
      console.log(`当前页: ${val}`);
      console.log(val);
      this.currentPage = val;
      this.tableDataTwo = this.tableData.slice(this.pageSize * (this.currentPage - 1), this.pageSize * val);
    },
    tableRowClassName({row, rowIndex}) {
      if (rowIndex%2 != 0) {
        return 'evenRowColor';
      } else {
        return 'oddRowColor';
      }
        return '';
    },
    del() {
      this.$confirm('是否删除本条合同?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    search() {
      switch(this.contractStatusValue) {
      	case '1':
      	console.log('全部合同');
      	break;
      	case '2':
      	console.log('初始');
      	break;
      	case '3':
      	console.log('正在审批');
      	break;
      	case '4':
      	console.log('已审批');
      	break;
      	case '5':
      	console.log('备案');
      	break;
      	case '6':
      	console.log('撤销');
      	break;
      	case '7':
      	console.log('审批不通过');
      	break;
      }
    }
  }  
}
</script>

<style scoped lang="less">
.contain{
  .header{
  	display: flex;
  	flex-wrap: nowrap;
  	width: 100%;
  	font-size: 14px;
  	margin-bottom: 10px;
  	span{
  	  display: inline-block;
  	  height: 30px;
  	  line-height: 30px;
  	  text-align: right;
  	  margin-right: 10px;
  	  width: 6%;
  	}
  	.el-icon-s-platform{
  	  font-size: 20px;
  	  width: 2%;
  	  height: 30px;
  	  text-align: center;
  	  line-height: 30px;
  	}
  	/deep/ .el-input__inner{
  	  height: 30px;
  	  line-height: 30px;
  	}
  	/deep/ .el-input__suffix{
  	  padding-top: 5px;
  	}
  	.el-select{
  	  width: 8%;
  	}
  	.el-input{
	  display: inline-block;
	  width: 13%;
	}
	.proposer{
	  width: 6%;
	}
	.propRegCode{
	  width: 18%;
	}
	.button{
	  display: inline-block;
	  width: 150px;
	  float: right;
	}
	.el-button{
	  padding: 7px 2px;
	  margin: 0px 5px;
	  float: right;
	}
  }
  .section{
  	.el-button--small{
  	  font-size: 16px;
  	}
  	/deep/ .operate{
	  padding: 5px 5px;
	  margin: 0;
	}
	/deep/ .evenRowColor{
	  background-color: #e8edff;
	}
	/deep/ .el-table td{
  	  padding: 11px 0;
  	}
  	/deep/ .el-table th, .el-table tr{
  	  background-color: #22678d;
  	}
  } 
}
</style>