"use client";
import { useState } from "react";
import Button from "./Button";
import Loading from "./Loading";
import { updateTaskDetails } from "@/lib/actions/actions";

export default function EditTaskForm({ Task }) {
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const { title, description } = Object.fromEntries(formData.entries());

    if (!title || !description) {
      alert("Please add title or description.");
    } else {
      setIsLoading(true);
      await updateTaskDetails(Task._id, title, description);
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-2 h-full">
      <input
        autoComplete="off"
        className="h-14 bg-slate-100 border border-slate-300 rounded-full text-center large-text"
        type="text"
        name="title"
        defaultValue={Task.title}
      />
      <textarea
        className="bg-slate-100 rounded-2xl border border-indigo-900 p-2 normal-text overflow-y-auto h-[70%]"
        name="description"
        defaultValue={Task.description}
      ></textarea>
      {isLoading ? <Loading /> : <Button label={"SAVE"} />}
    </form>
  );
}
