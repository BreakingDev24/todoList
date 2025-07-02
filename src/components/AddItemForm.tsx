import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

interface FormProps {
  onSubmit: (input: string) => void;
  placeholder: string;
  buttonText: string;
  name: string;
}

export default function AddItemForm({
  onSubmit,
  placeholder,
  buttonText,
  name,
}: FormProps) {
  const [input, setInput] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    onSubmit(trimmedInput);
    setInput("");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex h-fit w-full shrink-1 border border-red-500"
    >
      <Input
        name={name}
        className="min-w-0 flex-grow"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button className="" type="submit">
        {buttonText}
      </Button>
    </form>
  );
}
