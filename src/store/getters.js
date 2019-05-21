export default {
  homeContainerHeight ({homeHeaderHeight, footerHeight}) {
    return document.documentElement.clientHeight - homeHeaderHeight - footerHeight
  }
}
