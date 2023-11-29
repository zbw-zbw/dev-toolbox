'use client';

import { useState } from 'react';
import { ColorPicker as AntdColorPicker, Space } from 'antd';
import { Color } from 'antd/es/color-picker';

import CopyBtn from '@/components/copy-btn';

function ColorPicker() {
  const [color, setColor] = useState<Color>();
  const colorStr = color?.toHexString() || '';

  const onColorChange = (value: Color) => {
    setColor(value);
  };

  return (
    <div className="w-full mx-auto">
      <h2 className="mb-4 text-xl font-bold">颜色选择器：</h2>
      <Space size="large">
        <AntdColorPicker allowClear showText trigger="hover" value={color} onChange={onColorChange} />
        <CopyBtn value={colorStr} className="mb-0.5" />
      </Space>
    </div>
  );
}

export default ColorPicker;
