import { ConfigProvider, Col, Row, Input, Button, Card } from 'antd';
import theme from '@/theme/themeConfig';

import dayjs from 'dayjs';

const cards = [
  {
    name: 'card1',
    path: '/card1',
  },
  {
    name: 'card2',
    path: '/card2',
  },
  {
    name: 'card3',
    path: '/card3',
  },
  {
    name: 'card4',
    path: '/card4',
  },
  {
    name: 'card5',
    path: '/card5',
  },
  {
    name: 'card6',
    path: '/card6',
  },
  {
    name: 'card7',
    path: '/card7',
  },
  {
    name: 'card8',
    path: '/card8',
  },
  {
    name: 'card9',
    path: '/card9',
  },
  {
    name: 'card10',
    path: '/card10',
  },
  {
    name: 'card11',
    path: '/card11',
  },
  {
    name: 'card12',
    path: '/card12',
  },
];

function Home() {
  return (
    <ConfigProvider theme={theme}>
      <div className="page-container flex flex-col h-screen m-auto p-10" style={{ width: 1280 }}>
        <div className="header mb-20">
          <Row align="middle" gutter={10}>
            <Col span={6}>
              <img className="cursor-pointer" src="./logo.png" alt="logo" width={100} />
            </Col>
            <Col span={12}>
              <div className="flex">
                <Input allowClear autoFocus />
                <Button type="primary" className="ml-4">
                  搜索
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="content flex-1">
          <Row gutter={[24, 24]}>
            {cards.map((item) => (
              <Col key={item.name} span={6}>
                <Card title={item.name} extra={<a href={item.path}>更多</a>}>
                  <p>{item.name}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        <div className="footer text-center text-black">
          Copyright © 2023 | {dayjs().format('YYYY-MM-DD')}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Home;
