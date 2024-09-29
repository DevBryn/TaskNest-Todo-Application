import { FaEdit } from "react-icons/fa";
import EditTaskForm from "@/components/EditTaskForm";
import RemoveTaskIcon from "@/components/RemoveTaskIcon";
import { fetchTasksById, removeTask } from "@/lib/actions/actions";

export default async function page({ params }) {
  const singleTask = await fetchTasksById(params.id);

  return (
    <main className="bg-inherit h-[85vh] px-4 min-w-[350px] flex flex-col">
      <div className="flex justify-between items-center h-[8%]">
        <h1 className="medium-text flex gap-2 items-center">
          {<FaEdit />}
          Edit task
        </h1>
        <div className=" flex gap-2 items-center">
          <div
            className={`${
              singleTask.isCompleted ? "done-indicator" : "inprogress-indicator"
            }`}
          ></div>
          <p className="small-light-text">
            {singleTask.isCompleted ? "Task Done" : "Task In progress"}
          </p>
        </div>
      </div>
      <div className="h-[92%]">
        <EditTaskForm Task={singleTask} />
      </div>
    </main>
  );
}
