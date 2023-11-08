'use client';

import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button, DatePicker, Input } from 'antd';

import CopyBtn from '@/components/CopyBtn';

const template = 'YYYY-MM-DD HH:mm:ss';

function Timestamp() {
  const [now, setNow] = useState<string>();

  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [timestamp, setTimestamp] = useState<number>(dayjs(date).unix() * 1000);

  const [newDate, setNewDate] = useState<string>(dayjs(date).format(template));
  const [newTimestamp, setNewTimestamp] = useState<string>(`${dayjs(date).unix() * 1000}`);

  useEffect(() => {
    setNow(dayjs().format(template));
  }, []);

  const onDateChange = (value: Dayjs | null) => {
    setDate(value);
  };

  const onTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimestamp(e.target.value);
  };

  const convertTimestamp = () => {
    setTimestamp(dayjs(date).unix() * 1000);
  };

  const convertDate = () => {
    setNewDate(dayjs(+newTimestamp).format(template));
  };

  return (
    <div className="flex flex-col p-20">
      <h2 className="mb-10 text-3xl font-bold">时间戳转换</h2>
      <div className="text-xl font-bold">现在是：{now}（北京时间）</div>
      <div className="mt-4">
        <div className="mb-2 font-bold">获取时间戳</div>
        <div className="flex mb-10">
          <DatePicker showTime value={date} onChange={onDateChange} style={{ width: 240 }} />
          <Button type="primary" className="ml-8 mr-8" onClick={convertTimestamp}>
            转换
          </Button>
          <Input value={timestamp} style={{ width: 240 }} />
          <CopyBtn value={String(timestamp)} />
        </div>
        <div className="mb-2 font-bold">转换时间戳</div>
        <div className="flex">
          <Input value={newTimestamp} onChange={onTimestampChange} style={{ width: 240 }} />
          <Button type="primary" className="ml-8 mr-8" onClick={convertDate}>
            转换
          </Button>
          <Input value={newDate} style={{ width: 240 }} />
          <CopyBtn value={newDate} />
        </div>
      </div>
      <h2 className="mt-20 text-xl font-bold">时间戳（Unix）：</h2>
      <div className="mt-1 text-gray-400">从1970年1月1日开始所经过的秒数 Unix.</div>
      <div style={{ lineHeight: 3 }}>
        <p>Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。</p>
        <p>Unix 时间戳（英文为 Unix epoch, Unix time, POSIX time 或 Unix timestamp）</p>
        <p>UNIX时间戳的 0 按照 ISO 8601 规范为 ：1970-01-01T00:00:00Z.</p>
        <p>一个小时表示为UNIX时间戳格式为：3600秒；一天表示为UNIX时间戳为86400秒，闰秒不计算。</p>
        <p>在大多数的 Unix 系统中 Unix 时间戳存储为 32 位，这样会引发 2038 年问题或 Y2038。</p>
      </div>
    </div>
  );
}

export default Timestamp;
