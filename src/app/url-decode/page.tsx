'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import CopyBtn from '@/components/CopyBtn';

function UrlDecode() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const handleEncode = () => {
    setResult(encodeURIComponent(value));
  };

  const handleDecode = () => {
    setResult(decodeURIComponent(value));
  };

  const handleClearValue = () => {
    setValue('');
  };

  const handleClearResult = () => {
    setResult('');
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">URL 编码 / 解码：</h2>
      <TextArea value={value} onChange={onValueChange} rows={12} placeholder="请把内容粘贴到此处" />
      <Space size="large" className="justify-end w-full mt-4 mb-20">
        <Button type="primary" onClick={handleEncode}>
          编码(encode)
        </Button>
        <Button type="primary" onClick={handleDecode}>
          解码(decode)
        </Button>
        <Button type="primary" onClick={handleClearValue}>
          清空
        </Button>
      </Space>
      <TextArea value={result} onChange={onResultChange} rows={12} placeholder="生成编码/解码后的结果" />
      <Space size="large" className="justify-end w-full mt-4">
        <CopyBtn value={result} />
        <Button type="primary" onClick={handleClearResult}>
          清空
        </Button>
      </Space>
    </div>
  );
}

export default UrlDecode;
