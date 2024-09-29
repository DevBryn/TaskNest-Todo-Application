import { removeTask } from "@/lib/actions/actions";
import { FaTrashAlt } from "react-icons/fa";

export default function RemoveTaskIcon({ id, isCompleted }) {
  return isCompleted ? (
    <FaTrashAlt
      onClick={async () => await removeTask(id)}
      className="cursor-pointer text-slate-200 hover:text-slate-50"
    />
  ) : (
    <FaTrashAlt
      onClick={async () => await removeTask(id)}
      className="cursor-pointer text-slate-700 hover:text-slate-500"
    />
  );
}
