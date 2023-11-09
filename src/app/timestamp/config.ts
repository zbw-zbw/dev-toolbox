export const template = 'YYYY-MM-DD HH:mm:ss';

export const dataSource = [
  {
    key: '1',
    time: '1 分钟',
    seconds: 60,
  },
  {
    key: '2',
    time: '1 小时',
    seconds: 3600,
  },
  {
    key: '3',
    time: '1 天',
    seconds: 86400,
  },
  {
    key: '4',
    time: '1 周',
    seconds: 604800,
  },
  {
    key: '5',
    time: '1 月 (30.44 天)',
    seconds: 2629743,
  },
  {
    key: '6',
    time: '1年 (365.24 天)',
    seconds: 31556736,
  },
];

export const columns = [
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '秒',
    dataIndex: 'seconds',
    key: 'seconds',
  },
];
