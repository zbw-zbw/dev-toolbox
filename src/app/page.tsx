'use client';

import Image from 'next/image';
import { Col, Row, Card } from 'antd';
import { useRouter } from 'next/navigation';

import { tools } from './config';

function Home() {
  const router = useRouter();

  const handlePushRoute = (path: string) => {
    router.push(path);
  };

  return (
    <Row gutter={[20, 20]}>
      {tools.map((item) => (
        <Col key={item.title} span={6}>
          <Card
            className="tool-card cursor-pointer"
            title={
              <div className="flex items-center">
                <Image src={item.icon} alt="icon" width={24} height={24}></Image>
                <div className="ml-2 text-lg">{item.title}</div>
              </div>
            }
            onClick={() => handlePushRoute(item.path)}
          >
            <div className="text-sm text-gray-500">{item.desc}</div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Home;
