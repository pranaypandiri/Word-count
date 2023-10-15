import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const updateWordCount = () => {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
  };

  return (
    <div className="word-counter-box">
      <h2>Responsive Word Counter</h2>
      <div className="word-counter">
        <textarea
          className="text-area"
          placeholder="Type or paste your text here..."
          rows="10"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
        <p>Word Count: {updateWordCount()}</p>
      </div>
    </div>
  );
}

export default WordCounter;