import TaskInput from "@/components/TaskInput";
import ProgressCard from "@/components/ProgressCard";
import TaskContainer from "@/components/TaskContainer";
import { GiProgression } from "react-icons/gi";
import { fetchInProgress } from "@/lib/actions/actions";

export default function Home() {
  const getInprogressCount = async () => {
    const inProgress = await fetchInProgress();
    return inProgress.length;
  };

  return (
    <main className="bg-inherit h-[85vh] px-4 min-w-[350px]">
      <div className="h-[35%] flex flex-col sm:gap-2 sm:py-4">
        <TaskInput />
        <h1 className="medium-text flex items-baseline gap-2 mt-2">
          {<GiProgression />}
          Track your progress
        </h1>
        <ProgressCard inProgressCount={getInprogressCount()} />
      </div>
      <div className="h-[65%]">
        <TaskContainer inProgressCount={getInprogressCount()} />
      </div>
    </main>
  );
}
