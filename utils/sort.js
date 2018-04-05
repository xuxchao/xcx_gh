/**
 * 数字排序
 * sort:正序还是倒叙 1正序，2倒叙
 * arr:需要排序的数组
 * name:包含对象的数组排序，没有可以不传
 */
function numSort(sort,arr,name){
  if(sort===1||sort===2){
    return arr.sort(function (a, b) {
      return sort == 2 ? (name ? (b[name] - a[name]) : b - a) : name ? (a[name] - b[name]) : a - b
    }).concat()//此处用concat是对原数组进行了深拷贝,如果不深拷贝在使用的时候就会改变原数组的值，导致例子中的正序和倒叙是同样的结果，如果单独一次一次的进行结果又是正确的。有兴趣的可以去掉concat这个方法看一下
  }else{
    wx.showToast({
      title: '排序只能传1或2',
      icon: 'none',
      duration: 2000
    })
    return arr;
  }
}

module.exports = {
  numSort: numSort
}