import { Button } from 'components/Base/Button/Button';
import { Input } from 'components/Base/Input/Input';
import React, { useState } from 'react';

interface ChatTextFieldProps {
  onSend: (message: string) => void;
}

const ChatTextField = () => {
  const [message, setMessage] = useState('');

  // const handleSend = () => {
  //   if (message.trim() !== '') {
  //     onSend(message);
  //     setMessage('');
  //   }
  // };

  // const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
  //   if (event.key === 'Enter') {
  //     handleSend();
  //   }
  // };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        className="rounded-none border-none px-4 py-2 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Post your opinion"
      />
      <Button
        type="button"
        className="bg-primary-500 hover:bg-primary-600"
        onClick={() => {}}
      >
        Post
      </Button>
    </div>
  );
};

export default ChatTextField;
