type ChatItemProps = {
  activeChat: number | undefined;
  chat: {
    id: number;
    name: string;
    message: string;
    time: string;
    active: boolean;
  };
  onClick: () => void;
};

const ChatItem = ({ chat, activeChat, onClick }: ChatItemProps) => (
  <div
    className={`flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl cursor-pointer active:bg-gray-200 ${
      activeChat === chat.id ? "bg-gray-200" : ""
    }`}
    onClick={onClick}
  >
    <img
      src="https://via.placeholder.com/40"
      alt="avatar"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{chat.name}</p>
      <p className="text-xs text-gray-600 truncate">{chat.message}</p>
    </div>
    <p className="text-xs text-gray-500">{chat.time}</p>
  </div>
);
export default ChatItem;
