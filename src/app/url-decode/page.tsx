'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Space, message } from 'antd';

import CopyBtn from '@/components/copy-btn';
import { isEmpty } from '@/utils/is';

function UrlDecode() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const handleEncode = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    setResult(encodeURIComponent(value));
  };

  const handleDecode = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    setResult(decodeURIComponent(value));
  };

  return (
    <div className="sub-page">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">URL 编码 / 解码</h2>
      <Input.TextArea
        value={value}
        onChange={onValueChange}
        rows={8}
        placeholder="请把内容粘贴到此处"
        autoFocus
        allowClear
      />
      <Space size="large" className="justify-end w-full my-4">
        <Button type="primary" onClick={handleEncode}>
          编码(encode)
        </Button>
        <Button type="primary" onClick={handleDecode}>
          解码(decode)
        </Button>
        <CopyBtn value={result} />
      </Space>
      <Input.TextArea
        value={result}
        onChange={onResultChange}
        rows={8}
        placeholder="生成编码/解码后的结果"
        allowClear
      />
    </div>
  );
}

export default UrlDecode;
