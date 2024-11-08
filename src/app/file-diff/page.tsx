'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { Button, Input, Space, message } from 'antd';
import * as Diff from 'diff';

import { isEmpty } from '@/utils/is';

function FileDiff() {
  const [messageApi, contextHolder] = message.useMessage();

  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const resultRef = useRef<HTMLDivElement | null>(null);

  const onValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onResultChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };

  const handleDiff = () => {
    if (isEmpty(value) || isEmpty(result)) return void messageApi.warning('内容不能为空');

    // 先清空上次的内容
    while (resultRef.current?.firstChild) {
      resultRef.current.removeChild(resultRef.current.firstChild);
    }

    const diff = Diff.diffChars(value, result);
    let span = null;
    const fragment = document.createDocumentFragment();
    diff.forEach((part) => {
      const color = part.added ? 'green' : part.removed ? 'red' : 'grey';
      span = document.createElement('span');
      span.style.color = color;
      span.appendChild(document.createTextNode(part.value));
      fragment.appendChild(span);
    });
    resultRef.current?.appendChild(fragment);
  };

  return (
    <div className="sub-page">
      {contextHolder}
      <h2 className="mb-4 text-xl font-bold">文件对比：</h2>
      <Input.TextArea
        value={value}
        onChange={onValueChange}
        rows={8}
        placeholder="请把内容1粘贴到此处"
        autoFocus
        allowClear
      />
      <Input.TextArea
        className="mt-4"
        value={result}
        onChange={onResultChange}
        rows={8}
        placeholder="请把内容2粘贴到此处"
        allowClear
      />
      <Space size="large" className="justify-end w-full my-4">
        <Button type="primary" onClick={handleDiff}>
          开始对比
        </Button>
      </Space>
      <div
        ref={resultRef}
        className="block w-full  p-4 border border-solid border-gray-300 rounded-md"
        style={{ minHeight: 200 }}
      />
      {/*  */}
      <div className="mt-2 text-sm">
        提示：<span className="text-green-500">绿色</span> 代表新增内容，<span className="text-red-500">红色 </span>
        代表删除内容，<span className="text-gray-500">灰色 </span>代表未变动。
      </div>
    </div>
  );
}

export default FileDiff;
