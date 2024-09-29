import React from "react";

export default function DateLabel({ timeStamp, isCompleted }) {
  function dateTime() {
    const dateAdded = new Date(timeStamp);
    const dateToday = new Date();
    let options = { timeZone: "Asia/Manila", dateStyle: "full" };

    const finalDateAdded = dateAdded.toLocaleString("en-US", options);
    if (finalDateAdded === dateToday.toLocaleString("en-US", options)) {
      // get time added
      const finalTimeAdded = dateAdded.toLocaleString("en-US", {
        timeZone: "Asia/Manila",
        timeStyle: "short",
      });

      return `Today at ${finalTimeAdded}`;
    } else {
      return finalDateAdded;
    }
  }

  return isCompleted ? (
    <p className="text-xs text-slate-300">{dateTime()}</p>
  ) : (
    <p className="text-xs text-slate-400">{dateTime()}</p>
  );
}
