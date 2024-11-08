'use client';

import { selectSearchResults, ToolItem } from '@/store/toolsSlice';
import { Col, Row, Card, message, Empty } from 'antd';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

function Index() {
  const router = useRouter();

  const searchResults = useSelector(selectSearchResults);

  const openPage = (item: ToolItem) => {
    if (item.url) {
      window.open(item.url);
    } else if (item.path) {
      router.push(item.path);
    } else {
      message.error('No URL or path provided for the tool');
      console.error('No URL or path provided for the tool:', item);
    }
  };

  return (
    <div className="page flex flex-col items-center mx-auto">
      <div className="card-content">
        {searchResults.length > 0 ? (
          <Row gutter={[40, 40]}>
            {searchResults.map((item) => (
              <Col key={item.title} span={6}>
                <Card
                  className="tool-card cursor-pointer"
                  title={
                    <div className="flex items-center">
                      <div className="tool-icon" dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                      <div className="ml-2 text-lg">{item.title}</div>
                    </div>
                  }
                  onClick={() => openPage(item)}
                >
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty
            className="empty-tools"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <>
                <div>未找到相关工具～</div>
                <div>换个关键词试试吧！</div>
              </>
            }
          />
        )}
      </div>
    </div>
  );
}

export default Index;
