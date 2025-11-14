import { PureComponent } from "react";

export default function (Component) { 
    return class extends PureComponent { 
        componentDidMount() {
            console.log("组件挂载完成");
        }
        render() { 
            return <Component {...this.props} />
        }
    }
}