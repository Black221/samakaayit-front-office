import { useNavigate } from "react-router-dom";
import { MessageModel } from "../../types/models";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: MessageModel[];
}

export default function MessageList({ messages }: MessageListProps) {
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {messages.slice(0, 3).map((message, index) => (
          <li key={index} className="border-b-[0.3px] border-gray-200">
            <MessageItem message={message} />
          </li>
        ))}
      </ul>
      {messages.length > 3 && (
        <button
          onClick={() => navigate("/messagerie")}
          className="mt-4 text-sm text-primary-700 hover:underline"
        >
          Voir tout
        </button>
      )}
    </div>
  );
}
