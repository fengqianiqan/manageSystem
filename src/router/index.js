import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: () => import('@/components/Login')
    },
    {
      path: '*',
      name: 'NotFound',
      hidden: true,
      component: () => import('@/components/NotFound')
    },
    {
      path: '/home',
      name: '员工管理',
      iconClass: 'fa fa-users',
      redirect: '/home/student',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/student',
          name: '员工列表',
          iconClass: 'fa fa-list',
          component: () => import('@/components/student/StudentList')
        },
        {
          path: '/home/work',
          name: '项目列表',
          iconClass: 'fa fa-list-ul',
          component: () => import('@/components/student/WorkList')
        },
        {
          path: '/home/info',
          name: '信息列表',
          iconClass: 'fa fa-list-alt',
          component: () => import('@/components/student/InfoList')
        },
        {
          path: '/home/attend',
          name: '考勤管理',
          iconClass: 'fa fa-list-alt',
          component: () => import('@/components/student/attend')
        }
      ]
    },
    {
      path: '/home',
      name: '统计分析',
      iconClass: 'fa fa-bar-chart',
      component: () => import('@/components/Home'),
      children: [
        {
          path: '/home/dataview',
          name: '数据概览',
          iconClass: 'fa fa-line-chart',
          component: () => import('@/components/dataAnalysis/DataOverView')
        },
        {
          path: '/home/mapthree',
          name: '出差情况',
          iconClass: 'fa fa-map-pin',
          component: () => import('@/components/dataAnalysis/MapThree')
        }
      ]
    }
  ],
  mode: 'history'
})
