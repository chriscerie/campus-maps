import { useState } from 'react';

const CommentForm = (handleSubmit: (text: string) => void) => {
  const [text, setText] = useState('');
  const onSubmit = (event: any) => {
    event.preventDefault();
    handleSubmit(text);
  };
  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="comment-form-button">Write</button>
    </form>
  );
};

export default CommentForm;
