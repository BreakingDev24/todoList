import { ChevronLeft } from "lucide-react";
import Button from "../ui/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeList, selectIsListOpen } from "../../features/openSideList";
import cn from "../../utils/cn";

import ListsPanel from "../lists";

export default function SideList({ className }: { className?: string }) {
  const isListOpen = useAppSelector(selectIsListOpen);
  const dispatch = useAppDispatch();

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
      <ListsPanel />
    </aside>
  );
}
