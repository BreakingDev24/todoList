import { tv } from "tailwind-variants";
import Button from "../ui/Button";
import { Trash } from "lucide-react";

interface TaskItemProps {
  text: string;
  id: string;
  isChecked: boolean;
  onToggle?: () => void;
  onRemove?: () => void;
}

const taskItem = tv({
  slots: {
    root: "flex items-center justify-between gap-1.5 overflow-hidden",
    text: "flex-1 truncate text-xl",
  },

  variants: {
    isChecked: {
      true: {
        text: "text-gray-400 line-through",
      },
      false: {
        text: "text-gray-900",
      },
    },
  },
});

export default function TaskItem({
  text,
  id,
  isChecked,
  onToggle,
  onRemove,
}: TaskItemProps) {
  const { root, text: textSlot } = taskItem({ isChecked });
  return (
    <li key={id} className={root()}>
      <input
        type="checkbox"
        onChange={onToggle}
        checked={isChecked}
        aria-label={`Mark task "${text}" as ${isChecked ? "incomplete" : "complete"}`}
      />
      <span className={textSlot()}>{text}</span>
      <Button onClick={onRemove}>
        <Trash aria-hidden="true" focusable="false" />
      </Button>
    </li>
  );
}
