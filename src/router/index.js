import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Lesson1 from '../components/Lesson1'
import Lesson2 from '../components/Lesson2'
import Questionnaire from '../components/Questionnaire'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lesson/1',
      name: 'Lesson 1',
      component: Lesson1
    },
    {
      path: '/lesson/2',
      name: 'Lesson 2',
      component: Lesson2
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire
    }
  ]
})
