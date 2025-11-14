import { MyContext } from '../contexts/MyContext';
import { memo, useState, useRef } from 'react'
import shareContext from '../hocs/shareContext';

// 使用memo对函数组件进行包裹，实现类组件的 PureComponent 效果
export default memo(function (props) {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("666");
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    console.log("函数组件的props：",props);
    // 非受控组件的变化事件
    const uncontrolledChange = (e) => {
        console.log(inputRef.current.value);
  }
    return (
        <MyContext.Consumer>
            {
                (value) => {
                    return (
                      <>
                        <input
                          type="text"
                          onChange={uncontrolledChange}
                          placeholder="非受控组件"
                          ref={inputRef}
                        ></input>
                        <input
                          type="text"
                          onChange={handleChange}
                          placeholder="函数式组件"
                          value={inputValue}
                        ></input>
                        {props.funcChildProps}
                        <h1>FuncChild 组件</h1>
                        <div>name:{value.name}</div>
                        <div>age:{value.age}</div>
                      </>
                    );
                }
            }
        </MyContext.Consumer>
    )
})