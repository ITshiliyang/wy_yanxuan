import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import Personal from '../pages/Personal/Personal'
import SearchPic from '../pages/SearchPic/SearchPic'
import Shopping from '../pages/Shopping/Shopping'
import Search from '../pages/Search/Search'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/searchpic',
    component: SearchPic
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/search',
    component: Search,
    meta: {
      noFooter: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]
