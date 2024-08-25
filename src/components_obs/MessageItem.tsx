interface MessageItemProps {
    imageURL: string;
    title: string;
    message: string;
}


const MessageItem = ({ imageURL,title,message }: MessageItemProps) => {
  return (
    <div className="flex items-center w-full">
        <img className="h-8 w-8 rounded-full bg-gray-100" width={32} height={32} src={imageURL} alt="profile image" />
        <div className="ml-3 w-[211px]">
            <p className="text-[8px] font-semibold text-[#3B4C3A] mb-1">{title}</p>
            <p className="text-[8px] text-slate-500 overflow-hidden text-ellipsis">{message}</p>
        </div>
    </div>
  )
}

export default MessageItem
