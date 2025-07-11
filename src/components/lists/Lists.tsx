import { setCurrentList, removeList } from "../../features/todoSlice.ts";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import cn from "../../utils/cn.ts";
import { ListItem } from "./ListItem.tsx";

interface ListProps {
  className?: string;
}

export function Lists({ className }: ListProps) {
  const lists = useAppSelector((state) => state.todo.list);
  const selectedList = useAppSelector((state) => state.todo.currentItem);
  const dispatch = useAppDispatch();
  return (
    <ul className={cn("grid gap-1", className)}>
      {lists.map((list) => (
        <ListItem
          key={list.id}
          title={list.text}
          isActive={list.id === selectedList}
          onClick={() => dispatch(setCurrentList(list.id))}
          onDelete={() => dispatch(removeList(list.id))}
        />
      ))}
    </ul>
  );
}
