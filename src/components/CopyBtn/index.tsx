import { Button, message } from 'antd';
import copy from 'copy-to-clipboard';

interface IProps {
  value: string;
}

function CopyBtn({ value }: IProps) {
  const handleCopy = () => {
    try {
      copy(value);
      message.success('复制成功');
    } catch (error) {
      message.error('复制失败');
      console.error('Copy error:', JSON.stringify(error));
    }
  };

  return (
    <Button type="primary" className="ml-8 mr-8" onClick={handleCopy}>
      复制
    </Button>
  );
}

export default CopyBtn;
