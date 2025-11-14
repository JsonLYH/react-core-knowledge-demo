import classNames from "classnames";

/**
 * 样式写法1
 * @param {*} props
 * @returns
 */
export function ClassWriteDemo1(props) {
  const styleDemo = classNames({
    test: true,
    active: true,
  });
  return (
    <>
      <span className={styleDemo}>classNames测试</span>
      <span className={true ? "active" : ""}>classNames测试</span>
      <span className={["active", true ? "active1" : ""].join(" ")}>
        类组件测试
      </span>
    </>
  );
}
