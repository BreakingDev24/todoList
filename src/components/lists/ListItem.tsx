import { Trash2 } from "lucide-react";
import Button from "../ui/Button";
import clsx from "clsx";

interface ListItemProps {
  title?: string;
  isActive?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

export function ListItem({
  title,
  isActive,
  onClick,
  onDelete,
  ...props
}: ListItemProps) {
  return (
    <li
      className={clsx(
        "flex items-center justify-between overflow-x-hidden rounded-md px-2 py-1 transition duration-150",
        isActive ? "bg-blue-500 text-white" : "",
      )}
      {...props}
    >
      <Button
        className="flex-1 truncate text-left text-xl md:text-base"
        onClick={onClick}
        aria-pressed={isActive}
        aria-label={`Select list ${title}`}
      >
        {title}
      </Button>

      {isActive && (
        <Button
          onClick={onDelete}
          className="shrink-0 text-white"
          aria-label={`Delete list ${title}`}
        >
          <Trash2 aria-hidden="true" focusable="false" />
        </Button>
      )}
    </li>
  );
}
