'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Button, Input, Space, Table, message } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { isEmpty } from '@/utils/is';

interface DataType {
  key: string;
  ip: string;
  organization: string;
  region: string;
  country: string;
  timezone: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '当前 IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '运营商',
    dataIndex: 'organization',
    key: 'organization',
  },
  {
    title: '城市',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: '国家',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: '时区',
    dataIndex: 'timezone',
    key: 'timezone',
  },
];

const defaultDataSource: DataType[] = [
  {
    key: '',
    ip: '',
    organization: '',
    region: '',
    country: '',
    timezone: '',
  },
];

const baseUrl = 'https://api.ip.sb/geoip';

function IPCheck() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState<string>('');
  const [dataSource, setDataSource] = useState(defaultDataSource);

  const isLoadingRef = useRef<boolean>(false);

  useEffect(() => {
    fetchIPData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchIPData = async () => {
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    messageApi.loading('正在查询...');
    const res = await fetch(`${baseUrl}/${value}`);
    const { ip, organization, region, country, timezone } = await res.json();
    setDataSource([
      {
        key: ip,
        ip,
        organization,
        region: region || organization?.split(' ')?.[0] || '',
        country,
        timezone,
      },
    ]);
    setValue(ip);
    isLoadingRef.current = false;
    messageApi.destroy();
  };

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleConvert = async () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    fetchIPData();
  };

  return (
    <div className="w-full mx-auto">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">IP 归属地查询：</h2>
      <div className="my-6">
        <Space size="large">
          <Input
            placeholder="请输入 IP 地址"
            value={value}
            onChange={onValueChange}
            allowClear
            autoFocus
            style={{ width: 336 }}
          />
          <Button type="primary" onClick={handleConvert}>
            查询
          </Button>
        </Space>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
    </div>
  );
}

export default IPCheck;
