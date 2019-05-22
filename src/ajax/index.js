import ajax from './ajax'

const BASE = '/api'

export const reqHomeData = () => ajax('/home')
export const reqCategoryList = () => ajax('/categorylist')

export const reqManual = () => ajax(BASE + '/topic/v1/find/recManual.json')
export const reqAgainManual = (page) => ajax(
  BASE + `/topic/v1/find/recAuto.json?page=${page}&size=5&exceptIds=10801,11417,9437,10979,11365,11401,11498,10978,10930,9439,6686,8741,11423,11363,11288,6408,8319,11024,7984,8777,10578,7696,8906,8776,10577,1215,3744,5921,8250,10753,8863,3438,3334,9504,8166,6967,6965,6410,2082,7380,2876,9433,10377,10465,10654`
)
/*
* type: 0 pubType: 0  正常上下布局
* type: 2 pubType: 0  正常左右布局
* type: 0 pubType: -1  3D轮播图布局
* look    晒图
*https://m.you.163.com
*
*'/topic/v1/find/getTabs.json'
* */
export const reqTabs = () => ajax(BASE + '/topic/v1/find/getTabs.json')
