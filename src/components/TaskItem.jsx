"use client";

import Link from "next/link";
import DateLabel from "./DateLabel";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import RemoveTaskIcon from "./RemoveTaskIcon";
import { updateTaskStatus } from "@/lib/actions/actions";

export default function TaskItem({
  id,
  iscompleted,
  title,
  description,
  timeStamp,
}) {
  //for marking task as done/in progress
  async function updateStatus(id, currentStatus) {
    try {
      const isUpdateSuccess = await updateTaskStatus({ id, currentStatus });

      if (isUpdateSuccess.success) {
        console.log("Success");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={iscompleted ? "done-card-item" : "inprogress-card-item"}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {iscompleted ? (
            <MdCheckBox
              onClick={() => updateStatus(id, iscompleted)}
              className="text-green-300 md:size-5 hover:size-6 cursor-pointer"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={() => updateStatus(id, iscompleted)}
              className="md:size-5 cursor-pointer hover:size-6"
            />
          )}
          <Link
            href={`/edit-task/${id}`}
            className={`font-medium cursor-pointer hover:underline flex gap-2 items-center ${
              iscompleted ? "line-through" : ""
            }`}
          >
            {title}
            <div
              className={
                iscompleted ? "done-indicator" : "inprogress-indicator"
              }
            ></div>
          </Link>
        </div>
        <RemoveTaskIcon id={id} isCompleted={iscompleted} />
      </div>
      <p className="mt-2 text-sm">{description}</p>
      <DateLabel timeStamp={timeStamp} isCompleted={iscompleted} />
    </div>
  );
}
