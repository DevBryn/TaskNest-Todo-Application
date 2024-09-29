import React from "react";

export default function InprogressCounter({ count }) {
  function getLabel() {
    if (count == 1) {
      return "task remaining";
    } else if (count > 1) {
      return "tasks remaining";
    } else {
      return "in progress task";
    }
  }
  return (
    <div className="flex items-center gap-1">
      <div className="inprogress-indicator"></div>
      <p className="small-light-text">
        {count} {getLabel()}
      </p>
    </div>
  );
}
