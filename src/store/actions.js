import {
  GETPOLICYDESCLIST,
  GETKINGKONGLIST,
  GETSCENELIGHTSHOPPINGGUIDEMODULE,
  GETPOPULARITEMLIST,
  GETFLASHSALEMODULE,
  GETNEWITEMLIST,
  GETFOURFOLDLIST,
  GETHOMECATEGORYMODULE,
  GETCATEGORYL1LIST,
  GETMANUALLIST,
  GETTABLIST,
  AGAINGETMANUAL
} from './mutations-type'

import {
  reqHomeData,
  reqCategoryList,
  reqManual,
  reqTabs,
  reqAgainManual
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
  //------------------------------category-------------------------------------
  async getManualList ({commit}) {
    const result = await reqManual()
    if (result.code === '200') {
      const data = result.data
      commit(GETMANUALLIST, data)
    }
  },
  async getAgainManual ({commit}, page) {
    return new Promise(async (resolve) => {
      let lastGet = false
      const result = await reqAgainManual(page)
      if (result.code === '200') {
        const data = result.data
        if (data.hasMore || !lastGet) {
          lastGet = !data.hasMore
          commit(AGAINGETMANUAL, data)
        }
        const code = result.code
        resolve({code, lastGet})
      }
    })
  },
  async getTabList ({commit}) {
    const result = await reqTabs()
    if (result.code === '200') {
      const data = result.data
      commit(GETTABLIST, data)
    }
  },
}
