import { addList } from "../../features/todoSlice";
import { useAppDispatch } from "../../store/hooks";
import AddItemForm from "../AddItemForm";
import { Lists } from "./Lists";

export default function ListsPanel() {
  const dispatch = useAppDispatch();
  const handleAddList = (text: string) => {
    dispatch(addList(text));
  };
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-7 p-4 pb-3">
      <AddItemForm
        name="input list"
        placeholder="add new list"
        buttonText="Add"
        onSubmit={handleAddList}
      />
      <div className="custom-scrollbar flex-1 overflow-y-auto">
        <Lists />
      </div>
    </div>
  );
}
