import { Bot, SquareUser } from "lucide-react";

type chatProps = {
  chatType: "bot" | "user";
  chatText: string;
};

function ChatMessage({ chatType, chatText }: chatProps) {
  return (
    <div
      className={`${chatType === "bot" ? "float-left" : "float-right"} mb-4 w-4/5`}
    >
      <div
        className={`flex flex-col  ${chatType === "bot" ? "items-start" : "items-end"} gap-1`}
      >
        <div className={`ml-2 flex items-end gap-0.5 text-sm font-semibold`}>
          {chatType === "bot" ? (
            <>
              <Bot />
              <p>Bot</p>
            </>
          ) : (
            <>
              <SquareUser />
              <p className="pr-2">User</p>
            </>
          )}
        </div>
        <div
          className={`flex w-fit items-center ${chatType === "bot" ? "justify-start" : "justify-start bg-green-600"} rounded-xl bg-neutral-700/70 px-3 py-2`}
        >
          {chatText}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
