import { Send } from "lucide-react";
import { Input } from "./ui/input";

function SearchBar() {
  return (
    <div className="flex items-center rounded-lg bg-neutral-700/70 pl-1 pr-4 font-sans">
      <Input
        type="text"
        className="rounded-lg border-none bg-neutral-700/0 font-semibold hover:border-none focus:border-none"
        placeholder="Type your message"
      />
      <Send className="cursor-pointer" />
    </div>
  );
}

export default SearchBar;
