import { openList } from "../../features/openSideList";
import { useAppDispatch } from "../../store/hooks";
import Logo from "../Logo";
import Button from "../ui/Button";
import { Menu } from "lucide-react";
export default function Header() {
  const dispatch = useAppDispatch();
  return (
    <header className="flex items-center justify-between overflow-hidden bg-gray-500 px-2 py-3">
      <Logo />
      <Button
        className="md:hidden"
        onClick={() => dispatch(openList())}
        aria-label="open sidelist"
      >
        <Menu className="h-10 w-10" aria-hidden="true" focusable="false" />
      </Button>
    </header>
  );
}
