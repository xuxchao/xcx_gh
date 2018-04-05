/**
 * 初始化小星星
 * num:几个小星星
 * colorc:选中的小星星的颜色
 * color:未选中的小星星的颜色
 * size:字体大小
 */
var that;
function starInit(target,starNum = 5, colorc = "red", color = "#eeeeee", size = 26) {
  that=target;
  var list = [];
  for (var i = 0; i < starNum; i++) {
    list.push({
      color: color,
      size: size
    })
  }
  that.setData({
    starList: list,
    starColorc: colorc,
    starColor: color,
    starNum: starNum,
    starPoints:0
  });
  that.starClick = starClick;
}
/**
 * 默认分数
 */
function defaultInit(target, starNum = 5,targetNum=2, colorc = "red", color = "#eeeeee", size = 26){
  that = target;
  var roundedNum = Math.round(targetNum);
  var list = [];
  for (var i = 0; i < roundedNum; i++) {
    list.push({
      color: colorc,
      size: size
    })
  }
  for (var j = roundedNum; j < starNum; j++) {
    list.push({
      color: color,
      size: size
    })
  }
  that.setData({
    starListView: list
  });
}
/**
 * 单击改变小星星的颜色,并且获取分值
 */
function starClick(e) {
  var a = e.currentTarget.dataset;
  var list = that.data.starList;
  for (var i = 0; i < a.index + 1; i++) {
    list[i].color = that.data.starColorc;
  }
  for (var j = a.index + 1; j < that.data.starNum; j++) {
    list[j].color = that.data.starColor;
  }
  that.setData({
    starList: list,
    starPoints:a.index+1
  });
}

module.exports = {
  starInit: starInit,
  defaultInit: defaultInit
}