import { Bot, CircleUserRound } from "lucide-react";

type chatProps = {
  chatType: "bot" | "user";
  messageText: string;
};

function ChatMessage({ chatType, messageText }: chatProps) {
  return (
    <div
      className={`${chatType === "bot" ? "float-left" : "float-right"} mb-4 w-4/5`}
    >
      <div
        className={`flex flex-col  ${chatType === "bot" ? "items-start" : "items-end"} gap-1`}
      >
        <div className={`ml-2 flex items-center gap-1.5 text-lg font-semibold`}>
          {chatType === "bot" ? (
            <>
              <Bot />
              <p>Bot</p>
            </>
          ) : (
            <>
              <CircleUserRound />
              <p className="pr-1">User</p>
            </>
          )}
        </div>
        <div
          className={`flex w-fit items-center ${chatType === "bot" ? "justify-start" : "justify-start"} rounded-xl bg-neutral-700/70 px-2.5 py-3`}
        >
          {messageText}
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
