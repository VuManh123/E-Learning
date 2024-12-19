import React, { useState } from 'react';
import BasicCheckbox from '../../components/BasicCheckbox';
import ImageUploader from '../../components/ImageUploader';
import LevelSelector from '../../components/LevelSelector';
import WordTypeSelector from '../../components/WordTypeSelector';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import WordSelector from '../../components/WordSelector';

function ContentAddPage() {
    const [word, setWord] = useState('');
    const [mean, setMean] = useState('');
    const [examples, setExamples] = useState('');
    const [type, setType] = useState('');
    const [level, setLevel] = useState('');
    const [phonetic, setPhonetic] = useState('');
    const [note, setNote] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [topics, setTopics] = useState('')
    const [synonyms, setSynonyms] = useState('');
    const [antonyms, setAntonyms] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [picture, setPicture] = useState('');
    const [wordType, setWordType] = useState("");

    const handleTypeChange = (type) => {
        setWordType(type);  // Cập nhật kiểu từ đã chọn trong state của component cha
        console.log("Kiểu từ đã chọn:", type);  // Hiển thị kết quả chọn
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        const WordItem = {
            word,
            meaning,
            type,
            level,
            phonetic,
            examples,
            picture,
            specialty,
            topics,
            synonyms,
            antonyms,
            note,
            isChecked,
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
        <div className='page'>
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
                            onChange={(e) => setMean(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>LOẠI TỪ</label>
                        <WordTypeSelector onTypeChange={handleTypeChange}/>
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
                            onChange={(e) => setPhonetic(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC VÍ DỤ SỬ DỤNG</label>
                        <input 
                            type="text" 
                            value={exampleSentence} 
                            onChange={(e) => setExamples(e.target.value)} 
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
                            onChange={(e) => setSpecialty(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>CÁC CHỦ ĐỀ LIÊN QUAN</label>
                        <input 
                            type="text" 
                            value={word} 
                            onChange={(e) => setTopics(e.target.value)}
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
                    <div className="form-group" style={{display: "flex"}}>
                            <label>
                                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                                Đã Kiểm Tra
                            </label>
                    </div>
                    <button type="submit" className="btn">Xác nhận</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ContentAddPage;