'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Space, message } from 'antd';
import jsonToTS from 'json-to-ts';

import CopyBtn from '@/components/copy-btn';
import { isEmpty } from '@/utils/is';

function JSONToTS() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const convertJSON = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    try {
      let types = '';
      jsonToTS(JSON.parse(value)).forEach((typeInterface: string) => {
        types += typeInterface + '\n';
      });
      setResult(types);
    } catch (error) {
      messageApi.error('JSON 格式错误');
      console.error('jsonToTS error:', JSON.stringify(error));
    }
  };

  return (
    <div className="sub-page">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">JSON TO TS：</h2>
      <Input.TextArea
        value={value}
        onChange={onValueChange}
        rows={8}
        placeholder="请把内容粘贴到此处"
        autoFocus
        allowClear
      />
      <Space size="large" className="justify-end w-full my-4">
        <Button type="primary" onClick={convertJSON}>
          转换
        </Button>
        <CopyBtn value={result} />
      </Space>
      <Input.TextArea value={result} onChange={onResultChange} rows={8} placeholder="生成转换后的结果" allowClear />
    </div>
  );
}

export default JSONToTS;
