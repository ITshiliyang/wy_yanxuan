import {
  GETPOLICYDESCLIST,
  GETKINGKONGLIST,
  GETSCENELIGHTSHOPPINGGUIDEMODULE,
  GETPOPULARITEMLIST,
  GETFLASHSALEMODULE,
  GETNEWITEMLIST,
  GETFOURFOLDLIST,
  GETHOMECATEGORYMODULE,
  GETCATEGORYL1LIST
} from './mutations-type'

import {
  reqHomeData,
  reqCategoryList
} from '../ajax'


export default {
  //------------------------------home-------------------------------------
  //获取服务策略列表
  async getPolicyDesclist ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.policyDescList
      commit(GETPOLICYDESCLIST, data)
    }
  },
  //获取商品导航
  async getKingKongList ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.kingKongModule.kingKongList
      commit(GETKINGKONGLIST, data)
    }
  },
  //获取类目热销
  async getLightShopping ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.categoryHotSellModule.categoryList
      commit(GETSCENELIGHTSHOPPINGGUIDEMODULE, data)
    }
  },
  //获取人气推荐列表
  async getPopularItemList ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.popularItemList
      commit(GETPOPULARITEMLIST, data)
    }
  },
  //获取限时购列表
  async getFlashSaleList ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.flashSaleModule.itemList
      commit(GETFLASHSALEMODULE, data)
    }
  },
  //获取新品列表
  async getNewItemList ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.newItemList
      commit(GETNEWITEMLIST, data)
    }
  },
  //获取四格列表
  async getFourFoldList ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.fourFoldList
      commit(GETFOURFOLDLIST, data)
    }
  },
  //获取广告列表
  async getHomeCategoryModule ({commit}) {
    const result = await reqHomeData()
    if (result.code === 0) {
      const data = result.data.categoryModule
      commit(GETHOMECATEGORYMODULE, data)
    }
  },
  //------------------------------category-------------------------------------
  async getCategoryList ({commit}) {
    const result = await reqCategoryList()
    if (result.code === 0) {
      const data = result.data.categoryL1List
      commit(GETCATEGORYL1LIST, data)
    }
  },
}
