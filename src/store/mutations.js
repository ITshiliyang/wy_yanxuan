import {
  GETHOMEHEADERHEIGHT,
  GETFOOTERHEIGHT,
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


export default {
  //------------------------------home-------------------------------------
  [GETHOMEHEADERHEIGHT] (state, homeHeaderHeight) {
    state.homeHeaderHeight = homeHeaderHeight
  },
  [GETFOOTERHEIGHT] (state, footerHeight) {
    state.footerHeight = footerHeight
  },
  [GETPOLICYDESCLIST] (state, policyDescList) {
    state.policyDescList = policyDescList
  },
  [GETKINGKONGLIST] (state, kingKongList) {
    state.kingKongList = kingKongList
  },
  [GETSCENELIGHTSHOPPINGGUIDEMODULE] (state, lightShopping) {
    state.lightShopping = lightShopping
  },
  [GETPOPULARITEMLIST] (state, popularItemList) {
    state.popularItemList = popularItemList
  },
  [GETFLASHSALEMODULE] (state, flashSaleList) {
    state.flashSaleList = flashSaleList
  },
  [GETNEWITEMLIST] (state, newItemList) {
    state.newItemList = newItemList
  },
  [GETFOURFOLDLIST] (state, fourFoldList) {
    state.fourFoldList = fourFoldList
  },
  [GETHOMECATEGORYMODULE] (state, homeCategoryModule) {
    state.homeCategoryModule = homeCategoryModule
  },
  //------------------------------category-------------------------------------
  [GETCATEGORYL1LIST] (state, categoryL1List) {
    state.categoryL1List = categoryL1List
  },
  //------------------------------searchPic-------------------------------------
  [GETMANUALLIST] (state, manualList) {
    state.manualList = manualList
  },
  [GETTABLIST] (state, tabList) {
    state.tabList = tabList
  },
  [AGAINGETMANUAL] (state, newManual) {
    newManual.result.forEach(item => {
      state.manualList.push(item)
    })
  }
}
