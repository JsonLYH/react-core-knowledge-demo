/**
 * 样式写法1
 * @param {*} props 
 * @returns 
 */
export function ClassWriteDemo(props) {
  return (
    <>
      <span className="test">类组件测试</span>
      <span className={true ? "active" : ""}>类组件测试</span>
      <span className={['active',true ? 'active1' : ''].join(' ')}>类组件测试</span>
    </>
  );
}