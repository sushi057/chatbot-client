import ChatMessage from "./components/ChatMessage";

function App() {
  return (
    <main className="bg-background h-screen px-10 py-6">
      <div className="bg-primary h-full rounded-3xl p-10 text-white">
        <ChatMessage
          messageText="Can you hire a new employee?"
          chatType="user"
        />
        <ChatMessage
          messageText="Sure, what are the details of the new employee?"
          chatType="bot"
        />
      </div>
    </main>
  );
}

export default App;
