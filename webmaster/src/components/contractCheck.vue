<template>
  <div class="contractCheck">
	<div class="top">
	  <i class="el-icon-s-platform"></i>
	  <span>存量房网签合同查看</span>
	</div>
	<div class="navBar">
	  <el-tabs type="border-card">
	  	<el-tab-pane>
	      <span slot="label">
	      <i class="el-icon-s-operation"></i> 合同签订
	  	  </span>
		  <el-collapse v-model="houseMsg">
			<el-collapse-item title="房屋信息" name="1">
			  <template>
			    <el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			      <el-table-column
			        prop="serialNumHouse"
			        label="序号"
			        width="180"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="houseLocationHouse"
			        label="房屋坐落"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="coverAreaHouse"
			        label="建筑面积"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="mainHouseAreaHouse"
			        label="主房面级"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="operateHouse"
			        label="操作"
			        width="180"
			        align="center">
			        <el-button type="primary" icon="el-icon-message" @click="checkHouseMsgBtn">查看</el-button>
			      </el-table-column>
			  	</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse v-model="sellerMsg">
			<el-collapse-item title="卖方信息" name="1">
			  <template>
			    <el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			      <el-table-column
			        prop="serialNumSeller"
			        label="序号"
			        width="180"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="nameSeller"
			        label="姓名"
			        width="180"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="relPersonTypeSeller"
			        label="相关人类型"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="idTypeSeller"
			        label="证件类型"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="idNumberSeller"
			        label="证件号码"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="phoneNumSeller"
			        label="联系电话"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="operateSeller"
			        label="操作"
			        width="180"
			        align="center">
			        <el-button type="primary" icon="el-icon-message" @click="checkSellerMsgBtn">查看</el-button>
			      </el-table-column>
			  	</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse class="buyer" v-model="buyerMsg">
			<el-collapse-item title="买方信息" name="1">
			  <template>
			    <el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			      <el-table-column
			        prop="serialNumBuyer"
			        label="序号"
			        width="180"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="nameBuyer"
			        label="姓名"
			        width="180"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="relPersonTypeBuyer"
			        label="相关人类型"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="idTypeBuyer"
			        label="证件类型"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="idNumberBuyer"
			        label="证件号码"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="phoneNumBuyer"
			        label="联系电话"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="operateBuyer"
			        label="操作"
			        width="180"
			        align="center">
			        <el-button type="primary" icon="el-icon-message" @click="checkBuyerMsgBtn">查看</el-button>
			      </el-table-column>
			  	</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse v-model="brokerageMsg">
			<el-collapse-item title="经纪机构信息" name="1">
			  <br>
			  <template>
				<el-table
				  :data="tableBrokerage"
				  border
				  :cell-style="addBrokerageCellStyle"
				  :header-row-style="addBrokerageRowStyle"
				  style="width: 100%">
				  <el-table-column
				    prop="colOne"
				    width="170">
				  </el-table-column>
				  <el-table-column
				    prop="colTwo"
				    width="">
				  </el-table-column>
				  <el-table-column
				    prop="colThree"
				    width="170">
				  </el-table-column>
				  <el-table-column
				    prop="colFour"
				    width="">
				  </el-table-column>
				</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse v-model="contractMsg">
			<el-collapse-item title="合同信息" name="1">
			<br>
			  <template>
				<el-table
				  :data="tableContract"
				  border
				  :span-method="arraySpanMethod"
				  :cell-style="addContractCellStyle"
				  :header-row-style="addContractRowStyle"
				  style="width: 100%">
				  <el-table-column
				    prop="colOne"
				    width="170">
				  </el-table-column>
				  <el-table-column
				    prop="colTwo"
				    width="">
					
				  </el-table-column>
				  <el-table-column
				    prop="colThree"
				    width="170">
				  </el-table-column>
				  <el-table-column
				    prop="colFour"
				    width="">
				    
				  </el-table-column>
				</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <div class="houseMsgContain" :style="{display: houseMsgContainTable}">
		  	<p>
		  	  <span>
		  	  <i class="el-icon-s-platform"></i>查看房屋</span>
		  	</p>
		  	<table cellspacing="0px" class="houseMsgTable">
			  <tr>
			    <td class="bgc">
			      图号
			    </td>
			    <td>
			    	
			    </td>
			    <td class="bgc">
			  	  丘号
			    </td>
			    <td>
			      12345679844
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			  	  幢号
			    </td>
			    <td>
			  	  10
			    </td>
			    <td class="bgc">
			      房号
			    </td>
			    <td>
			  	  4-102
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      不动产单元号
			    </td>
			    <td>
			      
			    </td>
			    <td class="bgc">
			      其他房屋编号
			    </td>
			    <td>
			      
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <!-- <span :style="{display: amendHousePage}">*</span> -->
			      房屋坐落
			    </td>
			    <td colspan="3">
			  	  滨州市黄河六路566号
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <!-- <span :style="{display: amendHousePage}">*</span> -->
			      建筑面积
			    </td>
			    <td>
			      100.000
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	 
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">套内建筑面积</td>
			    <td>
			  	  0.000
			    </td>
			    <td class="bgc">
			  	  分摊建筑面积
			    </td>
			    <td>
			  	  0.000
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">主房面积</td>
			    <td>
			  	  0.000
			    </td>
			    <td class="bgc">附房面积</td>
			    <td>
			  	  0.000
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">车库面积</td>
			    <td>0.000</td>
			    <td class="bgc">是否有电梯</td>
			    <td>
			  	  否
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">行政区</td>
			    <td>
			  	  
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
			  <tr>
		        <td class="bgc">
		          <!-- <span :style="{display: amendHousePage}">*</span> -->
		          房屋用途
		        </td>
			    <td>
			      住宅
			    </td>
			    <td class="bgc">
			      <!-- <span :style="{display: amendHousePage}">*</span> -->
			      房屋性质
			    </td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackHouse">返回</el-button>
		  </div>
		  
		  <div class="sellerMsgContain" :style="{display: sellerMsgContainTable}">
		  	<p>
		  	  <span>
		  	  <i class="el-icon-s-platform"></i>查看卖方</span>
		  	</p>
		  	<table cellspacing="0px" class="sellerMsgTable">
			  <tr>
			    <td class="bgc">
			      卖方类型
			    </td>
			    <td>
			    	
			    </td>
			    <td class="bgc">
			  	  
			    </td>
			    <td>
			      
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			  	  姓名
			    </td>
			    <td>
			  	  孙建波
			    </td>
			    <td class="bgc">
			      相关人类型
			    </td>
			    <td>
			  	  出卖人
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      户籍所在地(住所)
			    </td>
			    <td>
			  	  
			    </td>
			    <td class="bgc">
			      联系电话
			    </td>
			    <td>
			  	  
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td>
			    	
			    </td>
			    <td class="bgc">证件号码</td>
			    <td>
			  	  
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  
			    </td>
			    <td class="bgc">
			  	  邮政编码
			    </td>
			    <td>
			  	  
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackSeller">返回</el-button>
		  </div>

		  <div class="buyerMsgContain" :style="{display: buyerMsgContainTable}">
		  	<p>
		  	  <span>
		  	  <i class="el-icon-s-platform"></i>查看买方</span>
		  	</p>
		  	<table cellspacing="0px" class="buyerMsgTable">
			  <tr>
			    <td class="bgc">
			      买方类型
			    </td>
			    <td>
			    	
			    </td>
			    <td class="bgc">
			  	  
			    </td>
			    <td>
			      
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			  	  姓名
			    </td>
			    <td>
			  	  孙建波
			    </td>
			    <td class="bgc">
			      相关人类型
			    </td>
			    <td>
			  	  买受人
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      户籍所在地(住所)
			    </td>
			    <td>
			  	  
			    </td>
			    <td class="bgc">
			      联系电话
			    </td>
			    <td>
			  	  
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td>
			    	
			    </td>
			    <td class="bgc">证件号码</td>
			    <td>
			  	  
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  
			    </td>
			    <td class="bgc">
			  	  邮政编码
			    </td>
			    <td>
			  	  
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackBuyer">返回</el-button>
		  </div>
		  
		  <div class="shade" :style="{display: shadeContain}">
		  	
		  </div>
	  	</el-tab-pane>
	  	<el-tab-pane>
	      <span slot="label">
	      <i class="el-icon-s-operation"></i> 合同查看
	  	  </span>
	      合同查看
	  	</el-tab-pane>
	 	<el-tab-pane>
	      <span slot="label">
	      <i class="el-icon-s-operation"></i> 数字档案
	  	  </span>
	      数字档案
	  	</el-tab-pane>
	  	<el-tab-pane>
	      <span slot="label">
	      <i class="el-icon-s-operation"></i> 网签合同签字
	  	  </span>
	      网签合同签字
	  	</el-tab-pane>
	  </el-tabs>
	</div>
	<div class="footer">
	  <router-link to="/contractList">
	    <el-button type="success" icon="el-icon-refresh-left">返回</el-button>
	  </router-link>
	</div>
  </div>
