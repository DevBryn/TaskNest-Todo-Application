import React from "react";
import { fetchTasks } from "@/lib/actions/actions";

export default function ProgressCard({ inProgressCount }) {
  // fetch all task total count
  const getAllTasksCount = async () => {
    const allTaskCount = await fetchTasks();
    return allTaskCount.length;
  };

  return (
    <div className="progress-card flex items-center justify-between">
      <div className="">
        <h1 className="large-text">Hooray!</h1>
        <p className="normal-text font-medium">You are almost there.</p>
        <p className="normal-text text-sm mt-4">
          {inProgressCount} tasks remaining out of {getAllTasksCount()}
        </p>
      </div>
      <div className="">
        <div>Image</div>
      </div>
    </div>
  );
}
