/**
 * 验证是否是手机号
 * 匹配规则：第一位为1，第二位为3,4,5,7,8，剩余9为为0-9的随机数字
 */
function isPhone(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}
function isEmail(strEmail) {
  //声明邮箱正则
  var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  if (myreg.test(strEmail))//对输入的值进行判断
  {
    return false;
  }else{
    return true;
  }
}
module.exports = {
  isPhone: isPhone,
  isEmail: isEmail
}