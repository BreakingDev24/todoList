import { ChevronLeft } from "lucide-react";
import Button from "../ui/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addList } from "../../features/todoSlice";
import Lists from "../Lists";
import { closeList, selectIsListOpen } from "../../features/openSideList";
import cn from "../../utils/cn";
import AddItemForm from "../AddItemForm";

export default function SideList({ className }: { className?: string }) {
  const isListOpen = useAppSelector(selectIsListOpen);
  const dispatch = useAppDispatch();
  const handleAddList = (text: string) => {
    dispatch(addList(text));
  };
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 flex h-full w-0 flex-col overflow-hidden bg-gray-300 pt-1.5 transition-[width] duration-500 ease-in-out",
        isListOpen && "w-full",
        "h-full md:static md:w-54",
        className,
      )}
    >
      <Button
        className="self-end md:hidden"
        onClick={() => dispatch(closeList())}
      >
        <ChevronLeft></ChevronLeft>
      </Button>
      <div className="flex min-h-0 flex-1 flex-col gap-7 p-4 pb-3">
        <AddItemForm
          name="input list"
          placeholder="add new list"
          buttonText="Add"
          onSubmit={handleAddList}
        />
        <div className="flex-1 overflow-y-scroll">
          <Lists />
        </div>
      </div>
    </aside>
  );
}
