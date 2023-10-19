import { Button } from 'components/Base/Button/Button';
import { Input } from 'components/Base/Input/Input';
import React, { useState } from 'react';

interface PostTextFieldProps {
  onSend: (message: string) => void;
}

const PostTextField = () => {
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
    <div className="flex w-full items-center">
      <Input
        className="rounded-none border-none px-4 py-2 ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Post your opinion"
      />
      <Button
        type="button"
        className="mr-2 h-8 bg-primary-500 hover:bg-primary-600"
        onClick={() => {}}
      >
        Post
      </Button>
    </div>
  );
};

export default PostTextField;
