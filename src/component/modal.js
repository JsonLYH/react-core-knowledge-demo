import { PureComponent } from "react";
import { createPortal} from 'react-dom'
/**
 * Portals的使用
 * 弹窗组件
 */
export class Modal extends PureComponent {
    constructor(props) { 
        super(props)
    }
    render() { 
        return createPortal(
            this.props.children,
            document.getElementById('modal')
        )
    }
}