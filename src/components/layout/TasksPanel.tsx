import cn from "../../utils/cn";

import Tasks from "../tasks";

export default function TasksPanel({ className }: { className?: string }) {
  return (
    <section className={cn("bg-gray-100 p-3", className)}>
      <Tasks />
    </section>
  );
}
