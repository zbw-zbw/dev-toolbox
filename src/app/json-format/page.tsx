'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Space, message } from 'antd';
import { JsonViewer } from '@textea/json-viewer';

import { isEmpty } from '@/utils/is';
import NoSsrWrapper from '@/components/no-ssr';

function JSONFormat() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const formatJSON = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    try {
      setResult(JSON.parse(value));
    } catch (error) {
      messageApi.error('JSON 格式错误');
      console.error('JSON format error:', JSON.stringify(error));
    }
  };

  return (
    <NoSsrWrapper>
      <div className="sub-page">
        {contextHolder}
        <h2 className="mb-4 text-xl font-bold">JSON 格式化：</h2>
        <Input.TextArea
          value={value}
          onChange={onValueChange}
          rows={12}
          placeholder="请把内容粘贴到此处"
          autoFocus
          allowClear
        />
        <Space size="large" className="justify-end w-full mt-4 mb-20">
          <Button type="primary" onClick={formatJSON}>
            格式化
          </Button>
        </Space>
        <JsonViewer value={result} />
      </div>
    </NoSsrWrapper>
  );
}

export default JSONFormat;
