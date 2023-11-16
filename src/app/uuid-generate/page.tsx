'use client';

import { ChangeEvent, useState } from 'react';
import { Button, InputNumber, Radio, RadioChangeEvent, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

import CopyBtn from '@/components/copy-btn';
import { generateUUID } from '@/utils/generateUUID';

function UUIDGenerate() {
  const [count, setCount] = useState<number>(1);
  const [UUIDs, setUUIDs] = useState<string>('');
  const [caseType, setCaseType] = useState<'up' | 'low'>('low');
  const [hasSplitter, setHasSplitter] = useState<boolean>(false);

  const onCountChange = (val: number | null) => {
    setCount(val || 1);
  };

  const onCaseTypeChange = (e: RadioChangeEvent) => {
    setCaseType(e.target.value);
  };

  const toggleHasSplitter = (e: RadioChangeEvent) => {
    setHasSplitter(e.target.value);
  };

  const handleCreateUUIDs = () => {
    for (let index = 0; index < count; index++) {
      let uuid = generateUUID();
      const isUpCase = caseType === 'up';

      if (isUpCase) uuid = uuid.toUpperCase();

      if (!hasSplitter) uuid = uuid.replace(/-/g, '');

      setUUIDs((uuids) => {
        let result = uuids;
        result += `${uuid}\n`;

        return result;
      });
    }
  };

  const onUUIDsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUUIDs(e.target.value);
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="mb-4 text-xl font-bold">UUID 生成器：</h2>
      <div className="mb-4">
        <span>生成数量：</span>
        <InputNumber value={count} onChange={onCountChange} keyboard autoFocus />
      </div>
      <div className="mb-4">
        <span>生成结果：</span>
        <Radio.Group onChange={onCaseTypeChange} value={caseType}>
          <Radio value="up">大写</Radio>
          <Radio value="low">小写</Radio>
        </Radio.Group>
      </div>
      <div className="mb-4">
        <span>是否保留分隔符(-)：</span>
        <Radio.Group onChange={toggleHasSplitter} value={hasSplitter}>
          <Radio value={true}>是</Radio>
          <Radio value={false}>否</Radio>
        </Radio.Group>
      </div>
      <div className="my-4">
        <Space size="large">
          <Button type="primary" onClick={handleCreateUUIDs}>
            生成
          </Button>
          <CopyBtn value={UUIDs} />
        </Space>
      </div>
      <TextArea value={UUIDs} onChange={onUUIDsChange} rows={12} placeholder="生成的 UUID 结果" allowClear />
    </div>
  );
}

export default UUIDGenerate;
