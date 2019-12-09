<template>
  <div class="newIncreased">
	<div class="top">
	  <i class="el-icon-s-platform"></i>
	  <span>存量房网签合同新增</span>
	</div>
	<div class="navBar">
	  <el-tabs type="border-card">
	  	<el-tab-pane>
	      <span slot="label">
	      <i class="el-icon-s-operation"></i> 合同签订
	  	  </span>
	      <div class="header">
		    <!-- <span>产权证号：</span>
		    <el-input class="propRegCode" v-model="inputFour"></el-input>
		    <span>权利人姓名：</span>
		    <el-input class="proposer" v-model="inputTwo"></el-input>
		    <span>证件类型：</span>
		    <el-select v-model="idTypeValue" placeholder="请选择">
		      <el-option
		        v-for="item in idTypeOptions"
		        :key="item.idTypeValue"
		        :label="item.label"
		        :value="item.idTypeValue">
		      </el-option>
		    </el-select>
		    <span>证件号码：</span>
		    <el-input v-model="inputThree"></el-input>
		    <el-button type="primary" @click="extract">提取<i class="el-icon-upload el-icon--right"></i></el-button>
		    <br> -->
		    <span>房源查询编号：</span>
		    <el-input class="propRegCode" v-model="inputOne"></el-input>
		    <span>验证码：</span>
		    <el-input v-model="inputFive"></el-input>
		    <el-button type="primary" @click="houseExtract">房源提取<i class="el-icon-upload el-icon--right"></i></el-button>
		  </div>
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
			        width="50"
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
			        label="主房面积"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="operateHouse"
			        label="操作"
			        width="300"
			        align="center">
			        <el-button class="operate" type="success" @click="amendHouseMsgBtn" icon="el-icon-edit">修改</el-button>
			        <el-button class="operate" type="danger" icon="el-icon-delete">删除</el-button>
			        <el-button class="operate" type="primary" @click="checkHouseMsgBtn" icon="el-icon-view">查看</el-button>
			      </el-table-column>
			  	</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse v-model="sellerMsg">
			<el-collapse-item title="卖方信息" name="1">
			  <el-button class="sellIncrease" type="primary" @click="checkSellerMsgBtn">新增<i class="el-icon-plus el-icon--right"></i></el-button>
			  <template>
			    <el-table
			    :data="tableData"
			    border
			    style="width: 100%">
			      <el-table-column
			        prop="serialNumSeller"
			        label="序号"
			        width="50"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="nameSeller"
			        label="姓名"
			        width="100"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="relPersonTypeSeller"
			        label="相关人类型"
			        align="center"
			        width="100">
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
			        width="400"
			        align="center">
			        <el-button class="operate" type="success" @click="sellerAmendMsgBtn" icon="el-icon-edit">修改</el-button>
			        <el-button class="operate" type="primary" @click="sellerCheckMsgBtn" icon="el-icon-view">查看</el-button>
			        <el-button class="operate" @click="checkSellerNewMsgBtn" type="warning" icon="el-icon-plus">新增卖方代理人</el-button>
			      </el-table-column>
			  	</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse class="buyer" v-model="buyerMsg">
			<el-collapse-item title="买方信息" name="1">
			  <el-button class="sellIncrease" type="primary" @click="checkBuyerMsgBtn">新增<i class="el-icon-plus el-icon--right"></i></el-button>
			  <el-button class="sellIncrease sellSelect" type="primary" @click="checkSelectBuyerMsgBtn">选择<i class="el-icon-search el-icon--right"></i></el-button>
			  
			  <template>
				<el-select v-model="buyerMsgValue" placeholder="请选择">
				  <el-option
				    v-for="item in buyerMsgOptions"
				    :key="item.buyerMsgValue"
				    :label="item.label"
				    :value="item.buyerMsgValue">
				  </el-option>
				</el-select>
			  </template>
			  <b>共有类型</b>
			  <template>
			    <el-table
			    :data="buyerTableData"
			    border
			    style="width: 100%">
			      <el-table-column
			        prop="serialNumBuyer"
			        label="序号"
			        width="50"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="nameBuyer"
			        label="姓名"
			        width="100"
			        align="center">
			      </el-table-column>
			      <el-table-column
			        prop="relPersonTypeBuyer"
			        label="相关人类型"
			        align="center"
			        width="100">
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
			        width="400"
			        align="center">
			        <el-button class="operate" type="success" @click="buyerAmendMsgBtn" icon="el-icon-edit">修改</el-button>
			      	<el-button class="operate" type="danger" icon="el-icon-delete">删除</el-button>
			      	<el-button class="operate" type="primary" @click="buyerCheckMsgBtn" icon="el-icon-view">查看</el-button>
			     	<el-button class="operate" @click="checkBuyerNewMsgBtn" type="warning" icon="el-icon-plus">新增买方代理人</el-button>
			      </el-table-column>
			  	</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <table border="1px" cellspacing="0px" class="makeBargain">
		  	<tr>
		  	  <td class="bgc">
		  	  	<span>*</span>
		  	  	成交类型
		  	  </td>
		  	  <td>
		  	  	<template>
			      <el-select v-model="makeBargainValue" placeholder="请选择">
				  	<el-option
				      v-for="item in makeBargainOptions"
				      :key="item.makeBargainValue"
				      :label="item.label"
				      :value="item.makeBargainValue">
				    </el-option>
				  </el-select>
			    </template>
		  	  </td>
		  	  <td class="bgc">
		  	  	是否经纪机构受理
		  	  </td>
		  	  <td>
		  	  	是
		  	  </td>
		  	</tr>
		  </table>
		  <el-collapse v-model="brokerageMsg">
			<el-collapse-item title="经纪机构信息" name="1">
			  <table border="1px" cellspacing="0px" class="brokerageTable">
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
			  </table>
			</el-collapse-item>
		  </el-collapse>
		  <br>
		  <el-collapse v-model="contractMsg">
			<el-collapse-item title="合同信息" name="1">
			  <table border="1px" cellspacing="0px" class="contractTable">
			  	<tr>
			  	  <td class="bgc">
			  	  	<span>*</span>
			  	  	产权证号
			  	  </td>
			  	  <td>
			  	  	<input type="text">
			  	  </td>
			  	  <td class="bgc">
			  	  	<span>*</span>
			  	  	行政区
			  	  </td>
			  	  <td>
			  	  	<template>
				      <el-select v-model="regionValue" placeholder="请选择">
					  	<el-option
					      v-for="item in regionOptions"
					      :key="item.regionValue"
					      :label="item.label"
					      :value="item.regionValue">
					    </el-option>
					  </el-select>
				    </template>
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">
			  	  	<span>*</span>
			  	  	成交金额
			  	  </td>
			  	  <td>
			  	  	<input type="text">
			  	  	元（&yen;）
			  	  </td>
			  	  <td colspan="2"></td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">
			  	  	<span>*</span>
			  	  	首付款
			  	  </td>
			  	  <td>
			  	  	<input type="text">
			  	  	元（&yen;）
			  	  </td>
			  	  <td class="bgc">
			  	  	<span>*</span>
			  	  	定金
			  	  </td>
			  	  <td>
			  	  	<input type="text">
			  	  	元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否公积金贷款</td>
			  	  <td>
			  	  	<input type="radio" checked="" name="reserveFund">否
			  	  	<input type="radio" name="reserveFund">是
			  	  </td>
			  	  <td class="bgc">公积金贷款金额</td>
			  	  <td>
			  	  	<input type="text">
			  	  	元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否商业贷款</td>
			  	  <td>
			  	  	<input type="radio" checked="" name="businessLoan">否
			  	  	<input type="radio" name="businessLoan">是
			  	  </td>
			  	  <td class="bgc">
			  	  	商业贷款金额
			  	  </td>
			  	  <td>
			  	  	<input type="text">
			  	  	元（&yen;）
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否资金监管</td>
			  	  <td>
			  	  	<input type="radio" checked="" name="fundSupervision">否
			  	  	<input type="radio" name="fundSupervision">是
			  	  </td>
			  	  <td class="bgc">争议解决方式</td>
			  	  <td>
			  	  	<template>
				      <el-select v-model="disputeValue">
					  	<el-option
					      v-for="item in disputeOptions"
					      :key="item.disputeValue"
					      :label="item.label"
					      :value="item.disputeValue">
					    </el-option>
					  </el-select>
				    </template>
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">税费承担方式</td>
			  	  <td>
			  	  	<template>
				      <el-select v-model="taxesValue">
					  	<el-option
					      v-for="item in taxesOptions"
					      :key="item.taxesValue"
					      :label="item.label"
					      :value="item.taxesValue">
					    </el-option>
					  </el-select>
				    </template>
			  	  </td>
			  	  <td class="bgc"></td>
			  	  <td></td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">其他约定</td>
			  	  <td colspan="3">
			  	  	<textarea rows="6"></textarea>
			  	  </td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">是否佣金监管</td>
			  	  <td colspan="3">否</td>
			  	</tr>
			  	<tr>
			  	  <td class="bgc">卖方佣金金额</td>
			  	  <td>
			  	  	<input type="text">
			  	  	元（&yen;）
			  	  </td>
			  	  <td class="bgc">买方佣金金额</td>
			  	  <td>
			  	  	<input type="text">
			  	  	元（&yen;）
			  	  </td>
			  	</tr>
			  </table>
			</el-collapse-item>
		  </el-collapse>
		  <div class="sellerMsgContain" :style="{display: sellerMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增卖方
		  	</p>
		  	<table border="1px" cellspacing="0px" class="sellerMsgTable">
			  <tr>
			    <td class="bgc">卖方类型</td>
			    <td>
			      <el-select v-model="newSellerPersonTypeValue" placeholder="请选择">
				    <el-option
				      v-for="item in newSellerPersonTypeOptions"
				      :key="item.newSellerPersonTypeValue"
				      :label="item.label"
				      :value="item.newSellerPersonTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">
			  	  
			    </td>
			    <td>
			      
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">姓名</td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">相关人类型</td>
			    <td>出卖人</td>
			  </tr>
			  <tr>
			    <td class="bgc">户籍所在地(住所)</td>
			    <td>
			      <input type="text">
			    </td>
			    <td class="bgc">联系电话</td>
			    <td>
			      <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td>
			      <el-select v-model="newSellerIdTypeValue" placeholder="请选择">
				    <el-option
				      v-for="item in newSellerIdTypeOptions"
				      :key="item.newSellerIdTypeValue"
				      :label="item.label"
				      :value="item.newSellerIdTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">证件号码</td>
			    <td>
			  	  <input type="text">
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  <input type="text">
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
		    <el-button type="primary" icon="el-icon-finished" circle>保存</el-button>
		  </div>
		  <div class="sellerNewMsgContain" :style="{display: sellerNewMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增卖方代理人
		  	</p>
		  	<table border="1px" cellspacing="0px" class="sellerNewMsgTable">
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      姓名
			    </td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      相关人类型
			    </td>
			    <td>
				  <el-select v-model="newSellerNewPersonTypeValue">
				    <el-option
				      v-for="item in newSellerNewPersonTypeOptions"
				      :key="item.newSellerNewPersonTypeValue"
				      :label="item.label"
				      :value="item.newSellerNewPersonTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      户籍所在地(住所)
			    </td>
			    <td>
			      <input type="text">
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      联系电话
			    </td>
			    <td>
			      <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      证件类型
			    </td>
			    <td>
			      <el-select v-model="newSellerNewIdTypeValue">
				    <el-option
				      v-for="item in newSellerNewIdTypeOptions"
				      :key="item.newSellerNewIdTypeValue"
				      :label="item.label"
				      :value="item.newSellerNewIdTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      证件号码
			    </td>
			    <td>
			  	  <input type="text">
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <input type="text">
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
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackNewSeller">返回</el-button>
		    <el-button type="primary" icon="el-icon-finished" circle>保存</el-button>
		  </div>
		  <div class="buyerMsgContain" :style="{display: buyerMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增买方
		  	</p>
		  	<table border="1px" cellspacing="0px" class="buyerMsgTable">
			  <tr>
			    <td class="bgc">买方类型</td>
			    <td>
			      <el-select v-model="newBuyerPersonTypeValue" placeholder="请选择">
				    <el-option
				      v-for="item in newBuyerPersonTypeOptions"
				      :key="item.newBuyerPersonTypeValue"
				      :label="item.label"
				      :value="item.newBuyerPersonTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">
			  	  
			    </td>
			    <td>
			      
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">姓名</td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">相关人类型</td>
			    <td>
			  	  买受人
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">户籍所在地(住所)</td>
			    <td>
			      <input type="text">
			    </td>
			    <td class="bgc">联系电话</td>
			    <td>
			      <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td>
			      <el-select v-model="newBuyerIdTypeValue" placeholder="请选择">
				    <el-option
				      v-for="item in newBuyerIdTypeOptions"
				      :key="item.newBuyerIdTypeValue"
				      :label="item.label"
				      :value="item.newBuyerIdTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">证件号码</td>
			    <td>
			  	  <input type="text">
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">共有比例</td>
			    <td>
			  	  <input type="text">
			    </td>
			  </tr>
		    </table>
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackBuyer">返回</el-button>
		    <el-button type="primary" icon="el-icon-finished" circle>保存</el-button>
		  </div>
		  <div class="selectBuyerMsgContain" :style="{display: selectBuyerMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  选择买方
		  	</p>
		  	<template>
		  	  <div class="selectBuyerOperate">
		  	  	<el-select v-model="selectBuyerTypeValue">
				  <el-option
					v-for="item in selectBuyerTypeOptions"
					:key="item.selectBuyerTypeValue"
					:label="item.label"
					:value="item.selectBuyerTypeValue">
				  </el-option>
				</el-select>
			    <input type="text" v-model="selectIdValue">
			    <el-button @click="searchSeller" type="primary">查询<i class="el-icon-search el-icon--right"></i></el-button>
		  	  </div>
			  <el-table
			  :data="selectBuyerTableData"
			  border
			  style="width: 100%">
			    <el-table-column
			      prop="serialNumSelectBuyer"
			      label="序号"
			      width="50"
			      align="center">
			    </el-table-column>
			    <el-table-column
			      prop="nameSelectBuyer"
			      label="姓名"
			      width="100"
			      align="center">
			    </el-table-column>
			    <el-table-column
			      prop="idTypeSelectBuyer"
			      label="证件类型"
			      align="center">
			    </el-table-column>
			    <el-table-column
			      prop="idNumberSelectBuyer"
			      label="证件号码"
			      align="center">
			    </el-table-column>
			    <el-table-column
			      prop="phoneNumSelectBuyer"
			      label="联系电话"
			      align="center">
			    </el-table-column>
			    <el-table-column
			      prop="operateSelectBuyer"
			      label="操作"
			      width="150"
			      align="center">
			      <el-button class="operate" type="primary" @click="sellerSellerChooseMsgBtn" icon="el-icon-upload">选择</el-button>
			    </el-table-column>
			 </el-table>
			</template>
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackselectBuyer">返回</el-button>
		  </div>
		  <div class="houseMsgContain" :style="{display: houseMsgContainTable}">
		  	<p>
		  	  <span :style="{display: checkHousePage}">
		  	  <i class="el-icon-s-platform"></i>查看房屋</span>
		  	  <span :style="{display: amendHousePage}">
		  	  <i class="el-icon-s-platform"></i>修改房屋信息</span>
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
			      <!-- <span :style="{display: amendHousePage}">*</span> -->
			      房屋坐落
			    </td>
			    <td colspan="3" :style="{display: checkHousePage}">
			  	  滨州市黄河六路566号
			    </td>
			    <td colspan="3" :style="{display: amendHousePage}">
			      <input type="text" value="滨州市黄河六路566号">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <!-- <span :style="{display: amendHousePage}">*</span> -->
			      建筑面积
			    </td>
			    <td :style="{display: checkHousePage}">
			      100.000
			    </td>
			    <td :style="{display: amendHousePage}">
			      <input type="text" value="100.000">
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
			    <td :style="{display: checkHousePage}">
			      住宅
			    </td>
			    <td :style="{display: amendHousePage}">
			      <el-select v-model="housePurposeValue">
				    <el-option
				      v-for="item in housePurposeOptions"
				      :key="item.housePurposeValue"
				      :label="item.label"
				      :value="item.housePurposeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">
			      <!-- <span :style="{display: amendHousePage}">*</span> -->
			      房屋性质
			    </td>
			    <td :style="{display: checkHousePage}">
			  	  
			    </td>
			    <td :style="{display: amendHousePage}">
			  	  <el-select v-model="houseTypeValue">
				    <el-option
				      v-for="item in houseTypeOptions"
				      :key="item.houseTypeValue"
				      :label="item.label"
				      :value="item.houseTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			  </tr>
		    </table>
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackHouse">返回</el-button>
		    <el-button type="primary" :style="{display: amendHousePage}" icon="el-icon-finished" circle>保存</el-button>
		  </div>
		  <div class="sellerCheckMsgContain" :style="{display: sellerCheckMsgContainTable}">
		  	<p>
		  	  <span :style="{display: checkSellerPage}">
		  	  <i class="el-icon-s-platform"></i>查看卖方</span>
		  	  <span :style="{display: amendSellerPage}">
		  	  <i class="el-icon-s-platform"></i>修改卖方</span>
		  	</p>
		  	<table border="1px" cellspacing="0px" class="sellerCheckMsgTable">
			  <tr>
			    <td class="bgc">
			      卖方类型
			    </td>
			    <td :style="{display: checkSellerPage}">
			    	
			    </td>
			    <td :style="{display: amendSellerPage}">
			      <el-select v-model="sellerTypeValue">
				    <el-option
				      v-for="item in sellerTypeOptions"
				      :key="item.sellerTypeValue"
				      :label="item.label"
				      :value="item.sellerTypeValue">
				    </el-option>
				  </el-select>
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
			    <td :style="{display: checkSellerPage}">
			  	  孙建波
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <input type="text">
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
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <input type="text">
			    </td>
			    <td class="bgc">
			      联系电话
			    </td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td :style="{display: checkSellerPage}">
			    	
			    </td>
			    <td :style="{display: amendSellerPage}">
			      <el-select v-model="sellerIdTypeValue">
				    <el-option
				      v-for="item in sellerIdTypeOptions"
				      :key="item.sellerIdTypeValue"
				      :label="item.label"
				      :value="item.sellerIdTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">证件号码</td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <input type="text">
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <input type="text">
			    </td>
			    <td class="bgc">
			  	  邮政编码
			    </td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <input type="text">
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackSellerAmend">返回</el-button>
		    <el-button type="primary" :style="{display: amendSellerPage}" icon="el-icon-finished" circle>保存</el-button>
		  </div>
		  <div class="buyerNewMsgContain" :style="{display: buyerNewMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增买方代理人
		  	</p>
		  	<table border="1px" cellspacing="0px" class="buyerNewMsgTable">
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      姓名
			    </td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      相关人类型
			    </td>
			    <td>
				  <el-select v-model="newBuyerNewPersonTypeValue">
				    <el-option
				      v-for="item in newBuyerNewPersonTypeOptions"
				      :key="item.newBuyerNewPersonTypeValue"
				      :label="item.label"
				      :value="item.newBuyerNewPersonTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      户籍所在地(住所)
			    </td>
			    <td>
			      <input type="text">
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      联系电话
			    </td>
			    <td>
			      <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      证件类型
			    </td>
			    <td>
			      <el-select v-model="newBuyerNewIdTypeValue">
				    <el-option
				      v-for="item in newBuyerNewIdTypeOptions"
				      :key="item.newBuyerNewIdTypeValue"
				      :label="item.label"
				      :value="item.newBuyerNewIdTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      证件号码
			    </td>
			    <td>
			  	  <input type="text">
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  <input type="text">
			    </td>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <input type="text">
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
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackNewBuyer">返回</el-button>
		    <el-button type="primary" icon="el-icon-finished" circle>保存</el-button>
		  </div>
		  <div class="buyerCheckMsgContain" :style="{display: buyerCheckMsgContainTable}">
		  	<p>
		  	  <span :style="{display: checkBuyerPage}">
		  	  <i class="el-icon-s-platform"></i>查看买方</span>
		  	  <span :style="{display: amendBuyerPage}">
		  	  <i class="el-icon-s-platform"></i>修改买方</span>
		  	</p>
		  	<table border="1px" cellspacing="0px" class="buyerCheckMsgTable">
			  <tr>
			    <td class="bgc">
			      买方类型
			    </td>
			    <td :style="{display: checkBuyerPage}">
			    	
			    </td>
			    <td :style="{display: amendBuyerPage}">
			      <el-select v-model="buyerTypeValue">
				    <el-option
				      v-for="item in buyerTypeOptions"
				      :key="item.buyerTypeValue"
				      :label="item.label"
				      :value="item.buyerTypeValue">
				    </el-option>
				  </el-select>
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
			    <td :style="{display: checkBuyerPage}">
			  	  孙建波
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <input type="text">
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
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <input type="text">
			    </td>
			    <td class="bgc">
			      联系电话
			    </td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td :style="{display: checkBuyerPage}">
			    	
			    </td>
			    <td :style="{display: amendBuyerPage}">
			      <el-select v-model="buyerIdTypeValue">
				    <el-option
				      v-for="item in buyerIdTypeOptions"
				      :key="item.buyerIdTypeValue"
				      :label="item.label"
				      :value="item.buyerIdTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">证件号码</td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <input type="text">
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <input type="text">
			    </td>
			    <td class="bgc">
			  	  邮政编码
			    </td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <input type="text">
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <input type="text">
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="info" icon="el-icon-refresh-left" circle @click="getBackBuyerAmend">返回</el-button>
		    <el-button type="primary" :style="{display: amendBuyerPage}" icon="el-icon-finished" circle>保存</el-button>
		  </div>
		  <div class="shade" :style="{display: shadeContain}">
		  	
		  </div>
	  	</el-tab-pane>
	 	<el-tab-pane>
	      <span slot="label">
	      <i class="el-icon-s-operation"></i> 合同维护
	  	  </span>
	      合同维护
	  	</el-tab-pane>
	 	<el-tab-pane>
	      <span slot="label">
	      <i class="el-icon-s-operation"></i> 数字档案
	  	  </span>
	      数字档案
	  	</el-tab-pane>
	  </el-tabs>
	</div>
	<div class="footer">
	  <router-link to="/contractList">
	    <el-button type="info" icon="el-icon-refresh-left" circle>返回</el-button>
	  </router-link>
	  <el-button type="primary" @click="saveContract" icon="el-icon-finished" circle>保存</el-button>
	  
	</div>
  </div>
