'use client';

import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button, DatePicker, Input, InputNumber, Table } from 'antd';

import CopyBtn from '@/components/copy-btn';
import { columns, dataSource, template } from './config';

function TimestampConvert() {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [timestamp, setTimestamp] = useState<string>(String(dayjs(date).unix() * 1000));

  const [newDate, setNewDate] = useState<string>(dayjs(date).format(template));
  const [newTimestamp, setNewTimestamp] = useState<string>(String(dayjs(date).unix() * 1000));

  const onDateChange = (value: Dayjs | null) => {
    setDate(value);
  };

  const onNewTimestampChange = (value: string | null) => {
    setNewTimestamp(value || '');
  };

  const onTimestampChange = (value: string | null) => {
    setTimestamp(value || '');
  };

  const onNewDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value);
  };

  const convertTimestamp = () => {
    setTimestamp(String(dayjs(date).unix() * 1000));
  };

  const convertDate = () => {
    setNewDate(dayjs(Number(newTimestamp)).format(template));
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="mb-4 text-xl font-bold">时间戳转换：</h2>
      <div>
        <div className="mb-2 font-medium">获取时间戳</div>
        <div className="flex mb-10">
          <DatePicker showTime value={date} onChange={onDateChange} style={{ width: 240 }} />
          <Button type="primary" className="ml-8 mr-8" onClick={convertTimestamp}>
            转换
          </Button>
          <InputNumber value={String(timestamp)} onChange={onTimestampChange} style={{ width: 240 }} />
          <CopyBtn value={String(timestamp)} className="mx-8" />
        </div>
        <div className="mb-2 font-medium">转换时间戳</div>
        <div className="flex">
          <InputNumber value={String(newTimestamp)} onChange={onNewTimestampChange} style={{ width: 240 }} />
          <Button type="primary" className="ml-8 mr-8" onClick={convertDate}>
            转换
          </Button>
          <Input value={newDate} onChange={onNewDateChange} allowClear style={{ width: 240 }} />
          <CopyBtn value={newDate} className="mx-8" />
        </div>
      </div>
      <h2 className="mt-20 text-xl font-bold">关于时间戳（Unix）：</h2>
      <div className="mt-1 text-gray-400">从1970年1月1日开始所经过的秒数 Unix.</div>
      <div style={{ lineHeight: 3 }}>
        <p>Unix 时间戳是从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数，不考虑闰秒。</p>
        <p>UNIX时间戳的 0 按照 ISO 8601 规范为 ：1970-01-01T00:00:00Z.</p>
        <p>一个小时表示为UNIX时间戳格式为：3600秒；一天表示为UNIX时间戳为86400秒，闰秒不计算。</p>
      </div>
      <h2 className="mt-20 mb-4 text-xl font-bold">对照表：</h2>
      <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
    </div>
  );
}

export default TimestampConvert;
