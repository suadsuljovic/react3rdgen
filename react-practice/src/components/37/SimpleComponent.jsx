import { memo } from "react";

function SimpleComponent() {
  console.log("simple rerender");
  return <div>SimpleComponent</div>;
}

export default memo(SimpleComponent);