</template>

<script>
export default {
  name: 'newIncreased',
  data() {
  	return {
  	  // idTypeOptions: [{
     //      idTypeValue: '1',
     //      label: '请选择'
     //    }, {
     //      idTypeValue: '2',
     //      label: '身份证'
     //    }, {
     //      idTypeValue: '3',
     //      label: '统一社会信用代码'
     //    }, {
     //      idTypeValue: '4',
     //      label: '护照'
     //    }, {
     //      idTypeValue: '5',
     //      label: '军官证'
     //    }, {
     //      idTypeValue: '6',
     //      label: '户口薄'
     //    }, {
     //      idTypeValue: '7',
     //      label: '其他'
     //    }],
     //    idTypeValue: '1',
        newSellerIdTypeOptions: [{    //新增卖方信息页的证件类型
          newSellerIdTypeValue: '1',
          label: '身份证'
        }, {
          newSellerIdTypeValue: '2',
          label: '统一社会信用代码'
        }, {
          newSellerIdTypeValue: '3',
          label: '护照'
        }, {
          newSellerIdTypeValue: '4',
          label: '军官证'
        }, {
          newSellerIdTypeValue: '5',
          label: '户口薄'
        }, {
          newSellerIdTypeValue: '6',
          label: '其他'
        }],
        newSellerIdTypeValue: '1',
        newSellerNewIdTypeOptions: [{    //新增卖方代理人页的证件类型
          newSellerNewIdTypeValue: '1',
          label: '身份证'
        }, {
          newSellerNewIdTypeValue: '2',
          label: '统一社会信用代码'
        }, {
          newSellerNewIdTypeValue: '3',
          label: '护照'
        }, {
          newSellerNewIdTypeValue: '4',
          label: '军官证'
        }, {
          newSellerNewIdTypeValue: '5',
          label: '户口薄'
        }, {
          newSellerNewIdTypeValue: '6',
          label: '其他'
        }],
        newSellerNewIdTypeValue: '1',
        newBuyerNewIdTypeOptions: [{    //新增买方代理人页的证件类型
          newBuyerNewIdTypeValue: '1',
          label: '身份证'
        }, {
          newBuyerNewIdTypeValue: '2',
          label: '统一社会信用代码'
        }, {
          newBuyerNewIdTypeValue: '3',
          label: '护照'
        }, {
          newBuyerNewIdTypeValue: '4',
          label: '军官证'
        }, {
          newBuyerNewIdTypeValue: '5',
          label: '户口薄'
        }, {
          newBuyerNewIdTypeValue: '6',
          label: '其他'
        }],
        newBuyerNewIdTypeValue: '1',
        newBuyerIdTypeOptions: [{    //新增买方信息页的证件类型
          newBuyerIdTypeValue: '1',
          label: '身份证'
        }, {
          newBuyerIdTypeValue: '2',
          label: '统一社会信用代码'
        }, {
          newBuyerIdTypeValue: '3',
          label: '护照'
        }, {
          newBuyerIdTypeValue: '4',
          label: '军官证'
        }, {
          newBuyerIdTypeValue: '5',
          label: '户口薄'
        }, {
          newBuyerIdTypeValue: '6',
          label: '其他'
        }],
        newBuyerIdTypeValue: '1',
        newBuyerPersonTypeOptions: [{    //新增买方信息页的买方类型
          newBuyerPersonTypeValue: '1',
          label: '自然人'
        }, {
          newBuyerPersonTypeValue: '2',
          label: '法人'
        }],
        newBuyerPersonTypeValue: '1',
        newSellerPersonTypeOptions: [{    //新增卖方信息页的卖方类型
          newSellerPersonTypeValue: '1',
          label: '自然人'
        }, {
          newSellerPersonTypeValue: '2',
          label: '法人'
        }],
        newSellerPersonTypeValue: '1',
        newSellerNewPersonTypeOptions: [{    //新增卖方代理人页的相关人类型
          newSellerNewPersonTypeValue: '1',
          label: '委托人'
        }, {
          newSellerNewPersonTypeValue: '2',
          label: '法定代理人'
        }],
        newSellerNewPersonTypeValue: '1',
        newBuyerNewPersonTypeOptions: [{    //新增买方代理人页的相关人类型
          newBuyerNewPersonTypeValue: '1',
          label: '委托人'
        }, {
          newBuyerNewPersonTypeValue: '2',
          label: '法定代理人'
        }],
        newBuyerNewPersonTypeValue: '1',
        sellerTypeOptions: [{    //修改卖方信息页的卖方类型
          sellerTypeValue: '1',
          label: '自然人'
        }, {
          sellerTypeValue: '2',
          label: '法人'
        }],
        sellerTypeValue: '1',
        buyerTypeOptions: [{    //修改买方信息页的买方类型
          buyerTypeValue: '1',
          label: '自然人'
        }, {
          buyerTypeValue: '2',
          label: '法人'
        }],
        buyerTypeValue: '1',
        houseTypeOptions: [{    //修改房屋信息页的房屋性质
          houseTypeValue: '1',
          label: '商品房'
        }, {
          houseTypeValue: '2',
          label: '存量房'
        }],
        houseTypeValue: '1',
        housePurposeOptions: [{    //修改房屋信息页的房屋用途
          housePurposeValue: '1',
          label: '住宅'
        }, {
          housePurposeValue: '2',
          label: '商业'
        }, {
          housePurposeValue: '3',
          label: '综合'
        }, {
          housePurposeValue: '4',
          label: '仓库'
        }, {
          housePurposeValue: '5',
          label: '储藏室'
        }, {
          housePurposeValue: '6',
          label: '车库'
        }, {
          housePurposeValue: '7',
          label: '其他'
        }],
        housePurposeValue: '1',
        selectBuyerTypeOptions: [{    //选择买方信息的证件类型
          selectBuyerTypeValue: '1',
          label: '身份证'
        }, {
          selectBuyerTypeValue: '2',
          label: '统一社会信用代码'
        }, {
          selectBuyerTypeValue: '3',
          label: '护照'
        }, {
          selectBuyerTypeValue: '4',
          label: '军官证'
        }, {
          selectBuyerTypeValue: '5',
          label: '户口薄'
        }, {
          selectBuyerTypeValue: '6',
          label: '其他'
        }],
        selectBuyerTypeValue: '1',
        sellerIdTypeOptions: [{    //修改卖方信息页的证件类型
          sellerIdTypeValue: '1',
          label: '身份证'
        }, {
          sellerIdTypeValue: '2',
          label: '统一社会信用代码'
        }, {
          sellerIdTypeValue: '3',
          label: '护照'
        }, {
          sellerIdTypeValue: '4',
          label: '军官证'
        }, {
          sellerIdTypeValue: '5',
          label: '户口薄'
        }, {
          sellerIdTypeValue: '6',
          label: '其他'
        }],
        sellerIdTypeValue: '1',
        buyerIdTypeOptions: [{    //修改买方信息页的证件类型
          buyerIdTypeValue: '1',
          label: '身份证'
        }, {
          buyerIdTypeValue: '2',
          label: '统一社会信用代码'
        }, {
          buyerIdTypeValue: '3',
          label: '护照'
        }, {
          buyerIdTypeValue: '4',
          label: '军官证'
        }, {
          buyerIdTypeValue: '5',
          label: '户口薄'
        }, {
          buyerIdTypeValue: '6',
          label: '其他'
        }],
        buyerIdTypeValue: '1',
        inputOne: '',    //头部的房源查询编号
        // inputTwo: '',    
        // inputThree: '',
        // inputFour: '',
        inputFive: '',    //头部的验证码
        houseMsg: ['1'],    //房屋信息默认展开
        sellerMsg: ['1'],    //卖方信息默认展开
        buyerMsg: ['1'],    //买方信息默认展开
        brokerageMsg: ['1'],    //经纪机构信息默认展开
        contractMsg: ['1'],    //合同信息默认展开
        tableData: [],    //房源提取后房屋信息和卖方的信息
        selectBuyerTableData: [],    //买方选择中点击搜索按钮出现的信息
        buyerTableData: [],    //买方选择后的买方信息
        buyerMsgOptions: [{    //买方信息的共有类型
          buyerMsgValue: '1',
          label: '单独所有'
        }, {
          buyerMsgValue: '2',
          label: '共同所有'
        }, {
          buyerMsgValue: '3',
          label: '按份共有'
        }, {
          buyerMsgValue: '4',
          label: '其他'
        }],
        buyerMsgValue: '1',
        makeBargainOptions: [{    //经纪机构信息上面的成交类型
          makeBargainValue: '1',
          label: '中介成交'
        }, {
          makeBargainValue: '2',
          label: '自行成交'
        }],
        makeBargainValue: '1',
        regionOptions: [{    //合同信息的行政区选择
          regionValue: '1',
          label: '请选择'
        }, {
          regionValue: '2',
          label: '日照市'
        }, {
          regionValue: '3',
          label: '聊城市'
        }, {
          regionValue: '4',
          label: '东昌府区'
        }, {
          regionValue: '5',
          label: '聊城市开发区'
        }, {
          regionValue: '6',
          label: '度假区'
        }, {
          regionValue: '7',
          label: '阳谷县'
        }, {
          regionValue: '8',
          label: '莘县'
        }, {
          regionValue: '9',
          label: '茌平县'
        }, {
          regionValue: '10',
          label: '东阿县'
        }, {
          regionValue: '11',
          label: '冠县'
        }, {
          regionValue: '12',
          label: '高唐县'
        }, {
          regionValue: '13',
          label: '临清县'
        }, {
          regionValue: '14',
          label: '滨州市'
        }, {
          regionValue: '15',
          label: '滨城区'
        }, {
          regionValue: '16',
          label: '开发区'
        }, {
          regionValue: '17',
          label: '高新区'
        }, {
          regionValue: '18',
          label: '北海新区'
        }, {
          regionValue: '19',
          label: '沾化区'
        }, {
          regionValue: '20',
          label: '滨北工业园'
        }, {
          regionValue: '21',
          label: '滨城东区'
        }, {
          regionValue: '22',
          label: '滨城中区'
        }],
        regionValue: '1',
        disputeOptions: [{    //合同信息的争议解决方式
          disputeValue: '1',
          label: '仲裁'
        }, {
          disputeValue: '2',
          label: '诉讼'
        }],
        disputeValue: '1',
        taxesOptions: [{    //合同信息的税费承担
          taxesValue: '1',
          label: '买方承担'
        }, {
          taxesValue: '2',
          label: '卖方承担'
        }, {
          taxesValue: '3',
          label: '其他约定'
        }],
        taxesValue: '1',    //提取按钮模拟输入产权证号
        sellerMsgContainTable: 'none',    //点击卖方新增
        sellerNewMsgContainTable: 'none',    //房源提取后点击新增卖方代理人
        buyerNewMsgContainTable: 'none',    //点击买方新增
        buyerMsgContainTable: 'none',    //选择买方后点击新增买方代理人
        selectBuyerMsgContainTable: 'none',    //点击买方选择按钮
        houseMsgContainTable: 'none',    //房源提取后点击房屋信息查看或者修改
        amendHousePage: '',    //房源提取后点击修改房屋信息出现的样式
        checkHousePage: '',    //房源提取后点击查看房屋信息出现的样式
        amendSellerPage: '',    //房源提取后点击修改卖方出现的样式
        amendBuyerPage: '',    //选择买方后点击修改卖方出现的样式
        checkSellerPage: '',    //房源提取后点击查看卖方出现的样式
        checkBuyerPage: '',    //选择买方后点击查看卖方出现的样式
        sellerCheckMsgContainTable: 'none',    //房源提取后点击修改或查看卖方出现的信息
        buyerCheckMsgContainTable: 'none',    //选择买方后点击修改或查看按钮出现的信息
        shadeContain: 'none',    //遮罩
        selectIdValue: ''    //点击买方选择按钮模拟查询证件号的值
  	}
  },
  methods: {
  	saveContract() {    //保存按钮
  	  if(this.regionValue == 1) {
  	  	alert('请选择所属行政区')
  	  }
  	},
  	// extract() {    //提取按钮
  	//   if(!this.inputFour) {
  	//   	alert('不动产权证号不能为空！')
  	//   } else if(this.inputFour && !this.inputTwo || !this.inputThree || this.idTypeValue == 1) {
  	//   	alert('提取条件不能为空')
  	//   }
  	// },
  	houseExtract() {    //房源提取按钮
      if(!this.inputOne) {
      	alert('房源查询编号不能为空！')
      } else if(this.inputOne && !this.inputFive) {
      	alert('提取条件不能为空')
      } else {
      	this.tableData=[{
          serialNumHouse: '1',
          houseLocationHouse: '1',
          coverAreaHouse: '',
          mainHouseAreaHouse: '1',
          operateHouse: '',
          serialNumSeller: '',
          nameSeller: '',
          relPersonTypeSeller: '',
          idTypeSeller: '1',
          idNumberSeller: '',
          phoneNumSeller: '1',
          operateSeller: ''
        }]
      }
  	},
  	checkSellerMsgBtn() {    //点击卖方新增按钮
  	  this.sellerMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackSeller() {
  	  this.sellerMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	checkSellerNewMsgBtn() {    //点击卖方新增代理人按钮
  	  this.sellerNewMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackNewSeller() {
  	  this.sellerNewMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	checkBuyerMsgBtn() {    //点击买方新增按钮
  	  this.buyerMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackBuyer() {
  	  this.buyerMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	checkSelectBuyerMsgBtn() {    //点击买方选择按钮
  	  this.selectBuyerMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackselectBuyer() {
  	  this.selectBuyerMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	checkHouseMsgBtn() {    //房源提取完毕后点击房屋信息的查看按钮
  	  this.houseMsgContainTable = 'block';
  	  this.checkHousePage = 'table-cell';
  	  this.amendHousePage = 'none';
  	  this.shadeContain = 'block';
  	},
  	getBackHouse() {
  	  this.houseMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	amendHouseMsgBtn() {    //房源提取完毕后点击房屋信息的修改按钮
  	  this.houseMsgContainTable = 'block';
  	  this.checkHousePage = 'none';
  	  this.amendHousePage = 'table-cell';
  	  this.shadeContain = 'block';
  	},
  	getBackHouse() {
  	  this.houseMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	sellerCheckMsgBtn() {    //房源提取完毕后点击卖方查看按钮
  	  this.sellerCheckMsgContainTable = 'block';
  	  this.checkSellerPage = 'table-cell';
  	  this.amendSellerPage = 'none';
  	  this.shadeContain = 'block';
  	},
  	getBackSellerCheck() {
  	  this.sellerCheckMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	sellerAmendMsgBtn() {    //房源提取完毕后点击卖方修改按钮
  	  this.sellerCheckMsgContainTable = 'block';
  	  this.checkSellerPage = 'none';
  	  this.amendSellerPage = 'table-cell';
  	  this.shadeContain = 'block';
  	},
  	getBackSellerAmend() {
  	  this.sellerCheckMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	searchSeller() {    //点击选择买方按钮后的查询按钮
  	  if(!this.selectIdValue) {
  	  	alert('证件号码为空')
  	  } else {
  	  	this.selectBuyerTableData = [{
          serialNumSelectBuyer: '11',
          nameSelectBuyer: '',
          relPersonTypeSelectBuyer: '',
          idTypeSelectBuyer: '',
          idNumberSelectBuyer: '21',
          phoneNumSelectBuyer: '',
          operateSelectBuyer: ''
        }]
  	  }
  	},
  	sellerSellerChooseMsgBtn() {    ////点击选择买方按钮后的查询按钮后出现的选择按钮
  	  console.log(this.buyerTableData);
  	  this.selectBuyerMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	  this.buyerTableData = [{
  	  	serialNumBuyer: '',
        nameBuyer: '',
        relPersonTypeBuyer: '',
        idTypeBuyer: '1',
        idNumberBuyer: '',
        phoneNumBuyer: '1',
        operateBuyer: ''
  	  }]
  	},
  	buyerAmendMsgBtn() {    //选择买方信息完毕后点击买方修改按钮
  	  this.buyerCheckMsgContainTable = 'block';
  	  this.checkBuyerPage = 'none';
  	  this.amendBuyerPage = 'table-cell';
  	  this.shadeContain = 'block';
  	},
  	getBackBuyerAmend() {
  	  this.buyerCheckMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	buyerCheckMsgBtn() {    //选择买方信息完毕后点击买方查看按钮
  	  this.buyerCheckMsgContainTable = 'block';
  	  this.checkBuyerPage = 'table-cell';
  	  this.amendBuyerPage = 'none';
  	  this.shadeContain = 'block';
  	},
  	getBackBuyerCheck() {
  	  this.buyerCheckMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
  	checkBuyerNewMsgBtn() {    //选择买方信息完毕后点击买方新增代理人按钮
  	  this.buyerNewMsgContainTable = 'block';
  	  this.shadeContain = 'block';
  	},
  	getBackNewBuyer() {
  	  this.buyerNewMsgContainTable = 'none';
  	  this.shadeContain = 'none';
  	},
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
.header{
  margin-bottom: 5px;
  .el-select{
	width: 12%;
  }
  .el-input{
	display: inline-block;
	width: 12%;
  }
  .proposer{
	width: 6%;
  }
  .propRegCode{
	width: 20%;
  }
  .el-button{
	padding: 12px 15px;
    margin: 0px;
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
/deep/ .operate{
  padding: 5px 5px;
}
/deep/ .el-collapse-item__header{
  font-size: 16px;
  font-weight: bold;
}
/deep/ .el-collapse-item__arrow{
  font-weight: bold;
}
/deep/ .sellIncrease{
  float: right;
}
.buyer{
  /deep/ .el-select{
    float: right;
    width: 13%;
  }
  /deep/ .el-input{
    width: 100%;
  }
  b{
    float: right;
    margin-top: 6px;
    font-size: 16px;
    margin-right: 5px;
  }
  /deep/ .sellSelect{
  	margin-right: 5px; 
  }
}
//选择买方操作框按钮
.selectBuyerOperate{   
  input{
  	height: 23px;
  }
  /deep/ .el-select{
  	width: 150px;
  	margin-left: 35%;
  }
  /deep/ .el-input__inner{
	height: 30px;
  }
  /deep/ .el-input__suffix{
  	padding-top: 5px;
  }
  /deep/ .el-button{
  	padding: 7px 10px;
  }
}
//经纪机构上面经纪机构及合同信息仨表格
.makeBargain,.brokerageTable,.contractTable{    
  border-color: #f3f3f3;
  width: 100%;
  tr{
  	td{
  	  font-size: 16px;
  	  height: 42px;
  	  width: 30%;
  	  span{
  	  	color: red;
  	  }
  	  textarea{
  	  	width: 90%;
  	  }
  	  /deep/ .el-input{
  	  	width: 60%;
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
.houseMsgContain,.sellerMsgContain,.sellerNewMsgContain,
.buyerNewMsgContain,.buyerMsgContain,.selectBuyerMsgContain,
.sellerCheckMsgContain,.buyerCheckMsgContain{
	// border: 2px solid #409eff;
	box-shadow: 0 0 5px 5px #9fcfff;
	border-radius: 10px;
	width: 60%;
	position: fixed;
	left: 20%;
	top: 30%;
	background-color: #fff;
	z-index: 10;
	.el-button{
	  float: right;
	}
}
//点击查看出现的表格
.houseMsgTable,.sellerMsgTable,.sellerNewMsgTable,.buyerNewMsgTable,
.buyerMsgTable,.sellerCheckMsgTable,.buyerCheckMsgTable{
  border-color: #f3f3f3;
  width: 100%;
  tr{
  	td{
  	  font-size: 16px;
  	  height: 30px;
  	  // border: 1px solid red;
  	  textarea{
  	  	width: 90%;
  	  }
  	}
  	.bgc{
  	  background-color: #e8edff;
  	  text-align: right;
  	  width: 20%;
  	  padding-right: 10px;
  	}
  	span{
  	  color: red;
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
//底部返回按钮
.footer{
  margin-top: 10px;
  /deep/ .el-button{
  	float: right;
  }
}
</style>