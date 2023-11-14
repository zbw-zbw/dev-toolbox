import TextArea from 'antd/es/input/TextArea';

function StrCount() {
  return (
    <div className="w-full mx-auto">
      <h2 className="mb-4 text-xl font-bold">字符统计：</h2>
      <TextArea placeholder="请把内容粘贴到此处" maxLength={100000000} rows={20} showCount autoFocus />
    </div>
  );
}

export default StrCount;
