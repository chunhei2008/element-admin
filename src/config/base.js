export const active = {
  title: '职称导入',
  staff: '员工资料导入',
  hairdressing: '美发项目导入',
  beautify: '美容项目导入',
  goods: '外卖商品导入',
  course: '疗程卡导入'
}
export const status = {
  0: '未导入',
  1: '导入确认',
  2: '导入中',
  3: '导入完成',
  4: '导入错误'
}

export const templates = [
  {
    active: 'title',
    url: './templates/职称导入模板.csv'
  },
  {
    active: 'staff',
    url: './templates/员工资料导入模板.csv'
  },
  {
    active: 'hairdressing',
    url: './templates/美发项目导入模板.csv'
  },
  {
    active: 'beautify',
    url: './templates/美容项目导入模板.csv'
  },
  {
    active: 'goods',
    url: './templates/外卖商品导入模板.csv'
  },
  {
    active: 'course',
    url: './templates/疗程卡导入模板.csv'
  }
]

export default {
  active,
  status,
templates}
