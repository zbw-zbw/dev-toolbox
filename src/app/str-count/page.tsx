import { Input } from 'antd';

function StrCount() {
  return (
    <div className="sub-page">
      <h2 className="mb-4 text-xl font-bold">字符统计：</h2>
      <Input.TextArea placeholder="请把内容粘贴到此处" maxLength={100000000} rows={20} showCount autoFocus allowClear />
    </div>
  );
}

export default StrCount;
