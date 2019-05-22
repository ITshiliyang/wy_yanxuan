import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import Personal from '../pages/Personal/Personal'
import SearchPic from '../pages/SearchPic/SearchPic'
import Shopping from '../pages/Shopping/Shopping'
import Search from '../pages/Search/Search'

import Recommend from '../pages/SearchPic/Recommend'
import BuyBack from '../pages/SearchPic/BuyBack'
import Developer from '../pages/SearchPic/Developer'
import GoodThings from '../pages/SearchPic/GoodThings'
import Intelligent from '../pages/SearchPic/Intelligent'
import Look from '../pages/SearchPic/Look'
import News from '../pages/SearchPic/News'
import SHome from '../pages/SearchPic/SHome'

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
    component: SearchPic,
    children: [
      {
        path:'/searchpic/recommend',
        component: Recommend
      },
      {
        path:'/searchpic/buyback',
        component: BuyBack
      },
      {
        path:'/searchpic/developer',
        component: Developer
      },
      {
        path:'/searchpic/intelligent',
        component: Intelligent
      },
      {
        path:'/searchpic/goodthings',
        component: GoodThings
      },
      {
        path:'/searchpic/look',
        component: Look
      },
      {
        path:'/searchpic/news',
        component: News
      },
      {
        path:'/searchpic/shome',
        component: SHome
      },
      {
        path:'',
        redirect: '/searchpic/recommend'
      }
    ]
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
