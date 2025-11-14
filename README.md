# useEffect 场景
![alt text](image-1.png)
## 1、每次渲染后都执行
```js
useEffect(() =>
{
// 每次组件渲染后都会执行
console.log('组件已渲染或更新');
});
```
## 2、仅在组件挂载时执行
```js
useEffect(() =>
{
// 只在组件挂载时执行一次
console.log('组件已挂载');
return () =>
{
// 清理函数，在组件卸载时执行
console.log('组件即将卸载');
};
}, []);
// 空依赖数组
```
## 3、依赖特定值变化时执行
```js
useEffect(() =>
{
// 当 count 或 name 变化时执行
console.log(`Count: ${count
}, Name: ${name
}`);
return () =>
{
// 清理上一次的 effect
console.log('清理上一次的 effect');
};
}, [count, name]);
// 依赖数组
```
# classnames 库结合css模块使用
```
import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ primary, size }) => {
  const buttonClass = classNames(styles.btn, {
    [styles.primary]: primary,
    [styles.large]: size === 'large',
    [styles.small]: size === 'small',
  });

  return (
    <button className={buttonClass}>
      Button
    </button>
  );
};

export default Button;
```
# classnames 库结合styled-components使用
```
import styled from 'styled-components';
import classNames from 'classnames';

const StyledButton = styled.button`
  &.btn-primary {
    background-color: blue;
  }
  &.btn-large {
    font-size: 1.5em;
  }
`;

const Button = ({ primary, size }) => {
  const buttonClass = classNames('btn', {
    'btn-primary': primary,
    'btn-large': size === 'large',
  });

  return (
    <StyledButton className={buttonClass}>
      Button
    </StyledButton>
  );
};

export default Button;
```