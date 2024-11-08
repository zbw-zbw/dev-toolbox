'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Space, message } from 'antd';
import crypto from 'crypto-js';

import CopyBtn from '@/components/copy-btn';
import { isEmpty } from '@/utils/is';

function MD5Lock() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const handleLock = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    setResult(crypto.MD5(value).toString());
  };

  return (
    <div className="sub-page">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">MD5 加密：</h2>
      <Input.TextArea
        value={value}
        onChange={onValueChange}
        rows={8}
        placeholder="请输入要加密的内容"
        autoFocus
        allowClear
      />
      <Space size="large" className="justify-end w-full my-4">
        <Button type="primary" onClick={handleLock}>
          加密
        </Button>
        <CopyBtn value={result} />
      </Space>
      <Input.TextArea value={result} onChange={onResultChange} rows={8} placeholder="生成加密后的结果" allowClear />
    </div>
  );
}

export default MD5Lock;
