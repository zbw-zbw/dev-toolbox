'use client';

import Image from 'next/image';
import { Col, Row, Input, Button, Card, Tooltip, Space } from 'antd';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import { GithubOutlined, TranslationOutlined } from '@ant-design/icons';

import { tools } from './config';
import useToggleMode from '@/hooks/useToggleMode';

function Home() {
  const today = dayjs().format('YYYY-MM-DD');

  const router = useRouter();

  const [isDarkMode, toggleMode] = useToggleMode();

  const handlePushRoute = (path: string) => {
    router.push(path);
  };

  const openGitHubHomePage = () => {
    window.open('https://github.com/zbw-zbw/dev-toolbox');
  };

  return (
    <div className="flex flex-col h-screen m-auto p-10" style={{ width: 1280 }}>
      <div className="w-full pb-10">
        <Row align="middle">
          <Col span={6}>
            <div className="flex items-center">
              <Image className="cursor-pointer ml-20" src="/logo.png" alt="logo" width={48} height={48} />
              <span className="ml-2 font-bold text-xl" style={{ color: '#52c41a' }}>
                Dev Toolbox
              </span>
            </div>
          </Col>
          <Col span={12}>
            <div className="flex">
              <Input placeholder="请输入工具名称" allowClear autoFocus />
              <Button type="primary" className="ml-4">
                搜索
              </Button>
            </div>
          </Col>
          <Col span={6} className="text-right">
            <Space size="large">
              <Tooltip placement="top" title="中文 / English">
                <TranslationOutlined className="cursor-pointer" />
              </Tooltip>
              <Tooltip placement="top" title={isDarkMode ? '日间模式' : '暗夜模式'}>
                <Image
                  src={isDarkMode ? '/light.png' : '/dark.png'}
                  alt="icon"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={toggleMode}
                ></Image>
              </Tooltip>
              <Tooltip placement="top" title="GitHub">
                <GithubOutlined className="cursor-pointer" onClick={openGitHubHomePage} />
              </Tooltip>
            </Space>
          </Col>
        </Row>
      </div>
      <div className="flex-1">
        <Row gutter={[20, 20]}>
          {tools.map((item) => (
            <Col key={item.title} span={6}>
              <Card
                className="tool-card cursor-pointer"
                title={
                  <div className="flex items-center">
                    <Image src={item.icon} alt="icon" width={24} height={24}></Image>
                    <div className="ml-1 text-lg">{item.title}</div>
                  </div>
                }
                onClick={() => handlePushRoute(item.path)}
                // extra={
                //   <a href={item.path} className="text-sm">
                //     开始使用
                //   </a>
                // }
              >
                <div className="text-sm text-gray-500">{item.desc}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="p-10 text-center">Copyright © 2023 | {today}</div>
    </div>
  );
}

export default Home;
