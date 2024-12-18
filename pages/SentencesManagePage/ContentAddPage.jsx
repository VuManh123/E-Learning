import React, { useState } from 'react';
import BasicCheckbox from '../../components/BasicCheckbox';
import MultiSelector from '../../components/MultiSelector';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

function ContentAddPage() {
    const [sentences, setSentences] = useState('');
    const [meaning, setMeaning] = useState('');
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const vocabularyItem = {
            sentences,
            meaning,
            exampleSentence,
        };

        // Send vocabulary item to the server
        /*fetch('/api/vocabulary', {
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
            });*/
    };

    return (
        <div>
            <div className='navbar'><Navbar/></div>
            <div className='sbmc'>
                <div><Sidebar/></div>
                <div style={{padding: "10px", flexGrow: "1", width: "150px", height: "200px"}}>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label>NỘI DUNG CÂU BẰNG TIẾNG ANH</label>
                            <textarea
                                type="text"
                                value={sentences}
                                onChange={(e) => setSentences(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>NỘI DUNG CÂU BẰNG TIẾNG VIỆT</label>
                            <textarea
                                type="text"
                                value={meaning}
                                onChange={(e) => setMeaning(e.target.value)} 
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>CHỦ ĐỀ LIÊN QUAN</label>
                            <MultiSelector/>
                        </div>
                        <div className="form-group">
                            <label>Ghi chú</label>
                            <textarea
                                value={note} 
                                onChange={(e) => setNote(e.target.value)} 
                                required
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <BasicCheckbox/>
                        </div>
                        <button type="submit" className="btn">Thêm câu</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContentAddPage;