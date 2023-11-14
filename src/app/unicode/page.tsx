'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Space, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import CopyBtn from '@/components/copy-btn';
import { chineseToUnicode, unicodeToChinese } from '@/utils/convertUnicode';
import { isEmpty } from '@/utils/is';

function Unicode() {
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const convertChinese = () => {
    if (isEmpty(value)) return void message.warning('内容不能为空~');

    setResult(chineseToUnicode(value));
  };

  const convertUnicode = () => {
    if (isEmpty(value)) return void message.warning('内容不能为空~');

    setResult(unicodeToChinese(value));
  };

  const handleClearValue = () => {
    setValue('');
  };

  const handleClearResult = () => {
    setResult('');
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="mb-4 text-xl font-bold">Unicode 编码：</h2>
      <TextArea value={value} onChange={onValueChange} rows={8} placeholder="请把内容粘贴到此处" autoFocus />
      <Space size="large" className="justify-end w-full mt-4 mb-10">
        <Button type="primary" onClick={convertChinese}>
          中文 转 Unicode
        </Button>
        <Button type="primary" onClick={convertUnicode}>
          Unicode 转 中文
        </Button>
        <Button type="primary" danger onClick={handleClearValue}>
          清空
        </Button>
      </Space>
      <TextArea value={result} onChange={onResultChange} rows={8} placeholder="生成转换后的结果" />
      <Space size="large" className="justify-end w-full mt-4">
        <CopyBtn value={result} />
        <Button type="primary" danger onClick={handleClearResult}>
          清空
        </Button>
      </Space>
    </div>
  );
}

export default Unicode;
