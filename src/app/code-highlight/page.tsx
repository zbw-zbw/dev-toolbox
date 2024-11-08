'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Space, message } from 'antd';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from 'highlight.js';

import { isEmpty } from '@/utils/is';
import CopyBtn from '@/components/copy-btn';

function CodeHighlight() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleHighlight = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    try {
      const highlightedCode = hljs.highlightAuto(value).value;
      setResult(highlightedCode);
    } catch (error) {
      messageApi.error('着色失败，请检查代码格式');
      console.error('code highlight error:', JSON.stringify(error));
    }
  };

  return (
    <div className="sub-page">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">代码着色：</h2>
      <Input.TextArea
        value={value}
        onChange={onValueChange}
        rows={8}
        placeholder="请把内容粘贴到此处"
        autoFocus
        allowClear
      />
      <Space size="large" className="justify-end w-full my-4">
        <Button type="primary" onClick={handleHighlight}>
          着色
        </Button>
        <CopyBtn value={value} />
      </Space>
      <pre>
        <code
          className="block w-full  p-4 border border-solid border-gray-300 rounded-md"
          style={{ minHeight: 200 }}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </pre>
    </div>
  );
}

export default CodeHighlight;
