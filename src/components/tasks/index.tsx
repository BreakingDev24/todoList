import { addTask } from "../../features/todoSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store/store";
import AddItemForm from "../AddItemForm";
import { EmptyListMessage } from "./EmptyListMessage";
import { TasksHeading } from "./TasksHeading";
import { TasksList } from "./TasksList";

export default function Tasks() {
  const list = useAppSelector((state: RootState) => state.todo.list);
  const currentItem = useAppSelector(
    (state: RootState) => state.todo.currentItem,
  );
  const currentList = list.find((el) => el.id === currentItem);
  const dispatch = useAppDispatch();
  const handleAddTask = (text: string) => {
    dispatch(addTask(text));
  };

  if (list.length === 0 || !currentList)
    return (
      <div className="h-full">
        <EmptyListMessage />
      </div>
    );
  return (
    <div className="flex h-full flex-col gap-5">
      {/* list title */}
      <TasksHeading listTitle={currentList?.text} />

      {/* form */}
      <div>
        <AddItemForm
          name="input task"
          placeholder="add task"
          buttonText="add"
          onSubmit={handleAddTask}
        />
      </div>

      {/* task list */}
      <div className="custom-scrollbar flex-1 overflow-y-auto">
        <TasksList />
      </div>
    </div>
  );
}
