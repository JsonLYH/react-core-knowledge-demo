/**
 * 利用高阶组件来共享Context
 */
import { MyContext } from "../contexts/MyContext";
export default function (Componetn) {
  return function (props) {
    return (
      <MyContext.Consumer>
        {(value) => <Componetn {...props} {...value} />}
      </MyContext.Consumer>
    );
  };
}
