import { Button } from "@/components";
import { MdSubtitles } from "react-icons/md";
import { BsFillCalendarEventFill } from "react-icons/bs";

interface TaskCardProps {
  title: string;
  createdAt: string;
}

const TaskCard = ({ title, createdAt }: TaskCardProps): JSX.Element => {
  const date = new Date(createdAt);
  return (
    <div className=" m-2 flex flex-col items-center p-4 bg-white border-2 border-black rounded-[10px]   justify-between">
      <div className="min-h-[150px] text-base">
        <div className="w-full border-b border-black">
          {title && (
            <div className="text-center flex justify-center items-center">
              <div className="text-doit-orange-text">
                <MdSubtitles />
              </div>
              <p className="ml-1 font-bold">{title}</p>
            </div>
          )}
        </div>
        {createdAt && (
          <div className="flex justify-center items-center">
            <div className="text-doit-orange-text">
              <BsFillCalendarEventFill />
            </div>
            <p className="ml-1">{date.toLocaleString()}</p>
          </div>
        )}
      </div>

      <Button customStyle="secondary">Concluir</Button>
    </div>
  );
};

export default TaskCard;
