import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListBook from '@/components/Book/ListBook'
import EditBook from '@/components/Book/EditBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
  ]
  ,
  mode: 'history'
})
