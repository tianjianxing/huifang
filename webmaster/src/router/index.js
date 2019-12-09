import Vue from 'vue'
import Router from 'vue-router'
import contractSign from '@/components/contractSign'
import contractList from '@/components/contractList'
import newIncreased from '@/components/newIncreased'
import contractCheck from '@/components/contractCheck'
import contractAmend from '@/components/contractAmend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contractSign',
      component: contractSign,
      children: [
      	{
          path: '/contractList',
		  name: 'contractList',
		  component: contractList
      	},
      	{
          path: '/newIncreased',
		  name: 'newIncreased',
		  component: newIncreased
      	},
      	{
          path: '/contractCheck',
		  name: 'contractCheck',
		  component: contractCheck
      	},
      	{
          path: '/contractAmend',
		  name: 'contractAmend',
		  component: contractAmend
      	}
      ],
      redirect: '/contractList'
    }
  ]
})
