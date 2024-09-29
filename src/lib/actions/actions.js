"use server";

import { revalidatePath } from "next/cache";
import { ConnectDB } from "../config/db";
import { TaskModel } from "../models/TodoModel";

// fetch all tasks
export const fetchTasks = async () => {
  try {
    await ConnectDB();
    const tasks = await TaskModel.find().sort("-updatedAt");
    return JSON.parse(JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

// fetch in progress total count
export const fetchInProgress = async () => {
  try {
    const inProgress = await TaskModel.find({ isCompleted: false });
    return JSON.parse(JSON.stringify(inProgress));
  } catch (error) {
    console.log(error);
  }
};

//get task using id
export const fetchTasksById = async (id) => {
  try {
    const tasks = await TaskModel.findById(id);
    return JSON.parse(JSON.stringify(tasks));
  } catch (error) {
    console.log(error);
  }
};

//delete single task
export const removeTask = async (id) => {
  try {
    await TaskModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/");
  }
};

// for adding task
export const addTask = async (formData) => {
  let { taskInput } = Object.fromEntries(formData);

  try {
    const newTask = new TaskModel({
      title: "Fix bug and issues",
      description: taskInput,
    });

    await newTask.save();
    return { message: "Success", status: 200 };
  } catch (error) {
    console.log(error);
    return { message: "An error occured.", status: 400 };
  } finally {
    revalidatePath("/");
  }
};

//for updating task title and description
export const updateTaskDetails = async (id, newTitle, newDesc) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(id);

    task.title = newTitle;
    task.description = newDesc;
    await task.save();
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath(`/edit-task/${id}`);
    revalidatePath("/");
  }
};

// for updating task to done/in progress
export const updateTaskStatus = async ({ id, currentStatus }) => {
  try {
    const task = await TaskModel.findById(id);

    task.isCompleted = !currentStatus;
    await task.save();

    return { success: true };
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath("/");
  }
};
