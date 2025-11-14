import './App.css';
import { Child } from './component/Child';
import { MyContext } from './contexts/MyContext';
import FuncChild from './component/FuncChild';
import LoginAuth from './utils/loginAuth';
import LifeInterceptTest from './component/LifeInterceptTest';
import lifeCycleIntercept from './hocs/lifeCycleIntercept';
import ChildRef from './component/ChildRef';
import { useRef, useEffect } from 'react';
import { Modal } from './component/modal'
import { Slots1Test } from './component/Slots1Test'
import { Slots2Test } from './component/Slots2Test'
import { Slots3Test } from './component/Slots3Test'
import { StyledDemo } from './component/StyledDemo'
import { StyleInheritDemo } from './component/StyleInheritDemo'
import { ClassWriteDemo1 } from './component/ClassWriteDemo1'
import { ClassWriteDemo } from './component/ClassWriteDemo'
import testCss from './cssModules/test.module.css'
import { PropTypeByClassComponentDemo } from "./component/PropTypeByClassComponentDemo"
import ReduxDemo from './component/ReduxDemo'



function App() {
  //利用HOC进行登录认证拦截例子
  let AuthComponent = LoginAuth(Child);
  //根据HOC进行生命周期拦截例子
  let LifeCycleIntercept = lifeCycleIntercept(LifeInterceptTest);
  // 子组件转发出来的ref
  let childRef = useRef(null);
  // 子组件的变化事件--空依赖数组，只在组件挂载时执行一次
  useEffect(() => {
    if (childRef.current) {
      childRef.current.focus();
    }
  }, []);
  const left = <span>插槽3-left</span>
  const middle = <span>插槽3-middle</span>
  return (
    <div className="App">
      <ReduxDemo></ReduxDemo>
      <PropTypeByClassComponentDemo name="张三44"></PropTypeByClassComponentDemo>
      <button className={testCss.btn}>测试cssModules</button>
      <button className={testCss.btn1}>测试cssModules</button>
      <ClassWriteDemo1></ClassWriteDemo1>
      <ClassWriteDemo></ClassWriteDemo>
      <StyledDemo></StyledDemo>
      <h1>App 组件</h1>
      <Child name="666" />
      <MyContext.Provider value={{ name: "777", age: 18 }}>
        <FuncChild funcChildProps="函数组件的props" />
      </MyContext.Provider>
      <AuthComponent></AuthComponent>
      <LifeCycleIntercept></LifeCycleIntercept>
      <ChildRef ref={childRef}></ChildRef>
      <Modal>
        <span>666</span>
        <button>关闭</button>
      </Modal>
      <Slots1Test>
        <span>插槽1-children[0]</span>
        <span>插槽1-children[1]</span>
      </Slots1Test>
      <Slots2Test>
        <span>插槽2-children[0]</span>
        <span>插槽2-children[1]</span>
      </Slots2Test>
      <Slots3Test left={left} middle={middle}></Slots3Test>
      <StyleInheritDemo></StyleInheritDemo>
    </div>
  );
}

export default App;
