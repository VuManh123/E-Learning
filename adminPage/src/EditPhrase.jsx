import React, { useState } from 'react';

const EditPhrase = ({ initialPhrase, onSave }) => {
  const [phrase, setPhrase] = useState(initialPhrase);

  const handleInputChange = (event) => {
    setPhrase(event.target.value);
  };

  const handleSave = () => {
    // Call the onSave function passed as prop to save the phrase
    onSave(phrase);
  };

  return (
    <div className="edit-phrase-container">
      <h2>Edit Phrase</h2>
      <textarea
        value={phrase}
        onChange={handleInputChange}
        rows="4"
        cols="50"
        placeholder="Edit your phrase here"
      />
      <div className="button-container">
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditPhrase;
