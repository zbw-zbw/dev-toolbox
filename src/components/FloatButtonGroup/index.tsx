import { FloatButton, Tooltip } from 'antd';
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
    <FloatButton.Group style={{ right: 40, bottom: 40 }}>
      <Tooltip placement="left" title="返回首页">
        <FloatButton icon={<RollbackOutlined />} onClick={handleBackHome} />
      </Tooltip>
      <Tooltip placement="left" title="刷新页面">
        <FloatButton icon={<SyncOutlined />} onClick={handleReload} />
      </Tooltip>
      <Tooltip placement="left" title="返回顶部">
        <FloatButton.BackTop visibilityHeight={0} />
      </Tooltip>
    </FloatButton.Group>
  );
}

export default FloatButtonGroup;
