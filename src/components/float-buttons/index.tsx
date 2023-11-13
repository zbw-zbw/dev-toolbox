'use client';

import { FloatButton } from 'antd';

import { RollbackOutlined, SyncOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

function FloatButtonGroup() {
  const router = useRouter();

  const handleBackHome = () => {
    router.push('/');
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <FloatButton.Group style={{ right: 20, bottom: 100 }}>
      <FloatButton icon={<RollbackOutlined />} tooltip="返回首页" onClick={handleBackHome} />
      <FloatButton icon={<SyncOutlined />} tooltip="刷新页面" onClick={handleReload} />
      <FloatButton.BackTop visibilityHeight={0} tooltip="回到顶部" />
    </FloatButton.Group>
  );
}

export default FloatButtonGroup;
