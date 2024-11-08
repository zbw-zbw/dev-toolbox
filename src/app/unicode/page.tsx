'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Space, message } from 'antd';

import CopyBtn from '@/components/copy-btn';
import { chineseToUnicode, unicodeToChinese } from '@/utils/convertUnicode';
import { isEmpty } from '@/utils/is';

function Unicode() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const convertChinese = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    setResult(chineseToUnicode(value));
  };

  const convertUnicode = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空');

    setResult(unicodeToChinese(value));
  };

  return (
    <div className="sub-page">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">Unicode 编码：</h2>
      <Input.TextArea
        value={value}
        onChange={onValueChange}
        rows={8}
        placeholder="请把内容粘贴到此处"
        autoFocus
        allowClear
      />
      <Space size="large" className="justify-end w-full my-4">
        <Button type="primary" onClick={convertChinese}>
          中文 转 Unicode
        </Button>
        <Button type="primary" onClick={convertUnicode}>
          Unicode 转 中文
        </Button>
        <CopyBtn value={result} />
      </Space>
      <Input.TextArea value={result} onChange={onResultChange} rows={8} placeholder="生成转换后的结果" allowClear />
    </div>
  );
}

export default Unicode;
