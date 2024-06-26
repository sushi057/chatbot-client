import { useEffect, useRef, useState } from "react";
import ChatMessage from "./components/ChatMessage";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { v4 as uuid } from "uuid";

type messagesProps = {
  chatType: "bot" | "user";
  chatText: string;
};

function App() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<messagesProps[]>([
    {
      chatType: "bot",
      chatText:
        "Hello, I'm a recruitment bot at Niural. How can I help you today?",
    },
  ]);
  const messageRef = useRef<HTMLDivElement>(null);

  const handleClick = async () => {
    if (!inputText.trim()) {
      setInputText("");
      return;
    }
    // add user message to messages array
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        chatType: "user",
        chatText: inputText,
      },
    ]);

    // fetch response from api
    const response = await axios.post(
      "https://chatbot-server-lake.vercel.app/ask",
      {
        question: inputText,
      },
    );
    console.log(response.data);

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        chatType: "bot",
        chatText: response.data.output,
      },
    ]);

    console.log(messages);

    // Finish operation
    setInputText("");
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <main className="h-screen bg-neutral-700/70 px-14 py-6">
      <div className="relative flex h-full flex-col justify-between overflow-scroll rounded-3xl bg-primary p-10 pb-4 pr-4 text-white scrollbar">
        <section>
          {messages.map((item) => (
            <ChatMessage
              key={uuid()}
              chatText={item.chatText}
              chatType={item.chatType}
            />
          ))}
        </section>
        <div ref={messageRef} />
        <SearchBar
          handleClick={handleClick}
          inputText={inputText}
          setInputText={setInputText}
        />
      </div>
    </main>
  );
}

export default App;
