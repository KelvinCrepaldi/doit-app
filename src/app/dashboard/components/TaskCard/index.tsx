import { BsFillCalendarEventFill } from "react-icons/bs";
import CheckButton from "../CheckButton";

interface TaskCardProps {
  task: { title: string; createdAt: string; id: string };
}

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  const date = new Date(task.createdAt);

  return (
    <div className="h-full w-full m-1 flex md:flex-col items-center p-2 md:p-4 bg-[rgb(255,255,255,0.3)] border-2 border-black rounded-[10px] justify-between">
      <div className=" text-base">
        <div className="w-full border-b border-black">
          {task && (
            <div className="text-center ">
              <p className="ml-1 font-bold">
                <span className="text-doit-orange-text"></span>
                {task.title}
              </p>
            </div>
          )}
        </div>
        {task && (
          <div className="flex justify-center items-center">
            <div className="text-doit-orange-text">
              <BsFillCalendarEventFill />
            </div>
            <p className="ml-1">{date.toLocaleString()}</p>
          </div>
        )}
      </div>

      <CheckButton id={task.id} />
    </div>
  );
};

export default TaskCard;
