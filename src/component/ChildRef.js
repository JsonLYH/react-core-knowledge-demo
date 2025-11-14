import { forwardRef, memo } from "react";
export default memo(forwardRef((props, ref) => {
    return (
      <>
        <div>
          <input ref={ref} placeholder="forwardRef转发演示"></input>
        </div>
      </>
    );
}))
