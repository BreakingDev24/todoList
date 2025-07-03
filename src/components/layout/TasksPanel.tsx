import { addTodo } from "../../features/todoSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import type { RootState } from "../../store/store";
import cn from "../../utils/cn";
import AddItemForm from "../AddItemForm";
import Tasks from "../Tasks";

export default function TasksPanel({ className }: { className?: string }) {
  const list = useAppSelector((state: RootState) => state.todo.list);
  const currentItem = useAppSelector(
    (state: RootState) => state.todo.currentItem,
  );
  const currentList = list.find((el) => el.id === currentItem);
  const dispatch = useAppDispatch();
  const handleAddTask = (text: string) => {
    dispatch(addTodo(text));
  };
  return (
    <section className={cn("flex flex-col gap-2 bg-gray-100 p-3", className)}>
      <h1>{currentList?.text}</h1>
      <div>
        {/* form */}
        <AddItemForm
          name="input task"
          placeholder="add task"
          buttonText="add"
          onSubmit={handleAddTask}
        />
      </div>

      <div className="flex-1 overflow-scroll">
        <Tasks />
      </div>
    </section>
  );
}
