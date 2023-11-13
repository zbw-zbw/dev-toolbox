'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Space, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { JsonViewer } from '@textea/json-viewer';
import { isEmpty } from '@/utils/is';

function JSONFormat() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const formatJSON = () => {
    if (isEmpty(value)) return void message.error('内容不能为空');

    try {
      setResult(JSON.parse(value));
    } catch (error) {
      message.error('JSON 格式错误');
      console.error('JSON format error:', error);
    }
  };

  const handleClearValue = () => {
    setValue('');
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="mb-4 text-xl font-bold">JSON 格式化：</h2>
      <TextArea value={value} onChange={onValueChange} rows={12} placeholder="请把内容粘贴到此处" />
      <Space size="large" className="justify-end w-full mt-4 mb-20">
        <Button type="primary" onClick={formatJSON}>
          格式化
        </Button>
        <Button type="primary" onClick={handleClearValue}>
          清空
        </Button>
      </Space>
      <JsonViewer value={result} />
    </div>
  );
}

export default JSONFormat;
