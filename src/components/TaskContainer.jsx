import { FaRegCalendarAlt } from "react-icons/fa";
import TaskItem from "./TaskItem";
import { fetchTasks } from "@/lib/actions/actions";
import InprogressCounter from "./InprogressCounter";

export default async function TaskContainer({ inProgressCount }) {
  const alltasks = await fetchTasks();

  return (
    <>
      <div className="flex justify-between items-center h-[10%]">
        <h1 className="medium-text flex items-center gap-2">
          {<FaRegCalendarAlt />}
          Todo list
        </h1>
        <InprogressCounter count={inProgressCount} />
      </div>
      <div className="flex flex-col overflow-y-auto h-[90%]">
        {alltasks.map((item) => {
          return (
            <TaskItem
              id={item._id}
              iscompleted={item.isCompleted}
              key={item._id}
              title={item.title}
              description={item.description}
              timeStamp={item.updatedAt}
            />
          );
        })}
      </div>
    </>
  );
}
