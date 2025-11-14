// 插槽案例
export function Slots2Test(props) {
    return (
      <div>
        <h1>插槽案例2</h1>
        {props.children[0]}
        {props.children[1]}
      </div>
    );
}