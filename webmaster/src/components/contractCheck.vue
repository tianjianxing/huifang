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
			  <table border="1px" cellspacing="0px" class="brokerageTable">
			  	<tr>
			  	  <td class="bgc">是否经纪机构受理</td>
			  	  <td colspan="3">是</td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">机构名称</td>
			  	  <td>滨州市鸿卓经纪有限公司</td>
			  	  <td class="bgc">统一社会信用代码</td>
			  	  <td>91371600MA3DK3CB88</td>
			  	</tr>
			  	<tr>
			      <td class="bgc">法定代表人</td>
			      <td>路红红</td>
			      <td class="bgc">身份证号</td>
			      <td>372323198612070329</td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">通讯地址</td>
			  	  <td>杜店街道办事处南街商住楼B座西24号</td>
			  	  <td class="bgc">邮政编码</td>
			  	  <td>111</td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">电子邮箱</td>
			  	  <td>222</td>
			  	  <td class="bgc">联系电话</td>
			  	  <td>18754326658</td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">房产经纪人</td>
			  	  <td>张三</td>
			  	  <td class="bgc">经纪人资格证</td>
			  	  <td>鲁18754326658</td>
			  	</tr>
			  </table>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse v-model="contractMsg">
			<el-collapse-item title="合同信息" name="1">
			  <table border="1px" cellspacing="0px" class="contractTable">
			  	<tr>
			  	  <td class="bgc">
			  	  	成交类型
			  	  </td>
			  	  <td colspan="3">
			  	  	中介成交
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">
			  	  	产权证号
			  	  </td>
			  	  <td>
			  	  	2011110798
			  	  </td>
			  	  <td class="bgc">
			  	  	行政区
			  	  </td>
			  	  <td>
			  	  	滨州市
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">
			  	  	成交金额
			  	  </td>
			  	  <td colspan="3">
			  	  	123123.00元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">
			  	  	首付款
			  	  </td>
			  	  <td>
			  	  	0.00元（&yen;）
			  	  </td>
			  	  <td class="bgc">
			  	  	定金
			  	  </td>
			  	  <td>
			  	  	0.00元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否公积金贷款</td>
			  	  <td>
			  	  	否
			  	  </td>
			  	  <td class="bgc">公积金贷款金额</td>
			  	  <td>
			  	  	0.00元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否商业贷款</td>
			  	  <td>
			  	  	否
			  	  </td>
			  	  <td class="bgc">
			  	  	商业贷款金额
			  	  </td>
			  	  <td>
			  	  	0.00元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否资金监管</td>
			  	  <td colspan="3">
			  	  	否
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否佣金监管</td>
			  	  <td colspan="3">否</td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">卖方佣金金额</td>
			  	  <td>
			  	  	元（&yen;）
			  	  </td>
			  	  <td class="bgc">买方佣金金额</td>
			  	  <td>
			  	  	元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">税费承担方式</td>
			  	  <td>
			  	  	买方承担
			  	  </td>
			  	  <td class="bgc">争议解决方式</td>
			  	  <td>
			  	  	仲裁
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">其他约定</td>
			  	  <td colspan="3">
			  	  	1234567890
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">退回原因</td>
			  	  <td colspan="3">11111111</td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">撤销原因</td>
			  	  <td colspan="3">11111111</td>
			  	</tr>
			  </table>
			</el-collapse-item>
		  </el-collapse>
		  <div class="houseMsgContain" :style="{display: houseMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  查看房屋
		  	</p>
		  	<table border="1px" cellspacing="0px" class="houseMsgTable">
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
			      房屋坐落
			    </td>
			    <td colspan="3">
			  	  滨州市黄河六路566号
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">建筑面积</td>
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
		        <td class="bgc">房屋用途</td>
			    <td>
			      住宅
			    </td>
			    <td class="bgc">房屋性质</td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackHouse">返回</el-button>
		  </div>
		  <div class="sellerMsgContain" :style="{display: sellerMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  查看卖方
		  	</p>
		  	<table border="1px" cellspacing="0px" class="sellerMsgTable">
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
			      身份证
			    </td>
			    <td class="bgc">证件号码</td>
			    <td>
			  	  444544164654154
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  
			    </td>
			    <td class="bgc">
			  	  通讯地址
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
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackSeller">返回</el-button>
		  </div>
		  <div class="buyerMsgContain" :style="{display: buyerMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  查看买方
		  	</p>
		  	<table border="1px" cellspacing="0px" class="buyerMsgTable">
			  <tr>
			    <td class="bgc">
			      买方类型
			    </td>
			    <td>
			      自然人
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
			  	  12e1
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
			      212
			    </td>
			    <td class="bgc">
			      联系电话
			    </td>
			    <td>
			      11111
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td>
			      其他
			    </td>
			    <td class="bgc">证件号码</td>
			    <td>
			  	  6846516565456
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  13
			    </td>
			    <td class="bgc">
			  	  通讯地址
			    </td>
			    <td>
			  	  12
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  85
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackBuyer">返回</el-button>
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
	    <el-button type="info" icon="el-icon-refresh-left" circle>返回</el-button>
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
        shadeContain: 'none'
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
  	}
  }
}
</script>

<style scoped lang="less">
.top{
  .el-icon-s-platform{
	font-size: 20px;
	margin-bottom: 10px;
  }
}

//深度选择器
/deep/ .el-tabs__item{
  font-weight: bold;
}
/deep/ .el-tabs__nav-scroll{
  background-color: #22678d;
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
  	  height: 42px;
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
	// border: 2px solid #409eff;
	box-shadow: 0 0 5px 5px #9fcfff;
	width: 60%;
	position: fixed;
	border-radius: 10px;
	left: 20%;
	top: 30%;
	background-color: #fff;
	z-index: 10;
	.el-button{
	  float: right;
	  margin-top: 5px;
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
  margin-top: 10px;
  /deep/ .el-button{
  	float: right;
  }
}
</style>