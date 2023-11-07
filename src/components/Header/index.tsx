'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Col, Row, Input, Button, Tooltip, Space } from 'antd';
import { GithubOutlined, TranslationOutlined } from '@ant-design/icons';

import useToggleMode from '@/hooks/useToggleMode';

function Header() {
  const [isDarkMode, toggleMode] = useToggleMode();

  const router = useRouter();

  const handleBackHome = () => {
    router.push('/');
  };

  const openGitHubHomePage = () => {
    window.open('https://github.com/zbw-zbw/dev-toolbox');
  };

  return (
    <div className="header sticky top-0 z-50 w-full px-10 py-6">
      <Row align="middle">
        <Col span={4}>
          <div className="flex items-center cursor-pointer" onClick={handleBackHome}>
            <Image src="/logo.png" alt="logo" width={48} height={48} />
            <span className="ml-2 font-bold text-xl" style={{ color: '#52c41a' }}>
              Dev Toolbox
            </span>
          </div>
        </Col>
        <Col span={12} offset={2}>
          <div className="flex">
            <Input placeholder="请输入工具名称" allowClear autoFocus />
            <Button type="primary" className="ml-4">
              搜索
            </Button>
          </div>
        </Col>
        <Col span={4} offset={2} className="text-right">
          <Space size="large">
            <Tooltip title="中文 / English">
              <TranslationOutlined className="cursor-pointer" />
            </Tooltip>
            <Tooltip title={isDarkMode ? '日间模式' : '暗夜模式'}>
              <Image
                src={isDarkMode ? '/light.png' : '/dark.png'}
                alt="icon"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={toggleMode}
              ></Image>
            </Tooltip>
            <Tooltip title="GitHub">
              <GithubOutlined className="cursor-pointer" onClick={openGitHubHomePage} />
            </Tooltip>
          </Space>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
