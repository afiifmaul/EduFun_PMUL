"use client";

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Ada yang bisa saya bantu?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Simpan pesan user
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    // Simulasi respon bot
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "user", text: input },
        {
          from: "bot",
          text: "Maaf, saya belum tersambung ke AI. Tapi saya di sini! 🤖",
        },
      ]);
    }, 500);

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold text-lg">Chatbot</h2>
            <button onClick={() => setIsOpen(false)}>✖️</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm p-2 rounded-md max-w-[75%] ${
                  msg.from === "user"
                    ? "bg-blue-100 ml-auto text-right"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ketik pesan..."
              className="flex-1 p-2 border rounded-md focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-amber-400 text-black px-3 py-1 rounded-md hover:bg-amber-500"
            >
              Kirim
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-amber-400 text-white rounded-full p-4 shadow-lg hover:bg-amber-500"
        >
          💬
        </button>
      )}
    </div>
  );
}
