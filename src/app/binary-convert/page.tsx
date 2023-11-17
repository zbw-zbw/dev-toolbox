'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Radio, RadioChangeEvent, Space, Table, message } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { convertBinary } from '@/utils/convertBinary';
import CopyBtn from '@/components/copy-btn';
import { isEmpty } from '@/utils/is';

interface DataType {
  key: number;
  binary: number;
  result: string;
}

const binaryList = [2, 8, 10, 16, 32];

const columns: ColumnsType<DataType> = [
  {
    title: '进制',
    dataIndex: 'binary',
    key: 'binary',
  },
  {
    title: '结果',
    dataIndex: 'result',
    key: 'result',
  },
  {
    width: 120,
    align: 'center',
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (_, record) => <CopyBtn value={record.result} />,
  },
];

const defaultDataSource: DataType[] = binaryList.map((item) => ({
  key: item,
  binary: item,
  result: '',
}));

function BinaryConvert() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState<number>(binaryList[2]);
  const [content, setContent] = useState<string>('');
  const [dataSource, setDataSource] = useState(defaultDataSource);

  const onValueChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  const onContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleConvert = () => {
    if (isEmpty(content)) return void messageApi.warning('内容不能为空');

    const newDataSource = dataSource.map((item) => ({
      ...item,
      result: convertBinary(content, value, item.binary),
    }));
    setDataSource(newDataSource);
  };

  return (
    <div className="w-full mx-auto">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">进制转换：</h2>
      <Radio.Group onChange={onValueChange} value={value}>
        {binaryList.map((item) => (
          <Radio key={item} value={item}>
            {item}进制
          </Radio>
        ))}
      </Radio.Group>
      <div className="my-6">
        <Space size="large">
          <Input
            placeholder="请输入需要转换的数字/字符"
            value={content}
            onChange={onContentChange}
            allowClear
            autoFocus
            style={{ width: 336 }}
          />
          <Button type="primary" onClick={handleConvert}>
            转换
          </Button>
        </Space>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} bordered />
    </div>
  );
}

export default BinaryConvert;
