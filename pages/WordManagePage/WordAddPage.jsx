import React, { useState } from 'react';
import BasicCheckbox from '../../components/BasicCheckbox';
import HeaderHP from '../../components/HeaderHP';
import ImageUploader from '../../components/ImageUploader';
import LevelSelector from '../../components/LevelSelector';
import WordTypeSelector from '../../components/WordTypeSelector';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import WordSelector from '../../components/WordSelector';

function ContentAddPage() {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [exampleSentence, setExampleSentence] = useState('');
    const [note, setNote] = useState('');
    

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
        <div>
        <div className='navbar'><Navbar/></div>
        <div className='sbmc'>
            <div><Sidebar/></div>
            <div style={{overflowY: "scroll", flexGrow: "1", maxHeight: "78vh", padding: "15px 10px"}}>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label>TÊN TỪ VỰNG</label>
                        <input 
                            type="text" 
                            value={word} 
                            onChange={(e) => setWord(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>NGHĨA CỦA TỪ VỰNG</label>
                        <input 
                            type="text" 
                            value={meaning} 
                            onChange={(e) => setMeaning(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>LOẠI TỪ</label>
                        <WordTypeSelector/>
                    </div>

                    <div className="form-group">
                        <label>CẤP ĐỘ</label>
                        <LevelSelector/>
                    </div>

                    <div className="form-group">
                        <label>PHIÊN ÂM</label>
                        <input 
                            type="text" 
                            value={meaning} 
                            onChange={(e) => setMeaning(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC VÍ DỤ SỬ DỤNG</label>
                        <input 
                            type="text" 
                            value={exampleSentence} 
                            onChange={(e) => setExampleSentence(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>HÌNH ẢNH MINH HOẠ</label>
                        <ImageUploader/>
                    </div>

                    <div className="form-group">
                        <label>CHUYÊN NGÀNH</label>
                        <input 
                            type="text" 
                            value={word} 
                            onChange={(e) => setWord(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC CHỦ ĐỀ LIÊN QUAN</label>
                        <input 
                            type="text" 
                            value={word} 
                            onChange={(e) => setWord(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC TỪ ĐỒNG NGHĨA</label>
                        <WordSelector/>
                    </div>

                    <div className="form-group">
                        <label>CÁC TỪ TRÁI NGHĨA</label>
                        <WordSelector/>
                    </div>

                    <div className="form-group">
                        <label>GHI CHÚ</label>
                        <textarea 
                            value={note} 
                            onChange={(e) => setNote(e.target.value)} 
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>KIỂM TRA</label>
                        <BasicCheckbox/>
                    </div>
                    <button type="submit" className="btn">Xác nhận</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ContentAddPage;