import ChatMessage from "./components/ChatMessage";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main className="bg-background h-screen px-10 py-6">
      <div className="bg-primary flex h-full flex-col justify-between rounded-3xl p-10 text-white">
        <section>
          <ChatMessage
            messageText="Can you hire a new employee?"
            chatType="user"
          />
          <ChatMessage
            messageText="Sure, what are the details of the new employee?"
            chatType="bot"
          />
        </section>
        <SearchBar />
      </div>
    </main>
  );
}

export default App;
