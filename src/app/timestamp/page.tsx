'use client';

import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button, DatePicker, Input } from 'antd';

import CopyBtn from '@/components/CopyBtn';
import FloatButtonGroup from '@/components/FloatButtonGroup';

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
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col">
        <div className="text-2xl font-bold">现在是：{now}（北京时间）</div>
        <div className="mt-10">
          <div className="mb-2 font-bold">获取时间戳</div>
          <div className="flex mb-20">
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
        <div className="my-32">
          <div className="text-2xl font-bold">时间戳（Unix）：</div>
          <div style={{ lineHeight: 3 }}>
            <p>从1970年1月1日开始所经过的秒数 Unix.</p>
            <p>时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒.</p>
            <p>一个小时表示为UNIX时间戳格式为：3600秒; 一天表示为UNIX时间戳为86400秒，闰秒不计算.</p>
          </div>
        </div>
      </div>
      <FloatButtonGroup />
    </div>
  );
}

export default Timestamp;
