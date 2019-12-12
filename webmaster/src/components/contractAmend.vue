<template>
  <div class="newIncreased">
	<div class="top">
	  <i class="el-icon-s-platform"></i>
	  <span>存量房网签合同修改</span>
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
		  <template>
		    <el-table
		      :data="houseStatus"
			  border
			  :cell-style="addHouseStatusCellStyle"
			  :header-row-style="addHouseStatusRowStyle"
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
			  <el-table-column
			    prop="colFive"
				width="170">
			  </el-table-column>
			  <el-table-column
			    prop="colSix"
				width="">
			  </el-table-column>
			</el-table>
		  </template>
		  <br>
		  <el-collapse v-model="sellerMsg">
			<el-collapse-item title="卖方信息" name="1">
			<div class="msgBottomBtn">
			  <el-button class="sellIncrease" type="primary" @click="checkSellerMsgBtn">新增<i class="el-icon-plus el-icon--right"></i></el-button>
			</div>
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
			        prop="nameSellerShow"
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
			<div class="msgBottomBtn">
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
			</div>
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
			        prop="nameBuyerShow"
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
		  <template>
		    <el-table
		      :data="makeBargain"
			  border
			  :cell-style="addMakeBrokerageCellStyle"
			  :header-row-style="addMakeBrokerageRowStyle"
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
					<template slot-scope="scope">
			          <el-input v-model="propRegCode" v-if="scope.row.colOne == '产权证号'">
			          </el-input>
			          <el-input v-model="totalAmount" v-else-if="scope.row.colOne == '成交金额'">
			          </el-input>
			          <el-input v-model="downPaymentAmount" v-else-if="scope.row.colOne == '首付款'">
			          </el-input>
			          <el-input v-model="sellerCommAmount" v-else-if="scope.row.colOne == '卖方佣金金额'">
			          </el-input>
			          <el-input v-model="otherStipulation" type="textarea" v-else-if="scope.row.colOne == '其他约定'">
			          </el-input>
			          <el-radio v-model="isProvidentFund" v-if="scope.row.colOne == '是否公积金贷款'" label="1">否</el-radio>
  					  <el-radio v-model="isProvidentFund" v-if="scope.row.colOne == '是否公积金贷款'" label="2">是</el-radio>
  					  <el-radio v-model="isBusLoan" v-if="scope.row.colOne == '是否商业贷款'" label="1">否</el-radio>
  					  <el-radio v-model="isBusLoan" v-if="scope.row.colOne == '是否商业贷款'" label="2">是</el-radio>
  					  <el-radio v-model="isCapitalSupervision" v-if="scope.row.colOne == '是否资金监管'" label="1">否</el-radio>
  					  <el-radio v-model="isCapitalSupervision" v-if="scope.row.colOne == '是否资金监管'" label="2">是</el-radio>
			          <span v-if="scope.row.colOne == '成交金额'">元（&yen;）</span>
					  <span v-else-if="scope.row.colOne == '是否佣金监管'">否</span>
			          <span v-else-if="scope.row.colOne == '首付款'">元（&yen;）</span>
			          <span v-else-if="scope.row.colOne == '卖方佣金金额'">元（&yen;）</span>
			        </template>
				  </el-table-column>
				  <el-table-column
				    prop="colThree"
				    width="170">
				  </el-table-column>
				  <el-table-column
				    prop="colFour"
				    width="">
				    <template slot-scope="scope">
				      <el-select v-if="scope.row.colThree == '行政区'" v-model="regionValue" placeholder="请选择">
					  	<el-option
					      v-for="item in regionOptions"
					      :key="item.regionValue"
					      :label="item.label"
					      :value="item.regionValue">
					    </el-option>
					  </el-select>
					  <el-select v-else-if="scope.row.colThree == '税费承担方式'" v-model="taxesValue">
					  	<el-option
					      v-for="item in taxesOptions"
					      :key="item.taxesValue"
					      :label="item.label"
					      :value="item.taxesValue">
					    </el-option>
					  </el-select>
					  <el-select v-else-if="scope.row.colThree == '争议解决方式'" v-model="disputeValue">
					  	<el-option
					      v-for="item in disputeOptions"
					      :key="item.disputeValue"
					      :label="item.label"
					      :value="item.disputeValue">
					    </el-option>
					  </el-select>
					  <el-input v-model="earnestAmount" v-if="scope.row.colThree == '定金'">
			          </el-input>
			          <el-input v-model="providentFundAmount" v-else-if="scope.row.colThree == '公积金贷款金额'">
			          </el-input>
			          <el-input v-model="busLoanAmount" v-else-if="scope.row.colThree == '商业贷款金额'">
			          </el-input>
			          <el-input v-model="buyerCommAmount" v-else-if="scope.row.colThree == '买方佣金金额'">
			          </el-input>
				      <span v-if="scope.row.colThree == '定金'">元（&yen;）</span>
				      <span v-else-if="scope.row.colThree == '公积金贷款金额'">元（&yen;）</span>
				      <span v-else-if="scope.row.colThree == '商业贷款金额'">元（&yen;）</span>
				      <span v-else-if="scope.row.colThree == '买方佣金金额'">元（&yen;）</span>
			        </template>
				  </el-table-column>
				</el-table>
			  </template>
			</el-collapse-item>
		  </el-collapse>
		  <div class="sellerMsgContain" :style="{display: sellerMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增卖方
		  	</p>
		  	<table cellspacing="0px" class="sellerMsgTable">
			  <tr>
			    <td class="bgc">卖方类型</td>
			    <td>
			      <el-select style="width: 100%;" v-model="newSellerPersonTypeValue" placeholder="请选择">
				    <el-option
				      v-for="item in newSellerPersonTypeOptions"
				      :key="item.newSellerPersonTypeValue"
				      :label="item.label"
				      :value="item.newSellerPersonTypeValue">
				    </el-option>
				  </el-select>
			    </td>
			    <td class="bgc">
			  	  联系电话
			    </td>
			    <td>
			      <el-input v-model="phoneSeller"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">姓名</td>
			    <td>
			  	  <el-input v-model="nameSeller"></el-input>
			    </td>
			    <td class="bgc">相关人类型</td>
			    <td>出卖人</td>
			  </tr>
			  <tr>
			    <td class="bgc">户籍所在地(住所)</td>
			    <td>
			      <el-input v-model="placeSeller"></el-input>
			    </td>
			    <td class="bgc">通讯地址</td>
			    <td>
			      <el-input v-model="addressSeller"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td>
			      <el-select style="width: 100%;" v-model="newSellerIdTypeValue" placeholder="请选择">
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
			  	  <el-input v-model="certCodeSeller"></el-input>
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <el-input v-model="postalcodeSeller"></el-input>
			    </td>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  <el-input v-model="emailSeller"></el-input>
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackSeller">返回</el-button>
		    <el-button type="primary" icon="el-icon-finished">保存</el-button>
		  </div>
		  <div class="sellerNewMsgContain" :style="{display: sellerNewMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增卖方代理人
		  	</p>
		  	<table cellspacing="0px" class="sellerNewMsgTable">
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      姓名
			    </td>
			    <td>
			  	  <el-input v-model="nameSellerNew"></el-input>
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      相关人类型
			    </td>
			    <td>
				  <el-select style="width: 100%;" v-model="newSellerNewPersonTypeValue">
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
			      <el-input v-model="placeSellerNew"></el-input>
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      联系电话
			    </td>
			    <td>
			      <el-input v-model="phoneSellerNew"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      证件类型
			    </td>
			    <td>
			      <el-select style="width: 100%;" v-model="newSellerNewIdTypeValue">
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
			  	  <el-input v-model="certCodeSellerNew"></el-input>
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  <el-input v-model="addressSellerNew"></el-input>
			    </td>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <el-input v-model="postalcodeSellerNew"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  <el-input v-model="emailSellerNew"></el-input>
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackNewSeller">返回</el-button>
		    <el-button type="primary" icon="el-icon-finished">保存</el-button>
		  </div>
		  <div class="buyerMsgContain" :style="{display: buyerMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增买方
		  	</p>
		  	<table cellspacing="0px" class="buyerMsgTable">
			  <tr>
			    <td class="bgc">买方类型</td>
			    <td>
			      <el-select style="width: 100%;" v-model="newBuyerPersonTypeValue" placeholder="请选择">
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
			  	  <el-input v-model="nameBuyer"></el-input>
			    </td>
			    <td class="bgc">相关人类型</td>
			    <td>
			  	  买受人
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">户籍所在地(住所)</td>
			    <td>
			      <el-input v-model="placeBuyer"></el-input>
			    </td>
			    <td class="bgc">联系电话</td>
			    <td>
			      <el-input v-model="phoneBuyer"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td>
			      <el-select style="width: 100%;" v-model="newBuyerIdTypeValue" placeholder="请选择">
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
			  	  <el-input v-model="certCodeBuyer"></el-input>
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <el-input v-model="postalcodeBuyer"></el-input>
			    </td>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  <el-input v-model="addressBuyer"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  <el-input v-model="emailBuyer"></el-input>
			    </td>
			    <td class="bgc">共有比例</td>
			    <td>
			  	  <el-input v-model="rightsShare"></el-input>
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackBuyer">返回</el-button>
		    <el-button type="primary" icon="el-icon-finished">保存</el-button>
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
			    <!-- <input type="text" v-model="selectIdValue"> -->
			    <el-input v-model="selectIdValue"></el-input>
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
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackselectBuyer">返回</el-button>
		  </div>
		  <div class="houseMsgContain" :style="{display: houseMsgContainTable}">
		  	<p>
		  	  <span :style="{display: checkHousePage}">
		  	  <i class="el-icon-s-platform"></i>查看房屋</span>
		  	  <span :style="{display: amendHousePage}">
		  	  <i class="el-icon-s-platform"></i>修改房屋信息</span>
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
			    <td colspan="3" :style="{display: checkHousePage}">
			  	  滨州市黄河六路566号
			    </td>
			    <td colspan="3" :style="{display: amendHousePage}">
			      <el-input style="width: 63%;" value="滨州市黄河六路566号"></el-input>
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
			      <el-input value="100.000"></el-input>
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
			      <el-select style="width: 100%;" v-model="housePurposeValue">
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
			  	  <el-select style="width: 100%;" v-model="houseTypeValue">
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
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackHouse">返回</el-button>
		    <el-button type="primary" :style="{display: amendHousePage}" icon="el-icon-finished">保存</el-button>
		  </div>
		  <div class="sellerCheckMsgContain" :style="{display: sellerCheckMsgContainTable}">
		  	<p>
		  	  <span :style="{display: checkSellerPage}">
		  	  <i class="el-icon-s-platform"></i>查看卖方</span>
		  	  <span :style="{display: amendSellerPage}">
		  	  <i class="el-icon-s-platform"></i>修改卖方</span>
		  	</p>
		  	<table cellspacing="0px" class="sellerCheckMsgTable">
			  <tr>
			    <td class="bgc">
			      卖方类型
			    </td>
			    <td :style="{display: checkSellerPage}">
			    	
			    </td>
			    <td :style="{display: amendSellerPage}">
			      <el-select style="width: 100%;" v-model="sellerTypeValue">
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
			  	  <el-input v-model="nameAmendSeller"></el-input>
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
			  	  <el-input v-model="placeAmendSeller"></el-input>
			    </td>
			    <td class="bgc">
			      联系电话
			    </td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <el-input v-model="phoneAmendSeller"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td :style="{display: checkSellerPage}">
			    	
			    </td>
			    <td :style="{display: amendSellerPage}">
			      <el-select style="width: 100%;" v-model="sellerIdTypeValue">
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
			  	  <el-input v-model="certCodeAmendSeller"></el-input>
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <el-input v-model="addressAmendSeller"></el-input>
			    </td>
			    <td class="bgc">
			  	  邮政编码
			    </td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <el-input v-model="postalcodeAmendSeller"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td :style="{display: checkSellerPage}">
			  	  
			    </td>
			    <td :style="{display: amendSellerPage}">
			  	  <el-input v-model="emailAmendSeller"></el-input>
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackSellerAmend">返回</el-button>
		    <el-button type="primary" :style="{display: amendSellerPage}" icon="el-icon-finished">保存</el-button>
		  </div>
		  <div class="buyerNewMsgContain" :style="{display: buyerNewMsgContainTable}">
		  	<p>
		  	  <i class="el-icon-s-platform"></i>
		  	  新增买方代理人
		  	</p>
		  	<table cellspacing="0px" class="buyerNewMsgTable">
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      姓名
			    </td>
			    <td>
			  	  <el-input v-model="nameBuyerNew"></el-input>
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      相关人类型
			    </td>
			    <td>
				  <el-select style="width: 100%;" v-model="newBuyerNewPersonTypeValue">
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
			      <el-input v-model="placeBuyerNew"></el-input>
			    </td>
			    <td class="bgc">
			      <span>*</span>
			      联系电话
			    </td>
			    <td>
			      <el-input v-model="phoneBuyerNew"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">
			      <span>*</span>
			      证件类型
			    </td>
			    <td>
			      <el-select style="width: 100%;" v-model="newBuyerNewIdTypeValue">
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
			  	  <el-input v-model="certCodeBuyerNew"></el-input>
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td>
			  	  <el-input v-model="addressBuyerNew"></el-input>
			    </td>
			    <td class="bgc">邮政编码</td>
			    <td>
			  	  <el-input v-model="postalcodeBuyerNew"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td>
			  	  <el-input v-model="emailBuyerNew"></el-input>
			    </td>
			    <td class="bgc"></td>
			    <td>
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackNewBuyer">返回</el-button>
		    <el-button type="primary" icon="el-icon-finished">保存</el-button>
		  </div>
		  <div class="buyerCheckMsgContain" :style="{display: buyerCheckMsgContainTable}">
		  	<p>
		  	  <span :style="{display: checkBuyerPage}">
		  	  <i class="el-icon-s-platform"></i>查看买方</span>
		  	  <span :style="{display: amendBuyerPage}">
		  	  <i class="el-icon-s-platform"></i>修改买方</span>
		  	</p>
		  	<table cellspacing="0px" class="buyerCheckMsgTable">
			  <tr>
			    <td class="bgc">
			      买方类型
			    </td>
			    <td :style="{display: checkBuyerPage}">
			    	
			    </td>
			    <td :style="{display: amendBuyerPage}">
			      <el-select style="width: 100%;" v-model="buyerTypeValue">
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
			  	  <el-input v-model="nameAmendBuyer"></el-input>
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
			  	  <el-input v-model="placeAmendBuyer"></el-input>
			    </td>
			    <td class="bgc">
			      联系电话
			    </td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <el-input v-model="phoneAmendBuyer"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">证件类型</td>
			    <td :style="{display: checkBuyerPage}">
			    	
			    </td>
			    <td :style="{display: amendBuyerPage}">
			      <el-select style="width: 100%;" v-model="buyerIdTypeValue">
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
			  	  <el-input v-model="certCodeAmendBuyer"></el-input>
			    </td>
		      </tr>
			  <tr>
			    <td class="bgc">通讯地址</td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <el-input v-model="addressAmendBuyer"></el-input>
			    </td>
			    <td class="bgc">
			  	  邮政编码
			    </td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <el-input v-model="postalcodeAmendBuyer"></el-input>
			    </td>
			  </tr>
			  <tr>
			    <td class="bgc">电子邮箱</td>
			    <td :style="{display: checkBuyerPage}">
			  	  
			    </td>
			    <td :style="{display: amendBuyerPage}">
			  	  <el-input v-model="emailAmendBuyer"></el-input>
			    </td>
			    <td class="bgc"></td>
			    <td>
			  	  
			    </td>
			  </tr>
		    </table>
		    <el-button type="success" icon="el-icon-refresh-left" @click="getBackBuyerAmend">返回</el-button>
		    <el-button type="primary" :style="{display: amendBuyerPage}" icon="el-icon-finished">保存</el-button>
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
	    <el-button type="success" icon="el-icon-refresh-left">返回</el-button>
	  </router-link>
	  <el-button type="primary" @click="saveContract" icon="el-icon-finished" >保存</el-button>
	</div>
  </div>
