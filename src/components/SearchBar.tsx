import { Send } from "lucide-react";
import { Input } from "./ui/input";

function SearchBar({
  handleClick,
  inputText,
  setInputText,
}: {
  handleClick: () => void;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex items-center rounded-lg bg-neutral-700/70 py-0.5 pl-1 pr-4">
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(inputText);
            setInputText("");
            handleClick();
          }
        }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        className="rounded-lg border-none bg-neutral-700/0 font-semibold hover:border-none focus:border-none"
        placeholder="Type your message"
      />
      <Send
        className="cursor-pointer text-green-600 hover:brightness-150"
        onClick={() => {
          setInputText("");
          handleClick();
        }}
      />
    </div>
  );
}

export default SearchBar;