</template>

<script>
export default {
  name: 'contractCheck',
  data() {
  	return {
        houseMsg: ['1'],
        sellerMsg: ['1'],
        buyerMsg: ['1'],
        brokerageMsg: ['1'],
        contractMsg: ['1'],
        tableData: [{
          serialNumHouse: '1',
          houseLocationHouse: '滨州市黄河六路566号',
          coverAreaHouse: '100.00',
          mainHouseAreaHouse: '0.000',
          operateHouse: '',
          serialNumSeller: '',
          nameSeller: '',
          relPersonTypeSeller: '',
          idTypeSeller: '',
          idNumberSeller: '',
          phoneNumSeller: '',
          operateSeller: '',
          serialNumBuyer: '',
          nameBuyer: '',
          relPersonTypeBuyer: '',
          idTypeBuyer: '',
          idNumberBuyer: '',
          phoneNumBuyer: '',
          operateBuyer: ''
        }],
        houseMsgContainTable: 'none',
        sellerMsgContainTable: 'none',
        buyerMsgContainTable: 'none',
        shadeContain: 'none',
        tableContract: [{    //合同信息表格
          colOne: '产权证号',
          colTwo: '',
          colThree: '行政区',
          colFour: ''
        }, {
          colOne: '成交金额',
          colTwo: '',
          colThree: '税费承担方式',
          colFour: ''
        }, {
          colOne: '首付款',
          colTwo: '',
          colThree: '定金',
          colFour: ''
        }, {
          colOne: '是否公积金贷款',
          colTwo: '',
          colThree: '公积金贷款金额',
          colFour: ''
        }, {
          colOne: '是否商业贷款',
          colTwo: '',
          colThree: '商业贷款金额',
          colFour: ''
        }, {
          colOne: '是否资金监管',
          colTwo: '',
          colThree: '争议解决方式',
          colFour: ''
        }, {
          colOne: '其他约定',
          colTwo: '',
          colThree: '',
          colFour: ''
        }, {
          colOne: '是否佣金监管',
          colTwo: '否',
          colThree: '',
          colFour: ''
        }, {
          colOne: '卖方佣金金额',
          colTwo: '',
          colThree: '买方佣金金额',
          colFour: ''
        }],
        tableBrokerage: [{    //经纪机构信息表格
          colOne: '机构名称',
          colTwo: '滨州市鸿卓经纪有限公司',
          colThree: '统一社会信用代码',
          colFour: '91371600MA3DK3CB88'
        }, {
          colOne: '法定代表人',
          colTwo: '路红红',
          colThree: '身份证号',
          colFour: '372323198612070329'
        }, {
          colOne: '通讯地址',
          colTwo: '杜店街道办事处南街商住楼B座西24号',
          colThree: '邮政编码',
          colFour: '111'
        }, {
          colOne: '电子邮箱',
          colTwo: '654641651',
          colThree: '联系电话',
          colFour: '4684651654'
        }]
  	}
  },
  methods: {
  	checkHouseMsgBtn() {
  	  this.houseMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackHouse() {
  	  this.houseMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	checkSellerMsgBtn() {
  	  this.sellerMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackSeller() {
  	  this.sellerMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	checkBuyerMsgBtn() {
  	  this.buyerMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackBuyer() {
  	  this.buyerMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	arraySpanMethod({ row, column, rowIndex, columnIndex }) {    //合同信息合并列
      if(rowIndex === 6 || rowIndex === 7){
	    if(columnIndex === 1){
	      return [1, 3];
	    }
	  }
	},
    addContractCellStyle({ row, column, rowIndex, columnIndex }){    //添加合同信息单元格样式
      if(columnIndex === 0 || columnIndex === 2){
        return 'background-color: #f5f7fa;text-align: right;padding-right: 10px;'
      } 
    },
    addContractRowStyle({ row, column, rowIndex, columnIndex }){    //添加合同信息表头样式
      if(rowIndex === 0){
      	return 'display: none;'
      }
    },
    addBrokerageCellStyle({ row, column, rowIndex, columnIndex }){    //添加经纪机构信息单元格样式
      if(columnIndex === 0 || columnIndex === 2){
        return 'background-color: #f5f7fa;text-align: right;padding-right: 10px;'
      }
    },
    addBrokerageRowStyle({ row, column, rowIndex, columnIndex }){    //添加经纪机构信息表头样式
      if(rowIndex === 0){
      	return 'display: none;'
      }
    },
  }
}
</script>

<style scoped lang="less">
.top{
  .el-icon-s-platform{
	font-size: 20px;
	margin-bottom: 10px;
	margin-left: 10%;
  }
}
.navBar{
  width: 80%;
  margin: auto;
}

//深度选择器
/deep/ .el-tabs__item{
  font-weight: bold;
}
/deep/ .el-tabs__nav-scroll{
  background-color: #408be7;
}
/deep/ .el-collapse-item__header{
  background-color: #b3d9d9;
  padding-left: 10px;
}
/deep/ .el-collapse-item__header{
  font-size: 16px;
  font-weight: bold;
}
/deep/ .el-collapse-item__arrow{
  font-weight: bold;
}
/deep/ .el-button{
  padding: 8px 15px;
}
/deep/ .el-table th.gutter{
  display: table-cell!important;
}
/deep/ .el-collapse-item__header{
  background-color: #f5f7fa;
  padding-left: 10px;
}
/deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item{
  color: #fff;
}
/deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: #408be7;
}
/deep/ .el-table::before,/deep/ .el-table--border::after{
  background-color: #f3f3f3;
}
/deep/ .el-table--border{
  border-color: #f3f3f3;
}
.buyer /deep/ .el-select{
  float: right;
  width: 13%;
}
.buyer /deep/ .el-input{
  width: 100%;
}
//经纪机构表格
// .brokerageTable{
//   border-color: #f3f3f3;
//   width: 100%;
//   td{
//   	height: 42px;
//   	font-size: 16px;
//   }
//   .bgc{
//   	background-color: #e8edff;
//   	text-align: right;
//   	padding-right: 10px;
//   	width: 20%;
//   }
// }
//合同表格
.contractTable,.brokerageTable{
  border-color: #f3f3f3;
  width: 100%;
  tr{
  	td{
  	  font-size: 16px;
  	  border-color: #f3f3f3;
  	  height: 42px;
  	  width: 30%;
  	  textarea{
  	  	width: 90%;
  	  }
  	}
  	.bgc{
  	  background-color: #f5f7fa;
  	  text-align: right;
  	  width: 20%;
  	  padding-right: 10px;
  	}
  }
}
//点击查看出现的表格外层容器
.houseMsgContain,.sellerMsgContain,.buyerMsgContain{
	box-shadow: 0 0 4px 4px #9fcfff;
	border-radius: 10px;
	width: 60%;
	position: fixed;
	left: 20%;
	top: 30%;
	background-color: #fff;
	padding-left: 10px;
	padding-bottom: 10px;
	padding-right: 10px;
	z-index: 10;
	.el-button{
	  float: right;
	  margin-top: 10px;
	  margin-left: 5px;
	}
}
//点击查看出现的表格
.houseMsgTable,.sellerMsgTable,.buyerMsgTable{
  border-color: #f3f3f3;
  width: 100%;
  tr{
  	td{
  	  font-size: 16px;
  	  height: 30px;
  	  width: 30%;
  	}
  	.bgc{
  	  background-color: #f5f7fa;
  	  text-align: right;
  	  width: 20%;
  	  padding-right: 10px;
  	}
  }
}
//遮罩
.shade{
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  background-color: #fff;
  z-index: 5;
  opacity: 0.5;
}
.footer{
  width: 80%;
  margin: auto;
  margin-top: 20px;
  height: 50px;
  /deep/ .el-button{
  	float: right;
  	margin-left: 5px;
  }
}
</style>