</template>

<script>
export default {
  name: 'newIncreased',
  data() {
  	return {
  		propRegCode: '',    //产权证号
  		totalAmount: '',    //签约金额
  		earnestAmount: '',    //定金
  		downPaymentAmount: '',    //首付款
  		isProvidentFund: '1',    //是否公积金贷款
  		providentFundAmount: '',    //公积金贷款金额
  		isBusLoan: '1',    //是否商业贷款
  		busLoanAmount: '',    //商业贷款金额
  		sellerCommAmount: '',    //卖方佣金金额
  		buyerCommAmount: '',    //买方佣金金额
  		isCapitalSupervision: '1',    //是否资金监管
  		isCommSupervision: '',    //是否佣金监管
  		otherStipulation: '',    //其他约定
  		nameSeller: '',    //新增卖方姓名
  		certCodeSeller: '',    //新增卖方证件号码
  		placeSeller: '',    //新增卖方户籍所在地
  		phoneSeller: '',    //新增卖方联系电话
  		addressSeller: '',    //新增卖方通讯地址
  		postalcodeSeller: '',    //新增卖方邮政编码
  		emailSeller: '',    //新增卖方电子邮箱
  		nameSellerNew: '',    //新增卖方代理人姓名
  		certCodeSellerNew: '',    //新增卖方代理人证件号码
  		placeSellerNew: '',    //新增卖方代理人户籍所在地
  		phoneSellerNew: '',    //新增卖方代理人联系电话
  		addressSellerNew: '',    //新增卖方代理人通讯地址
  		postalcodeSellerNew: '',    //新增卖方代理人邮政编码
  		emailSellerNew: '',    //新增卖方代理人电子邮箱
  		nameBuyer: '',    //新增买方姓名
  		certCodeBuyer: '',    //新增买方证件号码
  		placeBuyer: '',    //新增买方户籍所在地
  		phoneBuyer: '',    //新增买方联系电话
  		addressBuyer: '',    //新增买方通讯地址
  		postalcodeBuyer: '',    //新增买方邮政编码
  		emailBuyer: '',    //新增买方电子邮箱
  		rightsShare: '',    //买方共有比例
  		nameAmendSeller: '',    //修改卖方姓名
  		certCodeAmendSeller: '',    //修改卖方证件号码
  		placeAmendSeller: '',    //修改卖方户籍所在地
  		phoneAmendSeller: '',    //修改卖方联系电话
  		addressAmendSeller: '',    //修改卖方通讯地址
  		postalcodeAmendSeller: '',    //修改卖方邮政编码
  		emailAmendSeller: '',    //修改卖方电子邮箱
  		nameBuyerNew: '',    //新增买方代理人姓名
  		certCodeBuyerNew: '',    //新增买方代理人证件号码
  		placeBuyerNew: '',    //新增买方代理人户籍所在地
  		phoneBuyerNew: '',    //新增买方代理人联系电话
  		addressBuyerNew: '',    //新增买方代理人通讯地址
  		postalcodeBuyerNew: '',    //新增买方代理人邮政编码
  		emailBuyerNew: '',    //新增买方代理人电子邮箱
  		nameAmendBuyer: '',    //修改买方姓名
  		certCodeAmendBuyer: '',    //修改买方证件号码
  		placeAmendBuyer: '',    //修改买方户籍所在地
  		phoneAmendBuyer: '',    //修改买方联系电话
  		addressAmendBuyer: '',    //修改买方通讯地址
  		postalcodeAmendBuyer: '',    //修改买方邮政编码
  		emailAmendBuyer: '',    //修改买方电子邮箱
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
        selectIdValue: '',   //点击买方选择按钮模拟查询证件号的值
        // inputTwo: '',    
        // inputThree: '',
        // inputFour: '',
        houseMsg: ['1'],    //房屋信息默认展开
        sellerMsg: ['1'],    //卖方信息默认展开
        buyerMsg: ['1'],    //买方信息默认展开
        makeBargainMsg: ['1'],    //经纪机构上方信息默认展开
        contractMsg: ['1'],    //合同信息默认展开
        tableData: [{
          serialNumHouse: '1',
          houseLocationHouse: '1',
          coverAreaHouse: '',
          mainHouseAreaHouse: '1',
          operateHouse: '',
          serialNumSeller: '',
          nameSellerShow: '',
          relPersonTypeSeller: '',
          idTypeSeller: '1',
          idNumberSeller: '',
          phoneNumSeller: '1',
          operateSeller: ''
        }],    //房源提取后房屋信息和卖方的信息
        selectBuyerTableData: [],    //买方选择中点击搜索按钮出现的信息
        buyerTableData: [],    //买方选择后的买方信息
  		makeBargain: [{    //经纪机构信息上面一个小表格
  		  colOne: '成交类型',
          colTwo: '自行成交',
          colThree: '是否经纪机构受理',
          colFour: '是'
  		}],
  		houseStatus: [{    //房屋信息下面一个小表格
  		  colOne: '查封状态',
          colTwo: '无查封',
          colThree: '抵押状态',
          colFour: '无抵押',
          colFive: '租赁状态',
          colSix: '无租赁'
  		}],
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
        }]
        
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
        nameBuyerShow: '',
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
    addHouseStatusCellStyle({ row, column, rowIndex, columnIndex }){    //添加房屋信息下面单元格样式
      if(columnIndex === 0 || columnIndex === 2 || columnIndex === 4){
        return 'background-color: #f5f7fa;text-align: right;padding-right: 10px;'
      } 
    },
    addHouseStatusRowStyle({ row, column, rowIndex, columnIndex }){    //添加房屋信息下面表头样式
      if(rowIndex === 0){
      	return 'display: none;'
      }
    },
    addMakeBrokerageCellStyle({ row, column, rowIndex, columnIndex }){    //添加合同信息上面单元格样式
      if(columnIndex === 0 || columnIndex === 2){
        return 'background-color: #f5f7fa;text-align: right;padding-right: 10px;'
      } 
    },
    addMakeBrokerageRowStyle({ row, column, rowIndex, columnIndex }){    //添加合同信息信息上方表头样式
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
// /deep/ .el-table thead{
//   display: none;
// }

/deep/ tbody .el-input{
  width: 70%;
}
/deep/ .el-tabs__nav-scroll{
  background-color: #408be7;
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
/deep/ .el-table th.gutter{
  display: table-cell!important;
}
/deep/ .el-collapse-item__header{
  background-color: #f5f7fa;
  padding-left: 10px;
}
/deep/ .el-table::before,/deep/ .el-table--border::after{
  background-color: #f5f7fa;
}
/deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item{
  color: #fff;
}
/deep/ .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  color: #408be7;
}
/deep/ .el-table--border{
  border-color: #f5f7fa;
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
.msgBottomBtn{    //各个信息下面一行
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
}
//点击查看出现的表格外层容器
.houseMsgContain,.sellerMsgContain,.sellerNewMsgContain,
.buyerNewMsgContain,.buyerMsgContain,.selectBuyerMsgContain,
.sellerCheckMsgContain,.buyerCheckMsgContain{
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
.houseMsgTable,.sellerMsgTable,.sellerNewMsgTable,.buyerNewMsgTable,
.buyerMsgTable,.sellerCheckMsgTable,.buyerCheckMsgTable{
  border-color: #f3f3f3;
  width: 100%;
  tr{
  	td{
  	  font-size: 16px;
  	  height: 30px;
  	  width: 30%;
  	  /deep/ .el-input{
  	    width: 80%;
      }
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
  	span{
  	  color: red;
  	}
  }
}
//选择买方操作框按钮
.selectBuyerOperate{   
  /deep/ .el-select{
  	width: 150px;
  	margin-left: 35%;
  }
  /deep/ .el-input{
  	width: 150px;
	height: 30px;
  }
  /deep/ .el-input__inner{
	height: 30px;
  }
  /deep/ .el-input__suffix{
  	padding-top: 5px;
  }
  /deep/ .el-button{
  	padding: 7px 10px;
  	margin-top: 0px;
  	margin-bottom: 10px;
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