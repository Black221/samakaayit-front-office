import { MessageModel } from "../../types/models";

interface MessageItemProps {
  message: MessageModel;
}

const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <div className="flex items-center w-full py-[10px]">
      <img
        className="h-8 w-8 rounded-full bg-gray-100"
        width={32}
        height={32}
        src={message.imageURL}
        alt="profile image"
      />
      <div className="ml-3 w-[211px]">
        <p className="text-[10px] font-semibold text-[#3B4C3A] mb-1">
          {message.title}
        </p>
        <p className="text-[10px] text-slate-500 overflow-hidden text-ellipsis">
          {message.message}
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
