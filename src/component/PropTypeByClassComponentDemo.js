import { PureComponent } from "react";
export class PropTypeByClassComponentDemo extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>姓名：{this.props.name}</p>
        <p>年龄：{this.props.age}</p>
      </div>
    );
  }
}
