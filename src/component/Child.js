import { Component, PureComponent,createRef } from "react";
export class Child extends PureComponent {
    constructor(props) { 
        super()
        this.props = props;
        this.inputRef = createRef();
    }
    // 非受控组件的变化事件
    uncontrolledChange = (e) => {
        console.log(this.inputRef.current.value);
    }
    render() {
        let { name } = this.props;
        return (
          <>
            <input
              ref={this.inputRef}
              onChange={this.uncontrolledChange}
              type="text"
              placeholder="类组件"
            />
            <div>name:{name}</div>
            <h1>Child 组件</h1>
          </>
        );
  }
}