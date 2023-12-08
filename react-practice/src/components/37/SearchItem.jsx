import React, { memo } from "react";

function SearchItem(props) {
  return <div onClick={props.onClick}>{props.title}</div>;
}

export default memo(SearchItem);
