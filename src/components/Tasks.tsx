import { removeTodo, toggleChecked } from "../features/todoSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import type { RootState } from "../store/store";
import TodoItem from "./ui/TaskItem";

export default function Todo() {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state: RootState) => state.todo.list);
  const currentItem = useAppSelector(
    (state: RootState) => state.todo.currentItem,
  );
  const currentList = list.find((el) => el.id === currentItem);

  return (
    <ul className="grid gap-2.5 p-3">
      {currentList &&
        currentList.task.map((el) => (
          <TodoItem
            key={el.id}
            id={el.id}
            text={el.text}
            isChecked={el.isChecked}
            onToggle={() => dispatch(toggleChecked(el.id))}
            onRemove={() => dispatch(removeTodo(el.id))}
          />
        ))}
    </ul>
  );
}
