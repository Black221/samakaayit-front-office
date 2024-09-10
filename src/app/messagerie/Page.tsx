import { useState } from "react";
import ChatItem from "../../components/messagerie/ChatItem";

const chats = [
  {
    id: 1,
    name: "Lt Abdoulaye Diallo (Police Nationale)",
    message: "Bonsoir, il nous faut une synthèse...",
    time: "03:45",
    active: true,
  },
  {
    id: 2,
    name: "Lt Abdoulaye Diallo (Police Nationale)",
    message: "Bonsoir, il nous faut une synthèse...",
    time: "03:45",
    active: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Madipo Diop",
    text: "Salut, ça roule et toi? Toujours en train de jongler avec les dossiers de la mairie?",
    time: "Hier 12:21",
  },
  { id: 2, sender: "You", text: "Ouais, toujours...", time: "Hier 12:21" },
  { id: 3, sender: "Madipo Diop", text: "Ah je vois...", time: "Hier 12:21" },
  {
    id: 4,
    sender: "You",
    text: "C'est clair, c'est la même galère chaque année...",
    time: "Hier 12:21",
  },
];

const MessageItem = ({
  message,
  isLoggedUser,
}: {
  message: any;
  isLoggedUser: boolean;
}) => (
  <div className={`flex ${isLoggedUser ? "justify-end" : ""} mb-4`}>
    <div
      className={`max-w-xs ${
        isLoggedUser
          ? "bg-primary-700 text-white"
          : "bg-[#E4E6EE] text-gray-900"
      } p-3 rounded-lg`}
    >
      <p className="text-sm">{message.text}</p>
      <p className="text-xs text-gray-600 mt-2">{message.time}</p>
    </div>
  </div>
);

const Messagerie = () => {
  const [activeChat, setChatActive] = useState<number>();
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#FAFAFA] p-4 rounded-xl shadow-md w-1/4 mr-4">
        {/* Search bar */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="Search"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-between text-sm text-gray-600 mb-4">
          <button className="text-black font-bold">Tout</button>
          <button className="text-gray-500">Inter</button>
          <button className="text-gray-500">Intra</button>
          <button className="text-green-500">+</button>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto h-[calc(100vh-10rem)] space-y-4">
          {chats.map((chat) => (
            <ChatItem
              key={chat.id}
              chat={chat}
              activeChat={activeChat}
              onClick={() => setChatActive(chat.id)}
            />
          ))}
        </div>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col justify-between p-6">
        {/* Chat Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          {/* User Info */}
          <div className="flex items-center">
            {/* Profile Picture */}
            <img
              src="https://via.placeholder.com/40" // Replace with actual image URL
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            {/* Name and Status */}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                Madipo Diop (Mairie Grand Yoff)
              </p>
              <p className="text-xs text-gray-500">
                Dernière connexion il y a 3 heures
              </p>
            </div>
          </div>

          {/* Options Button */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto mt-4">
          {messages.map((message) => (
            <MessageItem
              key={message.id}
              message={message}
              isLoggedUser={message.sender === "You"}
            />
          ))}
        </div>

        {/* Input Field */}
        <div className="flex space-x-4">
          <input
            type="text"
            className="w-full p-3 border rounded-lg"
            placeholder="Message"
          />
          <button className="bg-primary-700 text-white px-4 py-2 rounded-lg">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messagerie;
