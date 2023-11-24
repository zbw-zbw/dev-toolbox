'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Space, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
// import 'diff' from 'diff';

import CopyBtn from '@/components/copy-btn';
import { isEmpty } from '@/utils/is';

function FileDiff() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  // const [newValue, setNewValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const handleDiff = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    setResult(value);
    // const result = diff.diffChars(value, newValue);
    // console.log(result);
  };

  return (
    <div className="w-full mx-auto">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">文件对比：</h2>
      <TextArea value={value} onChange={onValueChange} rows={8} placeholder="请把内容粘贴到此处" autoFocus allowClear />
      <Space size="large" className="justify-end w-full my-4">
        <Button type="primary" onClick={handleDiff}>
          开始对比
        </Button>
        <CopyBtn value={result} />
      </Space>
      <TextArea value={result} onChange={onResultChange} rows={8} placeholder="生成对比后的结果" allowClear />
    </div>
  );
}

export default FileDiff;
