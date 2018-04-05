var that;
/**
 * 初始化数据
 */
function init(target) {
  that = target;
  const date = new Date();
  const cur_year = date.getFullYear();
  const cur_month = date.getMonth() + 1;
  const weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
  //空的网格计算
  calculateEmptyGrids(cur_year, cur_month);
  //计算日子
  calculateDays(cur_year, cur_month);
  that.setData({
    cur_year,
    cur_month,
    weeks_ch,
    today: new Date().getDate(),
    curMonth: new Date().getMonth() + 1,
    hasEmptyGrid:false
  })
  that.setData({
    target_date: that.data.cur_year + '-' + that.data.curMonth + '-' + that.data.today
  })
  that.changeDate = changeDate;
  that.handleCalendar = handleCalendar;
}

/**
  * 空的网格计算
  */
function calculateEmptyGrids(year, month) {
  const firstDayOfWeek = getFirstDayOfWeek(year, month);
  let empytGrids = [];
  if (firstDayOfWeek > 0) {
    for (let i = 0; i < firstDayOfWeek; i++) {
      empytGrids.push(i);
    }
    that.setData({
      hasEmptyGrid: true,
      empytGrids
    });
  } else {
    that.setData({
      hasEmptyGrid: false,
      empytGrids: []
    });
  }
}
/**
 * 获取这个月有几天
 */
function getThisMonthDays(year, month) {
  return new Date(year, month, 0).getDate();
}
/**
 * 改变当前选中的值
 */
function changeDate(e) {
  that.setData({
    today: e.currentTarget.dataset.index,
    curMonth:that.data.cur_month
  });
  that.setData({
    target_date: that.data.cur_year + '-' + that.data.curMonth + '-' + that.data.today
  })
};
/**
 * 获取第一个周的周几
 */
function getFirstDayOfWeek(year, month) {
  return new Date(Date.UTC(year, month - 1, 1)).getDay();
}
/**
 * 生成对应本月数据的数组
 */
function calculateDays(year, month) {
  let days = [];

  const thisMonthDays = getThisMonthDays(year, month);

  for (let i = 1; i <= thisMonthDays; i++) {
    days.push(i);
  }

  that.setData({
    days
  });
}
/**
 * 查看前一个月还是后一个月
 */
function handleCalendar(e) {
  const handle = e.currentTarget.dataset.handle;
  const cur_year = that.data.cur_year;
  const cur_month = that.data.cur_month;
  if (handle === 'prev') {
    let newMonth = cur_month - 1;
    let newYear = cur_year;
    if (newMonth < 1) {
      newYear = cur_year - 1;
      newMonth = 12;
    }

    calculateDays(newYear, newMonth);
    calculateEmptyGrids(newYear, newMonth);

    that.setData({
      cur_year: newYear,
      cur_month: newMonth
    })

  } else {
    let newMonth = cur_month + 1;
    let newYear = cur_year;
    if (newMonth > 12) {
      newYear = cur_year + 1;
      newMonth = 1;
    }

    calculateDays(newYear, newMonth);
    calculateEmptyGrids(newYear, newMonth);

    that.setData({
      cur_year: newYear,
      cur_month: newMonth
    })
  }
}
module.exports = {
  dateInit:init
}