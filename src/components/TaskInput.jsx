"use client";
import Button from "./Button";
import { addTask } from "@/lib/actions/actions";

export default function TaskInput() {
  return (
    <form
      action={addTask}
      className="flex justify-between bg-slate-100 rounded-full border border-slate-300 md:h-12 items-center"
    >
      <input
        autoComplete="off"
        className="flex-1 h-14 md:h-12 pl-6 pr-2 bg-transparent text-md outline-none placeholder:text-slate-400 text-slate-700"
        placeholder="Add your task here."
        type="text"
        name="taskInput"
      />
      <div className="min-w-28">
        <Button label={"ADD"} />
      </div>
    </form>
  );
}
