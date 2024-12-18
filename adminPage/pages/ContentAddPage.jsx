import React, { useState } from 'react';
import HeaderHP from '../components/HeaderHP';

function ContentAddPage() {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [exampleSentence, setExampleSentence] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const vocabularyItem = {
            word,
            meaning,
            exampleSentence,
        };

        // Send vocabulary item to the server
        fetch('/api/vocabulary', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vocabularyItem),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Vocabulary item added successfully!');
                setWord('');
                setMeaning('');
                setExampleSentence('');
            })
            .catch((error) => {
                console.error('Error adding vocabulary:', error);
                alert('Failed to add vocabulary.');
            });
    };

    return (
        <>
        <HeaderHP/>
        <div className="container">
            <h1>Create Vocabulary Item</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>Word:</label>
                    <input 
                        type="text" 
                        value={word} 
                        onChange={(e) => setWord(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Meaning:</label>
                    <input 
                        type="text" 
                        value={meaning} 
                        onChange={(e) => setMeaning(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Example Sentence:</label>
                    <textarea 
                        value={exampleSentence} 
                        onChange={(e) => setExampleSentence(e.target.value)} 
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn">Add Vocabulary</button>
            </form>
        </div>
        </>
    );
};

export default ContentAddPage;