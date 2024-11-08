'use client';

import { ChangeEvent, useState } from 'react';
import { Button, Input, Space, message } from 'antd';

import nzh from 'nzh';

import CopyBtn from '@/components/copy-btn';
import { isEmpty } from '@/utils/is';

function NumToRMB() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const handleConvert = () => {
    if (isEmpty(value)) return void messageApi.warning('内容不能为空～');

    setResult(nzh.cn.encodeB(value));
  };

  return (
    <div className="sub-page">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">数字转人民币：</h2>
      <Space className="mb-4" size="large">
        <Input
          value={value}
          onChange={onValueChange}
          allowClear
          placeholder="请输入要转换的数字"
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={handleConvert}>
          转换
        </Button>
        <CopyBtn value={result} />
      </Space>
      <Input.TextArea value={result} onChange={onResultChange} rows={12} placeholder="生成转换后的结果" allowClear />
    </div>
  );
}

export default NumToRMB;
